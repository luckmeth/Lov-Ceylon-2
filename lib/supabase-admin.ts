const PROJECT_REF = process.env.SUPABASE_PROJECT_REF ?? "axghadmssrkzqaqvqyeo";
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  `https://${PROJECT_REF}.supabase.co`;
const ACCESS_TOKEN = process.env.SUPABASE_ACCESS_TOKEN;

type ApiKey = { name: string; api_key: string };

let cachedServiceKey: string | null = null;

export async function getServiceRoleKey(): Promise<string> {
  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return process.env.SUPABASE_SERVICE_ROLE_KEY;
  }
  if (cachedServiceKey) return cachedServiceKey;
  if (!ACCESS_TOKEN) {
    throw new Error("Missing SUPABASE_ACCESS_TOKEN or SUPABASE_SERVICE_ROLE_KEY");
  }
  const res = await fetch(
    `https://api.supabase.com/v1/projects/${PROJECT_REF}/api-keys`,
    {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) throw new Error(`Failed to fetch API keys: ${res.status}`);
  const keys = (await res.json()) as ApiKey[];
  const service = keys.find((k) => k.name === "service_role");
  if (!service?.api_key) throw new Error("service_role key not found");
  cachedServiceKey = service.api_key;
  return service.api_key;
}

export async function listBuckets(): Promise<string[]> {
  const key = await getServiceRoleKey();
  const res = await fetch(`${SUPABASE_URL}/storage/v1/bucket`, {
    headers: { Authorization: `Bearer ${key}`, apikey: key },
    next: { revalidate: 300 },
  });
  if (!res.ok) return [];
  const buckets = (await res.json()) as { name: string; public?: boolean }[];
  return buckets.map((b) => b.name);
}

type StorageItem = {
  name: string;
  id?: string;
  metadata?: { mimetype?: string };
};

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif|heic)$/i;

export async function listObjects(
  bucket: string,
  prefix = ""
): Promise<{ path: string; name: string }[]> {
  const key = await getServiceRoleKey();
  const res = await fetch(
    `${SUPABASE_URL}/storage/v1/object/list/${bucket}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        apikey: key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prefix,
        limit: 1000,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      }),
      next: { revalidate: 120 },
    }
  );
  if (!res.ok) return [];
  const items = (await res.json()) as StorageItem[];
  const files: { path: string; name: string }[] = [];
  const folders: string[] = [];

  for (const item of items) {
    const fullPath = prefix ? `${prefix}/${item.name}` : item.name;
    const isFile = IMAGE_EXT.test(item.name) || item.metadata?.mimetype?.startsWith("image/");
    if (isFile) {
      files.push({ path: fullPath, name: item.name });
    } else if (!item.name.includes(".")) {
      folders.push(fullPath);
    }
  }

  for (const folder of folders) {
    const nested = await listObjects(bucket, folder);
    files.push(...nested);
  }

  return files;
}

export function publicUrl(bucket: string, path: string): string {
  const encoded = path.split("/").map(encodeURIComponent).join("/");
  return `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${encoded}`;
}
