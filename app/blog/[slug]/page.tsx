import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, getAllPostSlugs } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.siteUrl}/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="relative w-full px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="mb-6 inline-block text-sm text-stone-400 hover:text-white">
          ← ข่าวสารทั้งหมด
        </Link>
        <time className="block text-sm text-stone-400">
          {new Date(post.publishedAt).toLocaleDateString("th-TH", { dateStyle: "long" })}
        </time>
        <h1 className="mb-6 mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
          {post.title}
        </h1>
        {post.mainImage && (
          <div className="relative mb-8 h-72 w-full overflow-hidden rounded-2xl sm:h-96">
            <Image
              src={urlForImage(post.mainImage).width(1200).height(700).url()}
              alt={post.title}
              fill
              sizes="800px"
              className="object-cover"
            />
          </div>
        )}
        <div className="prose prose-invert prose-stone max-w-none">
          {post.body && <PortableText value={post.body} />}
        </div>
      </div>
    </article>
  );
}
