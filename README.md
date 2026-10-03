# Support Channel Hub — خطوات الإعداد

## 1) Apps Script
1. افتح الشيت ← Extensions ← Apps Script. (أو script.google.com مشروع جديد)
2. الصق محتوى `apps-script/Code.gs` مكان الكود الموجود.
3. Project Settings ← Script properties، أضف:
   - `SHEET_ID` = المعرّف من رابط الشيت (بين /d/ و /edit)
   - `PEPPER` = أي نص عشوائي طويل (لا تغيّره بعدين)
4. شغّل الدالة `authorizeOnce` مرة وحدة ووافق على الصلاحيات.
5. Deploy ← New deployment ← Web app:
   Execute as: Me — Who has access: Anyone
6. انسخ رابط الـ Web App (ينتهي بـ /exec).

## 2) الواجهة
1. افتح `assets/config.js` وضع الرابط في `API_URL`.
2. ارفع المجلد على GitHub وفعّل GitHub Pages.

## ملاحظة
عند أي تعديل على Code.gs: Deploy ← Manage deployments ← Edit ← New version (الرابط يبقى نفسه).
