const token = process.env.SUPABASE_ACCESS_TOKEN;
const ref = process.env.SUPABASE_PROJECT_REF || "axghadmssrkzqaqvqyeo";
const url = `https://${ref}.supabase.co`;

if (!token) {
  console.error("Set SUPABASE_ACCESS_TOKEN");
  process.exit(1);
}

const keysRes = await fetch(`https://api.supabase.com/v1/projects/${ref}/api-keys`, {
  headers: { Authorization: `Bearer ${token}` },
});
const keys = await keysRes.json();
const service = keys.find((k) => k.name === "service_role")?.api_key;
if (!service) throw new Error("no service key");

const bucketsRes = await fetch(`${url}/storage/v1/bucket`, {
  headers: { Authorization: `Bearer ${service}`, apikey: service },
});
console.log("Buckets:", await bucketsRes.json());
