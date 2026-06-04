export type Photo = {
  id: string;
  url: string;
  path: string;
  bucket: string;
  name: string;
  category?: string;
};

export type PhotoGroup = {
  title: string;
  slug: string;
  photos: Photo[];
};
