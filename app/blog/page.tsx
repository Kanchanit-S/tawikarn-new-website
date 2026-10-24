import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ข่าวสารและโปรโมชั่น",
  description: "ข่าวสาร โปรโมชั่น และผลงานล่าสุดจากร้านป้ายทวิกานต์ 2019 ลพบุรี",
  alternates: { canonical: `${siteConfig.siteUrl}/blog` },
};

export const revalidate = 60; // ดึงข้อมูลใหม่จาก Sanity ทุก 60 วินาที (ISR)

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="relative w-full px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-[32px] font-bold text-white sm:text-4xl">
            ข่าวสารและโปรโมชั่น
          </h1>
          <p className="mt-3 text-stone-400">อัปเดตล่าสุดจากร้านป้ายทวิกานต์ 2019</p>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-10 text-center text-stone-400">
            <p className="mb-2">ยังไม่มีบทความ</p>
            <p className="text-sm">
              ทีมงานเพิ่มข่าวสารได้เองที่หน้า{" "}
              <Link href="/studio" className="text-accent-gold underline">
                /studio
              </Link>{" "}
              (ต้องตั้งค่า Sanity ก่อน ดู README)
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="tilt-card overflow-hidden rounded-2xl bg-white"
              >
                {post.mainImage && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={urlForImage(post.mainImage).width(600).height(400).url()}
                      alt={post.title}
                      fill
                      sizes="400px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-5">
                  <time className="text-xs text-stone-400">
                    {new Date(post.publishedAt).toLocaleDateString("th-TH", {
                      dateStyle: "long",
                    })}
                  </time>
                  <h2 className="mt-1.5 mb-2 text-lg font-semibold text-ink">{post.title}</h2>
                  {post.excerpt && (
                    <p className="text-sm leading-relaxed text-stone-500">{post.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
