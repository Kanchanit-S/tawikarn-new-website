import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { href: "/services", label: "บริการ" },
  { href: "/portfolio", label: "ผลงาน" },
  { href: "/#about", label: "ทำไมต้องเรา" },
  { href: "/blog", label: "ข่าวสาร" },
  { href: "/#faq", label: "คำถามที่พบบ่อย" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-b from-[#1c1917]/94 to-[#14120f]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/brand/logo.webp"
            alt="โลโก้ บริษัท ทวิกานต์2019 จำกัด"
            width={42}
            height={42}
            className="h-[42px] w-[42px] object-contain"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-white">
              {siteConfig.shortNameTh}
            </span>
            <span className="text-xs text-stone-400">{siteConfig.taglineTh}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b-2 border-transparent py-2 text-sm font-medium text-stone-300 transition-colors hover:border-accent hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.phoneHref}
          className="flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-br from-accent to-accent-gold px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.2 2.2z" />
          </svg>
          โทรเลย
        </a>
      </div>
    </header>
  );
}
