export type PortfolioCategory = "vinyl" | "sticker" | "plaswood" | "lightbox" | "standy";

export const portfolioCategories: PortfolioCategory[] = [
  "vinyl",
  "sticker",
  "plaswood",
  "lightbox",
  "standy",
];

export const portfolioCategoryLabels: Record<PortfolioCategory, string> = {
  vinyl: "ป้ายไวนิล",
  sticker: "สติ๊กเกอร์",
  plaswood: "พลาสวูด / อะคริลิค",
  lightbox: "กล่องไฟ",
  standy: "ป้ายยืน",
};
