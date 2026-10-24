import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services";
import { getPortfolioItems } from "@/lib/portfolio";
import { ServiceIcon } from "@/components/ServiceIcon";
import { serviceJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.metaDescription,
    alternates: { canonical: `${siteConfig.siteUrl}/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedImages = getPortfolioItems()
    .filter((item) => item.category === service.portfolioCategory)
    .slice(0, 6);

  const jsonLd = serviceJsonLd({
    name: service.name,
    description: service.metaDescription,
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
  });

  return (
    <section className="relative w-full px-6 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        <nav className="mb-6 text-sm text-stone-400">
          <Link href="/services" className="hover:text-white">
            บริการ
          </Link>{" "}
          / <span className="text-white">{service.name}</span>
        </nav>

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-gold">
          <ServiceIcon icon={service.icon} className="h-7 w-7" stroke="#fff" />
        </div>
        <h1 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
          {service.name}
        </h1>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-stone-300">
          {service.longDescription}
        </p>

        {relatedImages.length > 0 && (
          <>
            <h2 className="mb-5 text-xl font-semibold text-white">ตัวอย่างผลงาน</h2>
            <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {relatedImages.map((img) => (
                <div key={img.src} className="relative h-40 overflow-hidden rounded-xl bg-white">
                  <Image src={img.src} alt={img.title} fill sizes="200px" className="object-cover" />
                </div>
              ))}
            </div>
          </>
        )}

        <div className="rounded-2xl bg-gradient-to-br from-accent to-accent-gold p-8 text-center">
          <p className="mb-4 text-lg font-semibold text-white">
            สนใจบริการ{service.name} ปรึกษาฟรี ไม่มีค่าใช้จ่าย
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-[10px] bg-ink px-7 py-3 text-sm font-semibold text-white"
          >
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </section>
  );
}
