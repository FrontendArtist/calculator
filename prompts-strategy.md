# استراتژی پرامپت‌های بهینه برای پروژه Next.js

## مرحله 1: راه‌اندازی (GPT-3.5)
```
Next.js 14 app router پروژه ایجاد کن:
- package.json: next, react, sass
- src/app/layout.js: basic layout
- src/styles/globals.scss: reset + variables
- فولدرهای خالی: components, modules, lib
```

## مرحله 2: UI Components (GPT-3.5)
```
Modal component ایجاد کن:
- src/components/ui/Modal.jsx
- Props: isOpen, onClose, children
- ESC close, overlay close
- Modal.module.scss با fade animation
```

## مرحله 3: Cards (GPT-3.5)
```
ProductCard component:
- src/components/cards/ProductCard.jsx
- Props: id, title, price, image, onAddToCart
- ProductCard.module.scss responsive
- hover effects
```

## مرحله 4: Layout Components (GPT-4)
```
BaseSlider با Swiper.js:
- src/components/layout/BaseSlider.jsx
- Props: items, slidesPerView, renderItem, responsive
- منطق: slides < slidesPerView → center, no swipe
- Responsive breakpoints
- BaseSlider.module.scss
```

## مرحله 5: Home Page (GPT-4)
```
Home page modules:
- src/modules/home/Hero.jsx: full height hero
- src/modules/home/CoursesSection.jsx: BaseSlider 2 per view
- src/modules/home/ProductsSection.jsx: BaseSlider 4 per view
- هر کدام با .module.scss
```

## مرحله 6: Product Pages (GPT-4)
```
Products listing:
- src/modules/products/ProductsListing.jsx
- Grid layout با ProductCard
- Load More functionality
- Sort options
- Responsive SCSS
```

## مرحله 7: Single Pages (GPT-4)
```
Single Product page:
- src/app/products/[slug]/page.js
- Two column layout
- Image gallery
- Add to cart integration
- Related products
```

## مرحله 8: Cart & Checkout (Claude)
```
Cart system:
- src/store/cartStore.js: Zustand store
- src/modules/checkout/: stepper flow
- Cart, Login, PersonalInfo, Review steps
- OTP integration
```

## مرحله 9: Auth System (Claude)
```
Authentication:
- src/lib/authApi.js
- OTP send/verify
- Google OAuth fallback
- Session management
```

## مرحله 10: Profile (GPT-4)
```
Profile pages:
- src/modules/profile/: sidebar layout
- Orders, Wishlist, Courses tabs
- Account info editing
- Responsive sidebar
```

## مرحله 11: Search (GPT-4)
```
Search functionality:
- src/components/ui/SearchBox.jsx
- src/modules/search/SearchResults.jsx
- Products + Articles results
- Autocomplete
```

## مرحله 12: API Integration (Claude)
```
API routes:
- src/app/api/products/
- src/app/api/articles/
- src/lib/apiClient.js
- Error handling
```

## مرحله 13: SEO & Performance (Claude)
```
Optimization:
- Dynamic meta tags
- next/image optimization
- ISR setup
- Code splitting
```

## مرحله 14: Testing (Claude)
```
Testing setup:
- Jest + Testing Library
- Component tests
- E2E with Playwright
- Accessibility tests
```

## نکات مهم:

### برای GPT-3.5:
- پرامپت‌های کوتاه (< 100 کلمه)
- یک کامپوننت در هر پرامپت
- مثال‌های ساده

### برای GPT-4:
- پرامپت‌های متوسط (100-300 کلمه)
- منطق پیچیده‌تر
- چند فایل مرتبط

### برای Claude:
- پرامپت‌های طولانی (300+ کلمه)
- بررسی کل سیستم
- بهینه‌سازی و رفع باگ

## مدیریت توکن:
1. هر روز 3-4 مرحله
2. ابتدا GPT-3.5 برای ساختار
3. GPT-4 برای منطق
4. Claude برای بررسی نهایی