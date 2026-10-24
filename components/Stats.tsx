const stats = [
  { value: "80+", label: "ผลงานจริงที่ส่งมอบแล้ว" },
  { value: "6", label: "หมวดบริการครบวงจร" },
];

export default function Stats() {
  return (
    <section className="relative z-10 w-full">
      <div className="glass-card mx-auto -mt-14 flex max-w-[1040px] flex-wrap justify-around gap-7 rounded-[20px] px-6 py-7 text-center shadow-[0_20px_40px_rgba(28,25,23,0.14)]">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-[28px] font-bold text-accent">{s.value}</div>
            <div className="mt-1 text-sm text-stone-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
