import Link from "next/link";
import { services } from "@/lib/services";
import { ServiceIcon } from "@/components/ServiceIcon";

const gradients = [
  ["#D9551F", "#E8A33D"],
  ["#E8A33D", "#1F4D32"],
  ["#1F4D32", "#D9551F"],
];

export default function Services() {
  return (
    <section id="services" className="relative w-full px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="font-display text-[32px] font-bold text-white">บริการของเรา</h2>
          <p className="mt-3 text-stone-400">งานป้ายครบวงจรทั้งงาน Indoor และ Outdoor</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const [c1, c2] = gradients[i % gradients.length];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="tilt-card rounded-2xl border border-stone-200/10 bg-white p-7 text-ink"
              >
                <div
                  className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-[14px]"
                  style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
                >
                  <ServiceIcon icon={service.icon} className="h-[26px] w-[26px]" stroke="#fff" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{service.name}</h3>
                <p className="text-sm leading-relaxed text-stone-500">{service.shortDescription}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
