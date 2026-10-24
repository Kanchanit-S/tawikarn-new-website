import Image from "next/image";
import Link from "next/link";
import { getPortfolioItems, getCategoryLabel } from "@/lib/portfolio";

export default function PortfolioPreview() {
  const all = getPortfolioItems();
  // หยิบมาแสดงตัวอย่างหมวดละ 1 ภาพ (รวม 5 ภาพ) ส่วนหน้า /portfolio แสดงครบทั้งหมด
  const seen = new Set<string>();
  const preview = all.filter((item) => {
    if (seen.has(item.category)) return false;
    seen.add(item.category);
    return true;
  });

  return (
    <section id="portfolio" className="relative w-full px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="font-display text-[32px] font-bold text-white">ผลงานของเรา</h2>
          <p className="mt-3 text-stone-400">
            ตัวอย่างงานจริงที่เคยส่งมอบให้ลูกค้าในลพบุรีและใกล้เคียง
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {preview.map((item) => (
            <div key={item.src} className="tilt-card overflow-hidden rounded-2xl bg-white">
              <div className="relative h-[190px] w-full">
                <Image src={item.src} alt={item.title} fill sizes="220px" className="object-cover" />
              </div>
              <div className="p-4">
                <span className="mb-2 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                  {getCategoryLabel(item.category)}
                </span>
                <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-block rounded-[10px] border-[1.5px] border-stone-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            ดูผลงานทั้งหมด {all.length} ชิ้น
          </Link>
        </div>
      </div>
    </section>
  );
}
