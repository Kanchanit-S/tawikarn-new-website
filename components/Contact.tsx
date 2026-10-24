import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-[32px] font-bold text-white">ติดต่อเรา</h2>
          <p className="mt-3 text-stone-400">ปรึกษาฟรี ไม่มีค่าใช้จ่าย</p>
        </div>
        <div className="flex flex-wrap gap-10">
          <div className="min-w-[280px] flex-1 basis-[360px]">
            <ContactRow
              icon={
                <path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z" />
              }
              extra={<circle cx="12" cy="9" r="2.5" />}
              label="ที่อยู่ร้าน"
              value={siteConfig.address}
            />
            <ContactRow
              icon={
                <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.2 2.2z" />
              }
              label="เบอร์โทรศัพท์"
              value={siteConfig.phone}
            />
            <ContactRow
              icon={
                <>
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M8 9h8M8 13h5" />
                </>
              }
              label="LINE และเวลาทำการ"
              value={`LINE ID: ${siteConfig.lineId} · ${siteConfig.openingHours}`}
              last
            />
            <a
              href={siteConfig.phoneHref}
              className="mt-2 inline-block rounded-[10px] bg-gradient-to-br from-accent to-accent-gold px-8 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              โทรเลยตอนนี้
            </a>
          </div>
          <div className="min-h-[280px] min-w-[280px] flex-1 basis-[360px] overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src={siteConfig.googleMapsEmbedSrc}
              title="แผนที่ร้าน"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 280 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  extra,
  label,
  value,
  last,
}: {
  icon: React.ReactNode;
  extra?: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div className={`flex gap-3.5 ${last ? "mb-8" : "mb-5"}`}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D9551F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        {icon}
        {extra}
      </svg>
      <div>
        <div className="mb-0.5 text-[13px] text-stone-400">{label}</div>
        <div className="text-[15px] text-white">{value}</div>
      </div>
    </div>
  );
}
