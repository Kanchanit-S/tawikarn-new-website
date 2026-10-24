# เว็บไซต์ บริษัท ทวิกานต์2019 จำกัด (tawikarn.com)

เว็บไซต์ร้านป้ายลพบุรี สร้างด้วย Next.js (App Router) + TypeScript + Tailwind CSS
พร้อมระบบจัดการข่าวสารหลังบ้านด้วย Sanity CMS (เข้าใช้งานที่ `/studio`)

Stack: Next.js 16 · React 19 · Tailwind CSS 3 · Sanity 6 (next-sanity 13)

---

## 1. วิธีรันตอน Dev

ต้องมี Node.js **เวอร์ชัน 20.19+ หรือ 22.12+** ขึ้นไป (ตรวจสอบด้วย `node --version`)

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000)

คำสั่งอื่นที่มีให้ใช้:

```bash
npm run build   # build โปรดักชัน (ควร build ผ่านโดยไม่มี error ก่อน deploy ทุกครั้ง)
npm run start   # รันโปรดักชันหลัง build แล้ว
npm run lint    # ตรวจโค้ดด้วย ESLint
```

> **หมายเหตุ:** โปรเจกต์นี้โฮสต์ฟอนต์ Kanit และ Noto Sans Thai เป็นไฟล์ในเครื่อง
> (`app/fonts/`) แทนการดึงจาก Google Fonts สด ๆ ตอน build/dev เพื่อเลี่ยงบั๊กที่รู้กันของ
> Turbopack (bundler ของ Next.js) ที่บางครั้ง resolve ฟอนต์ multi-weight ไม่ได้
> ไม่ต้องตั้งค่าอะไรเพิ่มเติม ไฟล์ฟอนต์ (ลิขสิทธิ์ SIL Open Font License) อยู่ในโปรเจกต์แล้ว

---

## 2. วิธีตั้งค่า Sanity CMS (ระบบจัดการข่าวสาร)

ถ้ายังไม่ได้ตั้งค่า หน้า `/blog` จะแสดงข้อความ "ยังไม่มีบทความ" และหน้า `/studio`
จะขึ้น error `Configuration must contain projectId` — เป็นเรื่องปกติ ทำตามขั้นตอนด้านล่างเพื่อเปิดใช้งาน

