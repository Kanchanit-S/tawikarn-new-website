import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { localBusinessJsonLd } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// โฮสต์ฟอนต์เองแทนการดึงจาก Google Fonts สด ๆ ตอน build/dev
// เลี่ยงบั๊กของ Turbopack ที่ next/font/google ชนกับฟอนต์หลายน้ำหนัก/หลาย subset
// (ไฟล์ .ttf อยู่ภายใต้สัญญาอนุญาต OFL ดูรายละเอียดที่ app/fonts/*/OFL.txt)
const kanit = localFont({
  src: [
    { path: "./fonts/kanit/Kanit-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/kanit/Kanit-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/kanit/Kanit-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-kanit",
  display: "swap",
});

const notoThai = localFont({
  src: "./fonts/noto-sans-thai/NotoSansThai-Variable.ttf",
  weight: "400 600",
  style: "normal",
  declarations: [{ prop: "font-stretch", value: "100%" }],
  variable: "--font-noto-thai",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "ร้านป้ายลพบุรี รับทำป้ายโฆษณา ป้ายไวนิล กล่องไฟ สติ๊กเกอร์ฉลากสินค้า | ทวิกานต์ 2019",
    template: "%s | ทวิกานต์ 2019 ร้านป้ายลพบุรี",
  },
  description:
    "บริษัท ทวิกานต์2019 จำกัด ร้านป้ายลพบุรี รับทำป้ายโฆษณา ป้ายไวนิล สติ๊กเกอร์ กล่องไฟ พลาสวูด อะคริลิค ฉลากสินค้า งาน Indoor Outdoor ครบวงจร",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.siteUrl,
    siteName: siteConfig.shortNameTh,
    title: "ร้านป้ายลพบุรี รับทำป้ายโฆษณาครบวงจร | ทวิกานต์ 2019",
    description:
      "ป้ายไวนิล สติ๊กเกอร์ กล่องไฟ อะคริลิค พลาสวูด ป้ายยืน ออกแบบและผลิตโดยทีมช่างมืออาชีพในลพบุรี",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.companyNameTh,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ร้านป้ายลพบุรี รับทำป้ายโฆษณาครบวงจร | ทวิกานต์ 2019",
    description:
      "ป้ายไวนิล สติ๊กเกอร์ กล่องไฟ อะคริลิค พลาสวูด ป้ายยืน ออกแบบและผลิตโดยทีมช่างมืออาชีพในลพบุรี",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${kanit.variable} ${notoThai.variable}`}>
      <body className="font-body bg-ink text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <div className="relative flex min-h-screen flex-col bg-brand-glow bg-ink">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
