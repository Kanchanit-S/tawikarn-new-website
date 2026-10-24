import { siteConfig } from "@/lib/site-config";
// ปิดฉาก 3D เครื่องจักรใน Hero ไว้ก่อน (คอมเมนต์ไว้ ยังไม่ลบ — เปิดกลับได้ทีหลัง)
// import HeroScene from "@/components/HeroScene";

export default function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden">
      {/* <HeroScene /> */}
      {/* <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink from-5% via-ink/85 via-45% to-transparent"
      /> */}

      <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center px-6 py-16 text-center">
        <span className="mb-7 inline-block rounded-full bg-accent/20 px-3.5 py-1.5 text-[13px] font-semibold text-accent-gold">
          {siteConfig.companyNameTh}
        </span>

        <h1 className="mb-5 font-display text-3xl font-bold leading-tight text-white sm:text-[44px]">
          ป้ายโฆษณาครบวงจร
          <br />
          งานคมชัด ส่งไว ทั่วลพบุรี
        </h1>
        <p className="mx-auto mb-8 max-w-[560px] text-base leading-relaxed text-stone-300 sm:text-[17px]">
          ไวนิล สติ๊กเกอร์ กล่องไฟ อะคริลิค พลาสวูด ป้ายยืน ออกแบบและผลิตโดยทีมช่างมืออาชีพ
          ดูแลตั้งแต่ขึ้นแบบจนถึงติดตั้งหน้างาน
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={siteConfig.phoneHref}
            className="rounded-[10px] bg-gradient-to-br from-accent to-accent-gold px-7 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            โทรปรึกษาฟรี
          </a>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] border-[1.5px] border-stone-600 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10 hover:border-stone-400"
          >
            แชทไลน์
          </a>
        </div>
      </div>
    </section>
  );
}
