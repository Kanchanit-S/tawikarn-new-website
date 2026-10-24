import { getSanityClient, projectId } from "./client";

export type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  mainImage?: any;
  body?: any;
};

// ถ้ายังไม่ได้ตั้งค่า Sanity (ไม่มี project id) ให้คืนค่าว่างไปก่อน
// เว็บไซต์ยังใช้งานหน้าอื่นได้ปกติ ไม่พังทั้งเว็บ
function sanityConfigured() {
  return Boolean(projectId);
}

export async function getAllPosts(): Promise<Post[]> {
  if (!sanityConfigured()) return [];
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage
  }`;
  return getSanityClient().fetch(query);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!sanityConfigured()) return null;
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    body
  }`;
  return getSanityClient().fetch(query, { slug });
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!sanityConfigured()) return [];
  const query = `*[_type == "post" && defined(slug.current)][].slug.current`;
  return getSanityClient().fetch(query);
}
