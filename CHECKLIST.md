# Checklist ก่อนเปิดเว็บจริง — ทวิกานต์ 2019

อัปเดตล่าสุดจากการตรวจโค้ดจริงในโปรเจกต์ (ไม่ใช่ checklist ทั่วไป) แบ่งตามความสำคัญ:
🔴 ต้องทำก่อนขึ้นเว็บจริง · 🟡 ควรทำ (กระทบ SEO/ความน่าเชื่อถือ) · 🟢 ทำเพิ่มได้ภายหลัง

---

## 1. ข้อมูลธุรกิจจริง (`lib/site-config.ts`)

ดึงมาจากเว็บเดิม ([tawikarnScoda](../tawikarnScoda) — React CRA) แล้ว ยืนยัน render ถูกต้องทั้งเว็บ
(Header/Hero/Contact/Footer + ปุ่มโทร/แชทไลน์ ใช้ `tel:`/LINE link จริงแล้ว ไม่ใช่แค่ scroll เฉยๆ)

- [x] ~~🔴 เบอร์โทรร้าน~~ — `062-563-8090`
- [x] ~~🔴 LINE ID~~ — `@tawi` (`https://lin.ee/95qRzxt`)
- [x] ~~🔴 ที่อยู่เต็ม~~ — `25/8 ถนนพระยาพิชัยดาบหัก (ช.19) ตำบลเขาสามยอด อำเภอเมืองลพบุรี จังหวัดลพบุรี 15000`
- [x] ~~🟡 พิกัด GPS ร้าน (`geo.latitude`, `geo.longitude`)~~ — `14.8463863, 100.6461477` (จากหมุด Google Maps จริงที่ร้านส่งมา) ใส่ใน `siteConfig.geo` แล้ว LocalBusiness schema ดึงไปใช้อัตโนมัติ
- [x] ~~🔴 เวลาเปิด-ปิด~~ — `จันทร์-เสาร์ 09:00-17:30`
- [x] ~~🟡 ชื่อเพจ Facebook จริง~~ — `ร้านป้ายลพบุรี บริษัท ทวิกานต์` (`https://www.facebook.com/thawikarn1`)
- [x] ~~🟢 อีเมลร้าน~~ — พบเพิ่มเติม: `ying-1166@hotmail.com` (ใส่ไว้ใน `siteConfig.email` แล้ว แต่ยังไม่ได้โชว์ในหน้าเว็บจุดไหน)
- [x] ~~🟡 คำตอบ FAQ "ใช้เวลาผลิตกี่วัน?"~~ — เปลี่ยนเป็น "ขึ้นอยู่กับประเภทและปริมาณงาน ทักสอบถามร้านโดยตรงเพื่อแจ้งกำหนดส่งที่แน่นอน"
- [x] ~~🟡 คำตอบ FAQ "ป้ายไวนิลราคาเริ่มต้นเท่าไหร่?"~~ — เปลี่ยนเป็น "ราคาขึ้นอยู่กับชิ้นงาน (ขนาด วัสดุ ความซับซ้อน) ทักสอบถามร้านพร้อมแจ้งขนาด/แบบ เพื่อรับใบเสนอราคา" ไม่มี placeholder เหลือใน `lib/seo.ts` แล้ว
- [x] ~~🟢 รูปแผนที่ Google Maps~~ — เปลี่ยนมาใช้พิกัดหมุดจริงแล้ว (ทั้ง embed และลิงก์ "เปิดใน Google Maps")

> หมายเหตุ: ตัดเรื่อง "ปีที่ก่อตั้ง/ประสบการณ์กี่ปี" ออกจาก scope แล้วตามที่ร้านแจ้ง — ไม่ต้องใส่ในเว็บ
> เอา stat การ์ด "ปีที่ให้บริการในลพบุรี" (ที่เคยเป็น placeholder `[X]+`) ออกจาก `components/Stats.tsx` แล้ว เหลือ 2 stat

## 2. Sanity CMS

