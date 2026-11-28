---
lang: "th"
type: "concept"
slug: "break"
title: "คีย์เวิร์ด `break`"
status: "published"
source_repo: "i18n"
source_path: "locales/th/curriculum/concepts/break/page.md"
en_md5: "bd746b6c93016dcb2789bd26e38ab33a"
governance_sha: "a5ccff6a"
content_version: "887a8c484ee5"
published_at: "2026-11-28"
---

คีย์เวิร์ด `break` ใช้ได้ทุกที่ในลูป

ส่วนที่อยู่ระหว่างวงเล็บปีกกา นั่นแหละคือโค้ดในลูป และเมื่อ Jiki เจอคำสั่งนี้ Jiki จะออกจากลูปทันที แล้วไปทำโค้ดที่อยู่ข้างล่างลูปต่อ

สมมติว่าเรามีเงื่อนไขว่าต้องรันลูปนี้ 50 รอบ แต่เราอยากหยุดถ้าผู้เล่นยิงครบ 5 ครั้ง เราก็เขียน for loop ไว้ด้านบนเพื่อนับขึ้นไปจนถึง 50

แต่เราก็มีเงื่อนไขอยู่กลางลูปเพื่อเช็กว่าผู้เล่นยิงครบ 5 ครั้งหรือยัง ถ้าครบแล้ว เราก็ _break_ (หยุด) ลูปเลย

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // ออกจากลูป
  }
}
```
