import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear() + 543 - 543; // ปี ค.ศ. ปัจจุบัน
  return (
    <footer className="w-full px-6 pb-6 pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap justify-between gap-10">
          <div className="max-w-xs flex-1 basis-64">
            <div className="mb-3.5 flex items-center gap-2.5">
              <Image
                src="/images/brand/logo.webp"
                alt="โลโก้ บริษัท ทวิกานต์2019 จำกัด"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-base font-bold text-white">
                {siteConfig.shortNameTh}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400">
              ร้านป้ายลพบุรี รับทำป้ายโฆษณาครบวงจร ไวนิล สติ๊กเกอร์ กล่องไฟ
              อะคริลิค พลาสวูด ป้ายยืน งาน Indoor Outdoor
            </p>
          </div>

          <div>
            <div className="mb-3.5 text-sm font-semibold text-white">เมนู</div>
            <div className="flex flex-col gap-2.5">
              <Link href="/services" className="text-sm text-stone-400 hover:text-white">
                บริการ
              </Link>
              <Link href="/portfolio" className="text-sm text-stone-400 hover:text-white">
                ผลงาน
              </Link>
              <Link href="/blog" className="text-sm text-stone-400 hover:text-white">
                ข่าวสาร
              </Link>
              <Link href="/#faq" className="text-sm text-stone-400 hover:text-white">
                คำถามที่พบบ่อย
              </Link>
              <Link href="/#contact" className="text-sm text-stone-400 hover:text-white">
                ติดต่อเรา
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-3.5 text-sm font-semibold text-white">ช่องทางติดต่อ</div>
            <div className="flex flex-col gap-2.5 text-sm text-stone-400">
              <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Facebook: {siteConfig.facebookPageName}
              </a>
              <a href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                LINE: {siteConfig.lineId}
              </a>
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-5 text-center">
          <span className="text-xs text-stone-500">
            © {year} {siteConfig.companyNameTh} สงวนลิขสิทธิ์
          </span>
        </div>
      </div>
    </footer>
  );
}
