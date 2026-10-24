const points = [
  {
    title: "ผลงานกว่า 80 ชิ้น",
    description: "มีตัวอย่างงานจริงให้ดูก่อนตัดสินใจ ทำให้ลูกค้าทั่วลพบุรีมาแล้ว",
  },
  {
    title: "ครบวงจรในที่เดียว",
    description: "ไวนิล สติ๊กเกอร์ กล่องไฟ อะคริลิค พลาสวูด ไม่ต้องวิ่งหลายร้าน",
  },
  {
    title: "ออกแบบและผลิตเอง",
    description: "ทีมออกแบบและโรงงานผลิตอยู่ที่เดียวกัน งานไวและควบคุมคุณภาพได้",
  },
  {
    title: "ดูแลหลังการขาย",
    description: "ให้คำปรึกษา แก้ไข และซ่อมบำรุงป้ายหลังติดตั้งเสร็จ",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="relative w-full px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="font-display text-[32px] font-bold text-white">ทำไมต้องเลือกเรา</h2>
          <p className="mt-3 text-stone-400">ร้านป้ายลพบุรีที่ลูกค้าไว้วางใจ</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="tilt-card rounded-2xl bg-paper p-6">
              <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-green/10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1F4D32"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-1.5 text-base font-semibold text-ink">{p.title}</h3>
              <p className="text-sm leading-relaxed text-stone-500">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
