# تکنیک‌های بهینه‌سازی توکن برای پروژه Next.js

## 1. تقسیم‌بندی هوشمند پرامپت‌ها

### ❌ اشتباه (توکن زیاد):
```
"کل وبسایت Next.js را با تمام صفحات Home, About, Contact, Products, Articles, Courses, Services و تمام کامپوننت‌های ProductCard, ArticleCard, CourseCard, ServiceCard و سیستم Cart و Auth و Profile بساز"
```

### ✅ درست (توکن کم):
```
"ProductCard component با props: id, title, price, image, onAddToCart"
```

## 2. استفاده از Template Pattern

### Template برای Cards:
```
"[CardName] component:
- src/components/cards/[CardName].jsx
- Props: [specific props]
- [CardName].module.scss
- hover effects"
```

### Template برای Pages:
```
"[PageName] page:
- src/modules/[pagename]/[PageName].jsx
- [specific features]
- Responsive SCSS"
```

## 3. Context Switching Strategy

### مرحله اول (Setup):
```
مدل: GPT-3.5
پرامپت: "Next.js project setup"
توکن: ~50
```

### مرحله دوم (Components):
```
مدل: GPT-3.5
پرامپت: "Modal component"
توکن: ~100
```

### مرحله سوم (Complex Logic):
```
مدل: GPT-4
پرامپت: "Cart system with Zustand"
توکن: ~300
```

## 4. Progressive Enhancement

### Level 1 - Basic:
```
"Button component with onClick prop"
```

### Level 2 - Enhanced:
```
"Button component + loading state + variants"
```

### Level 3 - Advanced:
```
"Button component + accessibility + keyboard nav"
```

## 5. Code Reuse Patterns

### Base Component:
```
"BaseCard component با props: title, image, children"
```

### Extended Components:
```
"ProductCard extends BaseCard با price, addToCart"
"ArticleCard extends BaseCard با date, excerpt"
```

## 6. Incremental Development

### روز اول:
- Project setup (GPT-3.5) - 50 tokens
- Basic components (GPT-3.5) - 200 tokens
- Layout structure (GPT-3.5) - 150 tokens
**Total: 400 tokens**

### روز دوم:
- Home page (GPT-4) - 300 tokens
- Product cards (GPT-3.5) - 150 tokens
- Navigation (GPT-3.5) - 100 tokens
**Total: 550 tokens**

### روز سوم:
- Products listing (GPT-4) - 250 tokens
- Search functionality (GPT-4) - 200 tokens
- Cart logic (GPT-4) - 300 tokens
**Total: 750 tokens**

## 7. Context Preservation

### فایل context.md:
```
Current project state:
- ✅ Project setup done
- ✅ Modal, Button components ready
- 🔄 Working on ProductCard
- ❌ Cart system pending

Tech stack: Next.js 14, SCSS modules, Zustand
File structure: src/components/, src/modules/
```

## 8. Batch Operations

### یک پرامپت برای چند فایل مرتبط:
```
"ProductCard, ArticleCard, CourseCard components:
- Same pattern
- Different props
- Same styling approach"
```

## 9. Error Recovery

### اگر پرامپت پیچیده بود:
```
"خطا: توکن زیاد"
↓
"فقط ProductCard.jsx بنویس"
↓
"حالا ProductCard.module.scss بنویس"
```

## 10. Daily Token Budget

### روزانه 2000 توکن:
- صبح: 800 توکن (setup + basic components)
- ظهر: 700 توکن (main features)
- عصر: 500 توکن (testing + fixes)

## 11. Smart Model Selection

### GPT-3.5 (ارزان):
- HTML/CSS ساده
- Basic components
- Static pages

### GPT-4 (متوسط):
- Business logic
- Complex components
- API integration

### Claude (گران):
- Code review
- Bug fixing
- Architecture decisions

## 12. Prompt Compression

### قبل:
```
"لطفاً یک کامپوننت ProductCard برای نمایش محصولات ایجاد کنید که شامل عکس، عنوان، قیمت و دکمه اضافه به سبد خرید باشد و همچنین استایل‌های CSS مناسب داشته باشد"
```

### بعد:
```
"ProductCard: image, title, price, addToCart button + CSS"
```

## نتیجه:
با این تکنیک‌ها می‌توانید مصرف توکن را 60-70% کاهش دهید!