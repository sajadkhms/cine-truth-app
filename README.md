# سینماحقیقت — ساخت APK

## روش ۱: بدون نصب هیچ چیز (GitHub Actions)
1. یک ریپوی جدید در GitHub بسازید و محتوای این پوشه را push کنید.
2. به تب Actions بروید، workflow با نام "Build APK" خودکار اجرا می‌شود.
3. بعد از پایان (حدود ۵ تا ۸ دقیقه)، از بخش Artifacts فایل `cinemahaghighat-apk` را دانلود کنید؛ داخلش `app-debug.apk` است.

## روش ۲: روی کامپیوتر خودتان
نیازمندی: Node 20، JDK 17 و Android Studio (SDK).
```
npm install
npm run build
npx cap add android
npx cap sync android
cd android && gradlew assembleDebug
```
خروجی: `android/app/build/outputs/apk/debug/app-debug.apk`
