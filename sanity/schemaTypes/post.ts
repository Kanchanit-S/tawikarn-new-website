import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "ข่าวสาร / บทความ",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "หัวข้อ",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "ลิงก์ (Slug)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "รูปภาพหลัก",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "excerpt",
      title: "คำโปรย (แสดงในหน้ารายการข่าว)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "publishedAt",
      title: "วันที่เผยแพร่",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "body",
      title: "เนื้อหา",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    }),
  ],
  preview: {
    select: { title: "title", media: "mainImage", subtitle: "publishedAt" },
  },
});
