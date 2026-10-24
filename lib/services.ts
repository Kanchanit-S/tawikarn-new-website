export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  metaDescription: string;
  portfolioCategory: string; // matches the folder name under public/images/portfolio
  icon: "vinyl" | "sticker" | "plaswood" | "acrylic" | "lightbox" | "standy";
};

export const services: Service[] = [
  {
    slug: "pai-vinyl",
    name: "ป้ายไวนิล",
    shortDescription:
      "งานพิมพ์ไวนิลคมชัด ทนแดดทนฝน เหมาะกับป้ายโฆษณาทุกขนาด",
    longDescription:
      "รับพิมพ์ป้ายไวนิลทุกขนาด ตั้งแต่ป้ายแบคดรอปงานอีเวนต์ ป้ายคัตเอาท์ขนาดใหญ่ ไปจนถึงป้ายไวนิลติดหน้าร้าน ใช้หมึกพิมพ์คุณภาพ สีสดคมชัด ทนแดดทนฝน เหมาะกับการใช้งานกลางแจ้งในระยะยาว ออกแบบให้ตรงกับแบรนด์และข้อความที่ต้องการสื่อสาร",
    metaDescription:
      "รับทำป้ายไวนิล ลพบุรี พิมพ์คมชัด ทนแดดทนฝน ราคาคุ้มค่า ส่งงานไว ดูตัวอย่างผลงานจริงได้ที่ร้านป้ายทวิกานต์ 2019",
    portfolioCategory: "vinyl",
    icon: "vinyl",
  },
  {
    slug: "sticker",
    name: "สติ๊กเกอร์",
    shortDescription:
      "สติ๊กเกอร์ตัด สติ๊กเกอร์ฝ้า ติดกระจก ผนัง และฉลากสินค้า",
    longDescription:
      "บริการสติ๊กเกอร์ครบวงจร ทั้งสติ๊กเกอร์ตัด (Cutting Sticker) สำหรับตัวอักษรและโลโก้ สติ๊กเกอร์ฝ้าสำหรับติดกระจกออฟฟิศและร้านค้า รวมถึงฉลากสินค้าสำหรับแบรนด์ของคุณ งานละเอียด ติดแน่น ทนทาน",
    metaDescription:
      "รับทำสติ๊กเกอร์ ลพบุรี สติ๊กเกอร์ตัด สติ๊กเกอร์ฝ้าติดกระจก ฉลากสินค้า งานละเอียด ราคาเป็นกันเอง",
    portfolioCategory: "sticker",
    icon: "sticker",
  },
  {
    slug: "plaswood",
    name: "พลาสวูด / อักษรโลหะ",
    shortDescription: "อักษรนูน 3 มิติ งานป้ายหน้าร้านที่ดูพรีเมียม",
    longDescription:
      "งานตัวอักษรนูน 3 มิติจากพลาสวูดและโลหะ เหมาะกับป้ายหน้าร้าน ป้ายบริษัท และป้ายหน่วยงานราชการที่ต้องการความหรูหราและทนทาน ผลิตตามแบบที่ต้องการ ขัดผิวเรียบเนียน สีสม่ำเสมอ",
    metaDescription:
      "รับทำป้ายอักษรพลาสวูด อักษรนูน 3 มิติ ลพบุรี งานประณีต เหมาะกับป้ายหน้าร้านและหน่วยงาน",
    portfolioCategory: "plaswood",
    icon: "plaswood",
  },
  {
    slug: "acrylic",
    name: "อะคริลิค",
    shortDescription: "ป้ายอะคริลิคใส-ขุ่น งานตัวอักษรกัดกรด เงางามทนทาน",
    longDescription:
      "งานป้ายอะคริลิคทั้งแบบใสและขุ่น งานตัวอักษรกัดกรดสำหรับความหรูหรา เหมาะกับป้ายชื่อบริษัท ป้ายตั้งโต๊ะ และป้ายตกแต่งภายใน ผิวเงางาม คมชัด ทนทานต่อการใช้งาน",
    metaDescription:
      "รับทำป้ายอะคริลิค ลพบุรี งานกัดกรด เงางาม ทนทาน เหมาะกับป้ายชื่อบริษัทและป้ายตกแต่ง",
    portfolioCategory: "plaswood",
    icon: "acrylic",
  },
  {
    slug: "light-box",
    name: "กล่องไฟ",
    shortDescription:
      "กล่องไฟโฆษณา ป้ายไฟ LED ให้ร้านเด่นทั้งกลางวันและกลางคืน",
    longDescription:
      "ผลิตกล่องไฟโฆษณาและป้ายไฟ LED ให้ร้านค้าและธุรกิจของคุณโดดเด่นสะดุดตาทั้งกลางวันและกลางคืน เลือกได้ทั้งกล่องไฟหน้าเดียวและสองหน้า โครงสร้างแข็งแรง ทนทานต่อสภาพอากาศ",
    metaDescription:
      "รับทำกล่องไฟ ป้ายไฟ LED ลพบุรี โครงสร้างแข็งแรง ทนทาน เด่นชัดทั้งกลางวันกลางคืน",
    portfolioCategory: "lightbox",
    icon: "lightbox",
  },
  {
    slug: "standy",
    name: "ป้ายยืน / Standy",
    shortDescription: "ป้ายตั้งพื้น ป้ายโรลอัพ ใช้ซ้ำได้สำหรับทุกอีเวนต์",
    longDescription:
      "ป้ายยืนและป้ายโรลอัพสำหรับงานอีเวนต์ โปรโมชั่น และหน้าร้าน ขาตั้งแข็งแรง พับเก็บสะดวก ใช้ซ้ำได้หลายครั้ง เหมาะกับธุรกิจที่มีการจัดกิจกรรมหรือโปรโมชั่นบ่อย ๆ",
    metaDescription:
      "รับทำป้ายยืน ป้ายโรลอัพ ลพบุรี ขาตั้งแข็งแรง ใช้ซ้ำได้ เหมาะกับงานอีเวนต์และโปรโมชั่น",
    portfolioCategory: "standy",
    icon: "standy",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
