// ตั้งค่ากลางของเว็บไซต์ — ข้อมูลธุรกิจดึงมาจากเว็บเดิม (tawikarnScoda) แล้ว
// ค่าที่ยังเป็น [วงเล็บ] คือยังไม่พบข้อมูลจริง ต้องให้ร้านยืนยันก่อนขึ้นเว็บจริง
export const siteConfig = {
  companyNameTh: "บริษัท ทวิกานต์2019 จำกัด",
  shortNameTh: "ทวิกานต์ 2019",
  taglineTh: "ร้านป้ายลพบุรี",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.tawikarn.com",

  phone: "062-563-8090",
  phoneHref: "tel:+66625638090",
  email: "ying-1166@hotmail.com",
  lineId: "@tawi",
  lineUrl: "https://lin.ee/95qRzxt",
  address: "25/8 ถนนพระยาพิชัยดาบหัก (ช.19) ตำบลเขาสามยอด อำเภอเมืองลพบุรี จังหวัดลพบุรี 15000",
  openingHours: "จันทร์-เสาร์ 09:00-17:30",
  facebookPageName: "ร้านป้ายลพบุรี บริษัท ทวิกานต์",
  facebookUrl: "https://www.facebook.com/thawikarn1",
  // พิกัดจากหมุด Google Maps จริงของร้าน (ใช้ค่า !3d!4d ซึ่งเป็นตำแหน่งหมุดจริง แม่นยำกว่าค่า @ ที่เป็นแค่จุดกึ่งกลางจอ)
  googleMapsEmbedSrc:
    "https://maps.google.com/maps?width=600&height=400&hl=th&q=14.8463863,100.6461477(บริษัท ทวิกานต์2019 จำกัด)&t=&z=17&ie=UTF8&iwloc=B&output=embed",
  googleMapsUrl:
    "https://www.google.com/maps/place/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B8%97%E0%B8%A7%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%99%E0%B8%95%E0%B9%8C2019+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94/@14.8464309,100.6451487,17.94z/data=!4m6!3m5!1s0x311e01b91cd1ee65:0xbfac80b7a634adca!8m2!3d14.8463863!4d100.6461477!16s%2Fg%2F11fzbwrt1x",

  // พิกัด GPS จริงของร้าน — ได้จากหมุด Google Maps ที่ร้านส่งมา (ตำแหน่งหมุด !3d!4d)
  geo: {
    latitude: 14.8463863,
    longitude: 100.6461477,
  },
};

export const brandColors = {
  accent: "#D9551F",
  gold: "#E8A33D",
  green: "#1F4D32",
  ink: "#1C1917",
  paper: "#FAF7F2",
};
