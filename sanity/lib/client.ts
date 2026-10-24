import { createClient, type SanityClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-10-01";

let client: SanityClient | null = null;

// สร้าง client แบบ lazy — @sanity/client เวอร์ชันใหม่จะ throw ทันทีตอนสร้าง client
// ถ้าไม่มี projectId จึงต้องเลี่ยงไม่ให้ถูกเรียกตอนยังไม่ได้ตั้งค่า Sanity (ดู sanityConfigured ใน queries.ts)
export function getSanityClient(): SanityClient {
  if (!client) {
    client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    });
  }
  return client;
}
