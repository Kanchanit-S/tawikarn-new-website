import fs from "fs";
import path from "path";
import {
  portfolioCategories as categories,
  portfolioCategoryLabels as categoryLabels,
  type PortfolioCategory,
} from "./portfolio-categories";

export type { PortfolioCategory } from "./portfolio-categories";
export { portfolioCategories, portfolioCategoryLabels } from "./portfolio-categories";

export type PortfolioItem = {
  src: string; // public path
  category: PortfolioCategory;
  title: string;
};

// อ่านรายชื่อไฟล์จริงจาก public/images/portfolio/<category>/ ตอน build
// เพิ่มรูปใหม่ได้แค่ไปวางไฟล์ในโฟลเดอร์นั้น ไม่ต้องแก้โค้ด
export function getPortfolioItems(): PortfolioItem[] {
  const base = path.join(process.cwd(), "public", "images", "portfolio");
  const items: PortfolioItem[] = [];

  for (const category of categories) {
    const dir = path.join(base, category);
    if (!fs.existsSync(dir)) continue;
    const files = fs
      .readdirSync(dir)
      .filter((f) => /\.(webp|jpg|jpeg|png)$/i.test(f))
      .sort();

    files.forEach((file, index) => {
      items.push({
        src: `/images/portfolio/${category}/${file}`,
        category,
        title: `ผลงาน${categoryLabels[category]} #${index + 1} ร้านป้ายลพบุรี ทวิกานต์ 2019`,
      });
    });
  }

  return items;
}

export function getCategoryLabel(category: PortfolioCategory): string {
  return categoryLabels[category];
}
