# 個人作品集網站 - 專案規劃

## 專案目標
打造一個專業的個人作品集網站，向招聘公司和潛在客戶展示技術能力與專案經驗，引導他們主動聯繫。

## 目標受眾
- 招聘公司 HR 與技術主管
- 潛在客戶與合作夥伴
- 同行開發者

## 核心功能規劃

### 1. 首頁區塊 (Hero Section)
**現況**: 已完成基礎版本
**需求**:
- 個人簡介與定位 (前端工程師)
- CTA 按鈕引導至聯繫區塊
- 使用個人資訊型別統一管理內容

**個人資訊型別定義**:
```tsx
interface PersonalInfo {
  name: string;
  title: string;              // 職稱 (e.g., "前端工程師")
  tagline: string;            // 一句話介紹
  bio: string;                // 完整自我介紹
  email: string;
  location?: string;
  availability: boolean;       // 是否開放新機會
  resumeUrl?: string;         // 履歷下載連結
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    // 其他社群平台
  };
}
```

### 2. 技術棧展示 (Tech Stack)
**現況**: 已完成基礎版本
**優化方向**:
- 可考慮分類顯示 (Frontend / Backend / Tools)
- 或保持現有簡潔風格

### 3. 專案展示區 (Projects Section)

#### 3.1 精選專案 (Featured Projects)
- **數量**: 3 個精選專案
- **展示位置**: 首頁顯著位置
- **卡片資訊**: 
  - 專案標題
  - 痛點預覽 (前 30 字)
  - 技術標籤
  - 專案封面圖
- **點擊行為**: 開啟詳情彈窗

#### 3.2 專案總覽 (All Projects)
- **位置**: 獨立區塊或頁面
- **展示方式**: 網格佈局，顯示所有專案
- **篩選功能**: 可選，依技術棧或類型篩選

#### 3.3 專案資料結構
**更新 Project 介面**:
```tsx
interface Project {
  id: number;
  title: string;
  description: string;         // 簡短描述 (卡片顯示)
  painPoint: string;           // 解決的痛點
  solution: string;            // 解決方案詳述
  impact?: string;             // 成果/影響 (可選)
  tags: string[];              // 技術棧
  featured: boolean;           // 是否為精選專案
  
  // 媒體資源
  coverImage?: string;         // 封面圖
  images?: string[];           // 額外截圖
  video?: string;              // 展示影片 URL
  
  // 連結 (皆為可選)
  githubUrl?: string;          // GitHub 連結
  demoUrl?: string;            // 線上 Demo
  caseStudyUrl?: string;       // 詳細案例研究
}
```

### 4. 關於我 (About Section)
**內容**:
- 個人背景與經歷
- 技術專長與興趣
- 工作理念/價值觀
- 使用 PersonalInfo.bio

**設計**:
- 簡潔文字說明
- 可搭配個人照片或插圖

### 5. 聯絡區塊 (Contact Section)
**方案一: 純資訊展示** (建議先實作)
- Email
- GitHub / LinkedIn 等社群連結
- 地點資訊 (可選)
- CTA: "立即聯繫" 按鈕連結至 Email

**方案二: 聯絡表單** (未來擴充)
- 需要後端或第三方服務 (EmailJS, Formspree)
- MVP 階段暫不實作

### 6. 履歷下載
**實作方式**:
- PDF 檔案放在 `public/resume.pdf`
- 按鈕連結: `<a href="/resume.pdf" download>`
- 位置: Navbar 或 Contact 區塊

### 7. 社群媒體連結
**位置**:
- Footer (推薦)
- Contact 區塊
- Navbar (可選)

**圖示**: 使用 SVG 或 icon library (如 Lucide React)

## 視覺設計方向

### 配色方案
**現有**: 深色極簡 (slate-950 + cyan-500)
**保持並優化**

### 背景特效
**選項 A: 星空效果**
- CSS 動畫製作星點閃爍
- 或使用 Canvas 繪製動態星空
- 參考: tsparticles (輕量化) 或純 CSS

**選項 B: 不規則圖形動畫**
- SVG blob 形狀搭配 CSS animation
- 多個圖形緩慢浮動、變形
- 使用 gradient + blur 製造柔和效果

**實作建議**: 先實作 CSS blob animation (較輕量)，未來可替換星空

### 動畫與互動
- 卡片 hover 效果 (已有基礎)
- 滾動視差 (scroll parallax) - 可選
- 頁面滾動淡入動畫 (intersection observer)

## 技術實作要點

### 型別系統
- 新增 `PersonalInfo` 到 `src/components/types.tsx`
- 更新 `Project` 介面
- 在 `src/data/` 建立資料檔案 (與元件分離)

### 資料管理
建立 `src/data/` 目錄:
```
src/data/
  personalInfo.ts    # 個人資訊
  projects.ts        # 專案列表
  skills.ts          # 技術棧 (可選)
```

### 元件結構
新增元件:
- `About.tsx` - 關於我區塊
- `Contact.tsx` - 聯絡區塊  
- `Footer.tsx` - 頁腳 (社群連結)
- `ProjectCard.tsx` - 專案卡片 (可重用)
- `ProjectModal.tsx` - 專案詳情彈窗
- `BackgroundAnimation.tsx` - 背景特效
- `AllProjects.tsx` - 專案總覽區塊

### 效能優化
- 圖片使用 WebP 格式
- lazy loading 圖片
- 背景動畫使用 `will-change` 或 GPU 加速

## 實作階段規劃

### Phase 1: 資料結構與型別 (優先)
- [ ] 定義 PersonalInfo 型別
- [ ] 更新 Project 型別
- [ ] 建立 src/data/ 目錄與資料檔案
- [ ] 填寫個人真實資料

### Phase 2: 核心區塊完善
- [ ] 更新 Hero 使用 PersonalInfo
- [ ] 實作 About 區塊
- [ ] 實作 Contact 區塊
- [ ] 新增 Footer 與社群連結

### Phase 3: 專案展示優化
- [ ] 重構 ProjectCard 為獨立元件
- [ ] 實作專案詳情彈窗 (支援圖片/影片)
- [ ] 區分精選專案與一般專案
- [ ] 新增 AllProjects 區塊

### Phase 4: 視覺增強
- [ ] 實作背景動畫 (blob 或星空)
- [ ] 加入滾動動畫
- [ ] 優化 hover 與互動效果
- [ ] 響應式設計調整

### Phase 5: 最終優化
- [ ] 效能檢測與優化
- [ ] SEO meta tags
- [ ] 履歷 PDF 準備與整合
- [ ] 測試與修正

## 內容準備清單

- [ ] 個人照片 (可選)
- [ ] 3 個精選專案資料
- [ ] 其他專案資料
- [ ] 專案截圖/封面圖 (建議尺寸: 1200x630)
- [ ] 展示影片 (如有)
- [ ] 履歷 PDF
- [ ] 社群平台連結

## 技術限制與注意事項

1. **保持 MVP 精神**: 先完成核心功能，不過度設計
2. **效能優先**: 背景動畫不可影響頁面流暢度
3. **無後端**: 所有資料靜態化，聯絡採用 Email 連結
4. **部署考量**: 確保 Vite build 後資源正確載入

## 參考資源

- 背景動畫參考: haikei.app (SVG blob 生成器)
- 配色工具: coolors.co, tailwindcss.com/docs/customizing-colors
- Icon: lucide.dev (React icons)
