import type { Metadata } from "next";
import { getPortfolioItems } from "@/lib/portfolio";
import PortfolioGrid from "@/components/PortfolioGrid";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ผลงานของเรา",
  description:
    "รวมผลงานจริงของร้านป้ายทวิกานต์ 2019 ลพบุรี ป้ายไวนิล สติ๊กเกอร์ พลาสวูด กล่องไฟ และป้ายยืน กรองดูตามหมวดบริการได้",
  alternates: { canonical: `${siteConfig.siteUrl}/portfolio` },
};

export default function PortfolioPage() {
  const items = getPortfolioItems();
  return (
    <section className="relative w-full px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="font-display text-[32px] font-bold text-white sm:text-4xl">
            ผลงานของเรา
          </h1>
          <p className="mt-3 text-stone-400">
            ผลงานจริง {items.length} ชิ้น ที่เคยส่งมอบให้ลูกค้าในลพบุรีและใกล้เคียง
          </p>
        </div>
        <PortfolioGrid items={items} />
      </div>
    </section>
  );
}
