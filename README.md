# Lov'Ceylon Photography

Editorial wedding & portrait photography site — photo-first layout with Supabase gallery.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase photos

Images are loaded from **public storage buckets** on project `axghadmssrkzqaqvqyeo`, or from tables `photos`, `images`, `gallery`, `media`.

1. Upload images to a bucket (e.g. `photos`)
2. Set the bucket to **Public**
3. Optional: organize in folders — folder name becomes the collection title

Server env (`.env.local`):

- `SUPABASE_ACCESS_TOKEN` — management PAT (server only), or
- `SUPABASE_SERVICE_ROLE_KEY` — direct service role key

**Never commit tokens to git.**
