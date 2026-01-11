# 設計改進計劃 (Design Improvement Plan)

> 針對 Portfolio 網站的美學與用戶體驗優化方案
> 
> 最後更新：2026年1月11日

---

## 📊 設計評估總覽

**當前綜合評分：8.8/10**

### 優勢項目
- ✅ 色彩系統成熟且專業 (9/10)
- ✅ 間距節奏良好 (8.5/10)
- ✅ 互動設計有創意 (9/10)
- ✅ 排版基礎扎實 (8/10)
- ✅ 移動端體驗優化 (9/10)

### 待優化項目
- ⚠️ 字體系統需完善
- ⚠️ 動畫時序可優化
- ⚠️ 導航欄品牌強化

---

## 🎯 改進清單

### 待優化項目

#### 1. 建立完整字級系統
**檔案：** `tailwind.config.js`

**改進方案：**
```js
// tailwind.config.js
theme: {
  extend: {
    fontSize: {
      'sm': ['14px', { lineHeight: '20px' }],
      'base': ['16px', { lineHeight: '24px' }],
      'lg': ['18px', { lineHeight: '28px' }],
    }
  }
}
```

---

#### 2. 優化動畫時序
**檔案：** `src/components/TechStack.tsx`, `src/index.css`

**改進方案：**
```tsx
// 延長延遲時間
style={{ animationDelay: '0.4s' }}

// 添加 stagger 效果
style={{ animationDelay: `${0.4 + index * 0.15}s` }}
```

---

#### 3. 導航欄品牌強化
**檔案：** `src/components/Navbar.tsx`

**改進方案：**
```tsx
<h1 className="text-white font-bold text-xl flex items-center gap-2">
  <span className="text-cyan-500">＜</span>
  {personalInfo.name}
  <span className="text-cyan-500">／＞</span>
</h1>
```

---

### 低優先級（Nice to Have）

- [ ] Dark/Light Mode Toggle
- [ ] 統一 Icon 系統（Lucide React）
- [ ] Design System 文檔

---

## 📐 設計系統規範（參考）

### 色彩系統
- 主色：cyan-500 (#06b6d4)
- 背景：slate-950, slate-900
- 文字：slate-50, slate-400

### 間距系統
- Section 間距：py-20 (80px)
- Container 最大寬度：max-w-6xl (1152px)

### 圓角規範
- 卡片：rounded-3xl (24px)
- 按鈕：rounded-full

### 動畫曲線
- Transition 時間：150ms (hover) / 300ms (標準)

---

**最後更新：** 2026/01/11