1. สมัคร/ล็อกอินที่ [sanity.io](https://www.sanity.io/) แล้วสร้างโปรเจกต์ใหม่
   (เลือก "Create new project" และตั้งชื่ออะไรก็ได้ เช่น "tawikarn-2019")
2. เมื่อสร้างโปรเจกต์เสร็จ จะได้ **Project ID** (ดูได้ที่
   [sanity.io/manage](https://www.sanity.io/manage) ในหน้า โปรเจกต์ > Settings)
3. คัดลอกไฟล์ `.env.local.example` เป็น `.env.local`:

   ```bash
   cp .env.local.example .env.local
   ```

4. เปิด `.env.local` แล้วใส่ Project ID ที่ได้:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

5. รัน `npm run dev` ใหม่ แล้วเข้า [http://localhost:3000/studio](http://localhost:3000/studio)
   — ครั้งแรกจะเจอหน้า "Connect this Studio to your project" เพราะ `localhost:3000` ยังไม่ได้
   อยู่ในรายการ CORS origins ของโปรเจกต์ (ดูวิธีแก้ในหัวข้อ CORS ด้านล่าง) เพิ่มแล้ว
   รีเฟรชหน้าอีกครั้ง จะล็อกอินด้วยบัญชี Sanity เดียวกับตอนสร้างโปรเจกต์ แล้วเริ่มเพิ่มข่าวสารได้เลย
   ไม่ต้องติดตั้งโปรแกรมเพิ่มเติม ใช้งานผ่านเบราว์เซอร์ได้ทันที
6. หน้า `/blog` และ `/blog/[slug]` จะดึงข่าวสารจาก Sanity อัตโนมัติ (รีเฟรชข้อมูลทุก 60 วินาที
   ผ่าน ISR — แก้ข่าวใน `/studio` แล้วรอไม่เกิน 1 นาทีข้อมูลหน้าเว็บจะอัปเดตเอง)

### CORS (ต้องเพิ่มทั้งตอน dev และตอน deploy จริง)

หน้า `/studio` ต้องมี origin ของตัวเองอยู่ในรายการ CORS origins ของโปรเจกต์ก่อนถึงจะใช้งานได้
ไปที่ [sanity.io/manage](https://www.sanity.io/manage) > โปรเจกต์ > API > CORS origins แล้วเพิ่ม:

- `http://localhost:3000` — สำหรับรันตอน dev บนเครื่อง (ไม่ต้องติ๊ก "Allow credentials" ก็ได้
  เพราะเป็น origin ชั่วคราว หรือจะกดปุ่ม "Add CORS origin" ที่ขึ้นในหน้า `/studio` เองก็ได้ เร็วกว่า)
- โดเมนจริงของเว็บตอน deploy (เช่น `https://www.tawikarn.com`) — ต้องติ๊ก **"Allow credentials"** ด้วย
  ไม่งั้นเข้า `/studio` บนเว็บจริงไม่ได้

---

## 3. วิธี Deploy ขึ้น Vercel

1. Push โค้ดขึ้น GitHub/GitLab/Bitbucket
2. ไปที่ [vercel.com](https://vercel.com/) > Add New Project > เลือก repo นี้
3. ใส่ Environment Variables ให้ตรงกับ `.env.local` ที่ใช้งานจริง:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SITE_URL` (ใส่โดเมนจริง เช่น `https://www.tawikarn.com` — ใช้สร้างลิงก์ใน
     sitemap.xml และ JSON-LD)
   - `SANITY_API_TOKEN` (ใส่เฉพาะถ้าต้องใช้เขียนข้อมูลจาก server-side ภายหลัง ตอนนี้ยังไม่จำเป็น)
4. กด Deploy — Vercel จะรัน `npm run build` ให้อัตโนมัติ
5. หลัง deploy เสร็จ อย่าลืมเพิ่มโดเมน production ใน Sanity CORS origins ตามหัวข้อด้านบน

---

## 4. รายการ Placeholder ที่ต้องแก้เป็นข้อมูลจริงก่อนเปิดใช้งาน

ค่าที่อยู่ใน `[วงเล็บ]` คือข้อมูลที่ยังไม่มี/ยังไม่ยืนยัน **ห้ามแต่งขึ้นเอง** ต้องแก้ให้เป็นข้อมูลจริงของร้าน

### `lib/site-config.ts`

ข้อมูลธุรกิจหลัก (เบอร์โทร, LINE, ที่อยู่, เวลาทำการ, Facebook, อีเมล, พิกัด GPS) ดึงมาจากเว็บเดิม
([tawikarnScoda](../tawikarnScoda)) และใส่เป็นค่าจริงใน `lib/site-config.ts` เรียบร้อยแล้ว
ไม่มี placeholder `[วงเล็บ]` เหลือในไฟล์นี้อีก — ยกเว้นจุดที่ยังขาดข้อมูลจริงด้านล่าง

> หมายเหตุ: ไม่มีฟิลด์ "ปีที่ก่อตั้ง/ประสบการณ์กี่ปี" ในเว็บนี้ ตามคำสั่งร้าน — ตัดออกจาก scope แล้ว

### placeholder

ไม่มี placeholder `[วงเล็บ]` เหลือในโปรเจกต์แล้ว — `lib/seo.ts` (`faqItems`) ได้รับคำตอบจริงจากร้านครบทั้ง 2 ข้อ

---

## โครงสร้างโปรเจกต์โดยย่อ

```
app/                      หน้าเว็บทั้งหมด (App Router)
  services/[slug]/        หน้าบริการย่อย (SEO long-tail)
  blog/[slug]/            หน้าข่าวสาร ดึงจาก Sanity (ISR 60s)
  studio/[[...tool]]/     Sanity Studio แบบ embedded ที่ /studio
  sitemap.ts, robots.ts   SEO
components/                React components ของแต่ละ section
lib/                       ข้อมูลธุรกิจ, บริการ, ผลงาน, SEO/JSON-LD
sanity/                    schema และ client ของ Sanity
public/images/portfolio/   รูปผลงานจริง (85 รูป แบ่งตามหมวด)
public/images/brand/       โลโก้
```
