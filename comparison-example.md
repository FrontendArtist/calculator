# مقایسه عملی: پرامپت کلی vs مرحله‌ای

## ❌ پرامپت کلی (مشکل‌ساز):

### پرامپت:
```
"یک سایت فروشگاهی کامل با Next.js بساز که شامل صفحه اصلی، محصولات، سبد خرید، احراز هویت، پروفایل کاربر، جستجو، پرداخت و مدیریت سفارشات باشد"
```

### نتیجه (معمولی):
```javascript
// کد تولید شده معمولاً اینطوری است:

// 1. ساختار ناقص
function HomePage() {
  return <div>Home Page - TODO</div>; // ناتمام!
}

// 2. کامپوننت‌های ساده
function ProductCard({ title, price }) {
  return <div>{title} - ${price}</div>; // خیلی ساده!
}

// 3. منطق ناقص
function Cart() {
  const [items, setItems] = useState([]);
  // کد ناقص برای cart
  return <div>Cart TODO</div>;
}

// 4. استایل‌های پایه
.card {
  border: 1px solid #ccc; /* خیلی ساده! */
}
```

### مشکلات:
- 70% کد ناتمام
- منطق cart کار نمی‌کند
- استایل‌های زشت
- بدون responsive
- بدون error handling

---

## ✅ پرامپت مرحله‌ای (بهینه):

### مرحله 1 - Setup:
```
"Next.js 14 project setup با SCSS modules"
```

### نتیجه:
```json
{
  "name": "ecommerce-site",
  "dependencies": {
    "next": "14.0.0",
    "react": "18.0.0",
    "sass": "^1.69.0"
  }
}
```

### مرحله 2 - ProductCard:
```
"ProductCard component با props: id, title, price, image, onAddToCart, quantity. شامل hover effects و responsive design"
```

### نتیجه:
```javascript
import styles from './ProductCard.module.scss';

function ProductCard({ 
  id, 
  title, 
  price, 
  image, 
  onAddToCart, 
  quantity = 0,
  isLoading = false 
}) {
  const handleAddToCart = () => {
    if (!isLoading) {
      onAddToCart({ id, title, price, image });
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={title}
          className={styles.image}
        />
        {quantity > 0 && (
          <span className={styles.badge}>{quantity}</span>
        )}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.price}>${price}</div>
        
        <button 
          onClick={handleAddToCart}
          disabled={isLoading}
          className={styles.addButton}
        >
          {isLoading ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
```

### SCSS مرحله‌ای:
```scss
.card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: white;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    border-radius: 8px;
  }
}

.imageContainer {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  .card:hover & {
    transform: scale(1.05);
  }
}

.badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #ff4444;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.content {
  padding: 16px;
}

.title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
  line-height: 1.4;
}

.price {
  font-size: 18px;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 12px;
}

.addButton {
  width: 100%;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background: #1d4ed8;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
}
```

## 📊 مقایسه نتایج:

| جنبه | پرامپت کلی | پرامپت مرحله‌ای |
|------|------------|------------------|
| **کیفیت کد** | 3/10 | 9/10 |
| **تکمیل پروژه** | 30% | 100% |
| **قابلیت تغییر** | سخت | آسان |
| **یادگیری** | کم | زیاد |
| **توکن مصرفی** | 15,000+ | 3,000 |
| **زمان توسعه** | 2 هفته | 1 هفته |
| **تعداد باگ** | زیاد | کم |

## نتیجه‌گیری:

پرامپت مرحله‌ای = **کیفیت بالا + کنترل بیشتر + توکن کمتر** ✅