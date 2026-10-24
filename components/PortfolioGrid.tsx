"use client";

import { useState } from "react";
import Image from "next/image";
import type { PortfolioItem } from "@/lib/portfolio";
import type { PortfolioCategory } from "@/lib/portfolio-categories";
import { portfolioCategoryLabels } from "@/lib/portfolio-categories";

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [filter, setFilter] = useState<PortfolioCategory | "all">("all");
  const categories = Object.keys(portfolioCategoryLabels) as PortfolioCategory[];
  const visible = filter === "all" ? items : items.filter((i) => i.category === filter);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2.5">
        <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>
          ทั้งหมด ({items.length})
        </FilterPill>
        {categories.map((cat) => {
          const count = items.filter((i) => i.category === cat).length;
          if (count === 0) return null;
          return (
            <FilterPill key={cat} active={filter === cat} onClick={() => setFilter(cat)}>
              {portfolioCategoryLabels[cat]} ({count})
            </FilterPill>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((item, index) => (
          <div key={item.src} className="overflow-hidden rounded-2xl bg-white">
            <div className="relative h-44 w-full">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="260px"
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="p-3.5">
              <span className="mb-1.5 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                {portfolioCategoryLabels[item.category]}
              </span>
              <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active ? "bg-gradient-to-br from-accent to-accent-gold text-white" : "bg-white/10 text-stone-300 hover:bg-white/20"
      }`}
    >
      {children}
    </button>
  );
}