- [x] ~~🔴 สร้างโปรเจกต์ที่ sanity.io~~ — project ID `bwhskiab`, dataset `production`
- [x] ~~🔴 สร้าง `.env.local` แล้วใส่ `NEXT_PUBLIC_SANITY_PROJECT_ID`~~ — ใส่ครบแล้ว (`.env.local`)
- [x] ~~🟡 ทดสอบเข้า `/studio` และลองเพิ่มข่าวสาร 1 รายการ~~ — เข้า `/studio` ได้ปกติ (ตรวจแล้ว ไม่มี error ขึ้นหน้า login) และมีโพสต์ทดสอบ `stest` อยู่จริงใน `/blog`
- [ ] 🟡 ตั้งค่า CORS origin ของโดเมน production ใน Sanity manage console (ไม่งั้นเข้า `/studio` บนเว็บจริงไม่ได้ — ต้องทำหลัง deploy เมื่อรู้โดเมนจริงแล้ว เพราะตอนนี้ localhost ใช้งานได้แล้วแต่โดเมน production ยังไม่มี)

## 3. Deploy & Infrastructure

- [ ] 🔴 `git init` + commit (ตอนนี้ยังไม่ได้เป็น git repo เลย)
- [ ] 🔴 Push ขึ้น GitHub/GitLab
- [ ] 🔴 เชื่อม Vercel + ใส่ Environment Variables (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SITE_URL`)
- [ ] 🔴 ตั้งค่าโดเมนจริง (www.tawikarn.com) ชี้มาที่ Vercel
- [ ] 🟡 ตรวจว่า `NEXT_PUBLIC_SITE_URL` ใน production เป็นโดเมนจริง ไม่ใช่ `.vercel.app`

## 4. SEO

- [x] ~~🔴 **Favicon / app icon**~~ — เพิ่ม `app/icon.png` (256×256) และ `app/apple-icon.png` (180×180) จากโลโก้จริงแล้ว Next.js inject `<link rel="icon">` ให้อัตโนมัติ ตรวจสอบแล้วว่าโหลดได้ปกติ
- [x] ~~🔴 **Open Graph image (og:image)**~~ — สร้าง `public/og-image.jpg` (1200×630 จากโลโก้+แบรนด์กราเดียนต์เดียวกับ Hero) แล้วใส่ใน `metadata.openGraph.images` ของ `app/layout.tsx` ตรวจสอบแล้วว่า `<meta property="og:image">` ขึ้นค่าถูกต้อง
- [x] ~~🟡 Twitter Card metadata~~ — เพิ่ม `twitter: { card: "summary_large_image", ... }` ใน `app/layout.tsx` แล้ว ใช้รูปเดียวกับ og:image
- [x] ~~🟡 Canonical URL ของหน้า `/portfolio`, `/blog`, `/blog/[slug]`~~ — เพิ่ม `alternates.canonical` ครบแล้วทั้ง 3 จุด ตรวจสอบแล้วว่า `<link rel="canonical">` ขึ้นถูก URL
- [x] ~~🟡 ชื่อไฟล์รูปผลงานใน `public/images/portfolio/`~~ — เปลี่ยนจากเลขสุ่ม (เช่น `142412.webp`) เป็นชื่อตามหมวดหมู่ (เช่น `vinyl-01.webp`, `standy-15.webp`) ครบทั้ง 85 ไฟล์แล้ว ตรวจสอบแล้วว่าโหลดได้ปกติทุกไฟล์ (ไม่ได้ตั้งชื่อบรรยายเฉพาะเจาะจงเพราะไม่มีข้อมูลจริงว่าแต่ละรูปคืองานอะไร — ถ้าร้านอยากได้ชื่อไฟล์ที่สื่อความหมายกว่านี้ต้องช่วยระบุว่ารูปไหนคืองานอะไร)
- [x] ~~🟢 Alt text ของรูปผลงาน~~ — ปรับจาก "ป้ายไวนิล #1" เป็น "ผลงานป้ายไวนิล #1 ร้านป้ายลพบุรี ทวิกานต์ 2019" (มีชื่อร้าน+ที่ตั้งช่วย SEO รูปภาพ) ยังเป็น alt ทั่วไปตามหมวดหมู่เหมือนเดิมเพราะไม่มีคำบรรยายเฉพาะแต่ละชิ้นงาน
- [ ] 🔴 ลงทะเบียน Google Search Console + submit `sitemap.xml` หลัง deploy
- [ ] 🟢 ทดสอบ Structured data ด้วย [Rich Results Test](https://search.google.com/test/rich-results) บน URL จริงหลัง deploy

## 5. GEO (Generative Engine Optimization — ให้ AI เห็น/อ้างอิงร้านถูกต้อง)

- [x] ~~🔴 ข้อมูล LocalBusiness schema เป็นข้อมูลจริง~~ — `telephone`, `geo`, `sameAs` ดึงจาก `siteConfig` จริงแล้ว ตรวจสอบแล้วว่า schema แสดงครบ ไม่ถูกข้ามเพราะ placeholder
- [ ] 🟡 ลงทะเบียน **Google Business Profile** ถ้ายังไม่มี — สำคัญมากสำหรับ local SEO/GEO เพราะ AI หลายตัวดึงข้อมูลร้านจากตรงนี้ (ต้องทำผ่านบัญชี Google ของร้านเอง)
- [ ] 🟡 ความสม่ำเสมอของ NAP (ชื่อ-ที่อยู่-เบอร์โทร) ให้ตรงกันทุกที่ — เว็บไซต์ (ตรวจแล้วว่าตรงกันทุกจุดในโค้ด), Google Business Profile, Facebook Page (ต้องไปเช็ค 2 ที่หลังเองว่าตรงกับเว็บ)
- [x] ~~🟢 เพิ่ม `llms.txt`~~ — สร้าง `public/llms.txt` แล้ว สรุปข้อมูลร้าน บริการ และช่องทางติดต่อเป็น plain text ให้ AI crawler อ่านง่าย ตรวจสอบแล้วว่าเข้าถึงได้ที่ `/llms.txt`
- [x] ~~🟡 เติมตัวเลขจริงแทน placeholder ใน FAQ~~ — ตอบครบทั้ง 2 ข้อแล้ว (ดูหัวข้อ 1 ด้านบน)

## 6. Performance

- [ ] 🔴 รัน [PageSpeed Insights](https://pagespeed.web.dev/) บน URL จริงหลัง deploy เพื่อวัด Core Web Vitals (LCP, CLS, INP) — วัดบน localhost ไม่ได้แม่นยำ ต้องรอ deploy ขึ้นโดเมนจริงก่อน
- [x] ~~🟡 ตรวจขนาดไฟล์รูปผลงานทั้ง 85 ไฟล์~~ — ตรวจแล้ว: รวม 6MB/85 รูป เฉลี่ยไฟล์ละ ~70KB ไฟล์ใหญ่สุด 216KB ขนาดพิกเซลอยู่ที่ ~800px กว้าง ซึ่งเหมาะสมแล้วสำหรับที่ `next/image` ใช้ (ไม่ต้องบีบอัดเพิ่ม)
- [x] ~~🟢 ตรวจสอบ lazy-load รูปในหน้า `/portfolio`~~ — ตรวจแล้ว: มีแค่รูปแรกที่ตั้ง `priority` (ช่วย LCP) ที่เหลือ lazy-load อัตโนมัติโดย `next/image` อยู่แล้ว ไม่ต้องทำ pagination เพิ่ม
- [x] ~~🟢 เพิ่มไฟล์ favicon~~ — เพิ่มแล้ว (ดูหัวข้อ SEO ด้านบน) ลด request `/favicon.ico` เปล่าๆ ที่เบราว์เซอร์ยิงหาทุกครั้งไปด้วย
- [ ] 🟢 ตรวจพบไฟล์ `public/images/brand/cnc-machine.webp` (130KB, 2048×1166) ไม่ถูกใช้งานที่ไหนในโค้ดเลย — ไม่กระทบ performance จริง (ไม่มีหน้าไหนโหลดไฟล์นี้) แต่เป็นไฟล์ค้างในโปรเจกต์ ถ้าไม่ได้มีแผนใช้ควรลบทิ้ง
- [ ] 🟢 รันทดสอบหน้าเว็บจริงบนมือถือ/เน็ตช้าอีกครั้งหลัง deploy เพื่อ sanity-check ความเร็วที่ผู้ใช้จริงเจอ (local dev server ไม่สะท้อน network latency จริง)

## 7. อื่นๆ ที่ต้องตัดสินใจ

- [ ] Hero 3D scene (เครื่องพิมพ์ไวนิล/CNC/3D printer) — ตอนนี้ comment ปิดไว้ใน `components/Hero.tsx` อยากเปิดกลับมาไหม และแบบไหน (ปัจจุบันมีโค้ดเวอร์ชัน "มุมจอ" พร้อมใช้งาน)
- [ ] ถ้าเปิด Hero 3D กลับมา ควรวัด Core Web Vitals ก่อน-หลังเทียบกัน (เพิ่ม JS ประมาณ 378KB gzip ตามที่เคยวัดไว้ตอนทดสอบ)
