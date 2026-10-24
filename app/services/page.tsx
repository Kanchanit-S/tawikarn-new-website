import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { ServiceIcon } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "บริการทำป้ายทุกประเภท",
  description:
    "บริการทำป้ายครบวงจรในลพบุรี ป้ายไวนิล สติ๊กเกอร์ พลาสวูด อะคริลิค กล่องไฟ และป้ายยืน ดูรายละเอียดแต่ละบริการได้ที่นี่",
};

export default function ServicesPage() {
  return (
    <section className="relative w-full px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h1 className="font-display text-[32px] font-bold text-white sm:text-4xl">
            บริการทำป้ายทุกประเภท
          </h1>
          <p className="mt-3 text-stone-400">งานป้ายครบวงจรทั้งงาน Indoor และ Outdoor ในลพบุรี</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="tilt-card rounded-2xl bg-white p-7 text-ink"
            >
              <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-gradient-to-br from-accent to-accent-gold">
                <ServiceIcon icon={service.icon} className="h-[26px] w-[26px]" stroke="#fff" />
              </div>
              <h2 className="mb-2 text-lg font-semibold">{service.name}</h2>
              <p className="text-sm leading-relaxed text-stone-500">{service.shortDescription}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent">
                ดูรายละเอียด →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
