"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

// หน้าสำหรับทีมงานเข้ามาเพิ่ม/แก้ไขข่าวสารเอง ที่ yourdomain.com/studio
// ไม่ต้องติดตั้งโปรแกรมเพิ่ม ใช้เบราว์เซอร์ล็อกอินแล้วพิมพ์ได้เลย
export default function StudioPage() {
  return <NextStudio config={config} />;
}
