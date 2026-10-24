import { siteConfig } from "./site-config";

// LocalBusiness schema — สิ่งสำคัญที่สุดสำหรับ GEO: ให้ AI/Google ดึงข้อมูลร้านไปตอบได้ถูกต้อง
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.companyNameTh,
    alternateName: siteConfig.shortNameTh,
    description:
      "ร้านป้ายลพบุรี รับทำป้ายโฆษณาครบวงจร ป้ายไวนิล สติ๊กเกอร์ กล่องไฟ อะคริลิค พลาสวูด ป้ายยืน งาน Indoor Outdoor",
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone.startsWith("[") ? undefined : siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "ลพบุรี",
      addressRegion: "ลพบุรี",
      addressCountry: "TH",
    },
    ...(siteConfig.geo.latitude && siteConfig.geo.longitude
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.geo.latitude,
            longitude: siteConfig.geo.longitude,
          },
        }
      : {}),
    sameAs: [siteConfig.facebookUrl].filter((u) => !u.includes("[")),
    priceRange: "$$",
  };
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(params: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: params.name,
    description: params.description,
    url: params.url,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.companyNameTh,
      "@id": `${siteConfig.siteUrl}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: "ลพบุรี",
    },
  };
}

export const faqItems = [
  {
    question: "ป้ายไวนิลราคาเริ่มต้นเท่าไหร่?",
    answer:
      "ราคาขึ้นอยู่กับชิ้นงาน (ขนาด วัสดุ และความซับซ้อนของงานพิมพ์) ทักสอบถามร้านพร้อมแจ้งขนาดและแบบที่ต้องการ เพื่อรับใบเสนอราคา",
  },
  {
    question: "ใช้เวลาผลิตกี่วัน?",
    answer:
      "ระยะเวลาผลิตขึ้นอยู่กับประเภทและปริมาณงาน สามารถทักสอบถามร้านโดยตรงเพื่อแจ้งกำหนดส่งที่แน่นอนได้",
  },
  {
    question: "รับติดตั้งนอกพื้นที่จังหวัดลพบุรีหรือไม่?",
    answer:
      "รับทั้งในและนอกพื้นที่ลพบุรี ครอบคลุมจังหวัดใกล้เคียง สอบถามค่าบริการติดตั้งเพิ่มเติมได้ที่ร้าน",
  },
  {
    question: "มีบริการออกแบบให้ด้วยหรือไม่?",
    answer:
      "มีทีมออกแบบช่วยแนะนำเลย์เอาต์และจัดไฟล์งานให้เหมาะกับการพิมพ์ ลูกค้าไม่จำเป็นต้องมีไฟล์กราฟิกมาเอง",
  },
];
