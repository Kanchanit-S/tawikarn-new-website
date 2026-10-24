"use client";

import { useState } from "react";
import { faqItems } from "@/lib/seo";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-[760px]">
        <div className="mb-12 text-center">
          <h2 className="font-display text-[32px] font-bold text-white">คำถามที่พบบ่อย</h2>
          <p className="mt-3 text-stone-400">
            ยังไม่แน่ใจเรื่องไหน ลองดูคำตอบด้านล่าง หรือทักมาคุยกับเราได้เลย
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[14px] border border-stone-200/10 bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-[15px] font-semibold text-ink">{item.question}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#78716C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-stone-600">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
