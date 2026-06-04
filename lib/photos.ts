import { createClient } from "@supabase/supabase-js";
import { listBuckets, listObjects, publicUrl, getServiceRoleKey } from "./supabase-admin";
import type { Photo, PhotoGroup } from "./types";

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function categoryFromPath(path: string): string {
  const parts = path.split("/").filter(Boolean);
  if (parts.length > 1) return parts[0].replace(/[-_]/g, " ");
  return "Gallery";
}

async function getPhotosFromDatabase(): Promise<Photo[]> {
  try {
    const key = await getServiceRoleKey();
    const url =
      process.env.NEXT_PUBLIC_SUPABASE_URL ??
      "https://axghadmssrkzqaqvqyeo.supabase.co";
    const supabase = createClient(url, key);
    const tables = ["photos", "images", "gallery", "media"];

    for (const table of tables) {
      const { data, error } = await supabase
        .from(table)
        .select("*")
        .limit(500);
      if (error || !data?.length) continue;

      return data
        .map((row: Record<string, unknown>, i: number) => {
          const src =
            (row.url as string) ||
            (row.image_url as string) ||
            (row.public_url as string) ||
            (row.path as string);
          const bucket = (row.bucket as string) || "photos";
          const path = (row.file_path as string) || (row.path as string) || String(i);
          if (!src) return null;
          const urlFinal = src.startsWith("http")
            ? src
            : publicUrl(bucket, path);
          return {
            id: String(row.id ?? `${table}-${i}`),
            url: urlFinal,
            path,
            bucket,
            name: (row.title as string) || (row.name as string) || path,
            category:
              (row.category as string) ||
              (row.album as string) ||
              categoryFromPath(path),
          } satisfies Photo;
        })
        .filter(Boolean) as Photo[];
    }
  } catch {
    /* storage fallback */
  }
  return [];
}

export async function getAllPhotos(): Promise<Photo[]> {
  const fromDb = await getPhotosFromDatabase();
  if (fromDb.length > 0) return fromDb;

  const buckets = await listBuckets();
  const defaults = ["photos", "images", "gallery", "uploads", "lovceylon", "media"];
  const photoBuckets = [
    ...new Set([...(buckets.includes("photos") ? ["photos"] : []), ...buckets, ...defaults]),
  ];

  const photos: Photo[] = [];
  const seen = new Set<string>();

  for (const bucket of photoBuckets) {
    const objects = await listObjects(bucket);
    for (const obj of objects) {
      const id = `${bucket}/${obj.path}`;
      if (seen.has(id)) continue;
      seen.add(id);
      photos.push({
        id,
        url: publicUrl(bucket, obj.path),
        path: obj.path,
        bucket,
        name: obj.name,
        category: categoryFromPath(obj.path),
      });
    }
  }

  return photos.sort((a, b) => a.path.localeCompare(b.path));
}

export async function getPhotoGroups(): Promise<PhotoGroup[]> {
  const photos = await getAllPhotos();
  const map = new Map<string, Photo[]>();

  for (const photo of photos) {
    const cat = photo.category ?? "Gallery";
    const key = cat
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(photo);
  }

  return Array.from(map.entries())
    .map(([title, groupPhotos]) => ({
      title,
      slug: slugify(title),
      photos: groupPhotos,
    }))
    .sort((a, b) => b.photos.length - a.photos.length);
}

export function pickFeatured(photos: Photo[], count: number): Photo[] {
  if (photos.length === 0) return [];
  if (photos.length <= count) return photos;
  const step = Math.max(1, Math.floor(photos.length / count));
  const picked: Photo[] = [];
  for (let i = 0; i < count; i++) {
    picked.push(photos[(i * step) % photos.length]);
  }
  return picked;
}

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
