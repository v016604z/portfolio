# 個人作品集網站 - 專案計畫

> **最後更新**: 2026/01/11  
> **狀態**: ✅ 已成功部署上線  
> **網址**: https://v016604z.github.io/portfolio/

---

## 📊 專案完成狀態

### ✅ 已完成 (100%)
- React 19 + TypeScript + Tailwind v4 架構
- 10 個 UI 組件全部實作完成
- 資料層分離設計 (`src/data/` + `src/types/`)
- 3 個精選專案內容
- 完整個人資訊與 16 項技能清單
- 設計改進（Hero 漸變、卡片深度、觸控優化）
- GitHub Pages 部署配置
- GitHub Actions 自動化 CI/CD
- Dependabot 安全性監控
- SEO 優化與 Meta Tags
- Favicon 與視覺素材

---

## 🎯 未來優化計畫

## Phase 3: 持續改進與擴充
**目標**: 提升使用者體驗與專業度

### 3.0 自動化專案管理 🆕
- [ ] **GitHub Actions 自動同步專案**
  - 使用 GitHub API 抓取 repos
  - 透過 topics 標記 (`portfolio-featured`) 篩選專案
  - 自動生成/更新 `src/data/projects.ts`
  - 定時執行（每週）或手動觸發
  - 規範 repo description 格式（痛點 | 解決方案）
  
**實現細節：**
```yaml
# .github/workflows/sync-projects.yml
- 每週日自動執行
- 抓取標記為 portfolio-featured 的 repos
- 轉換為 Project 格式
- Commit & Push 觸發重新部署
```

**前置需求：**
- 在 GitHub repos 添加 `portfolio-featured` topic
- 建立 `scripts/sync-projects.js` 同步腳本
- （可選）使用結構化 description 或 README front matter

### 3.1 效能優化
- [ ] **圖片優化**
  - 實作 lazy loading
  - 使用 WebP 格式
  - 考慮使用 CDN（如 Cloudinary）

- [ ] **程式碼分割**
  - 檢查 bundle size
  - 必要時實作 code splitting

### 3.2 SEO 強化
- [ ] **Google Search Console**
  - 提交 sitemap
  - 驗證 domain ownership

- [ ] **結構化資料**
  - 新增 JSON-LD schema (Person, Organization)

### 3.3 分析與追蹤 (選配)
- [ ] **Google Analytics 4**
  - 追蹤頁面瀏覽
  - 監控使用者行為

- [ ] **Hotjar / Microsoft Clarity**
  - 熱圖分析
  - 使用者錄影

### 3.4 內容擴充
- [ ] **部落格區塊** (選配)
  - 技術文章
  - 專案開發筆記

- [ ] **更多專案**
  - 持續新增作品
  - 補充真實截圖與 demo

### 3.5 進階功能 (選配)
- [ ] **自訂域名**
  - 購買域名（如 `yourname.dev`）
  - 設定 CNAME 指向 GitHub Pages

- [ ] **多語言支援**
  - 新增英文版（面向國際招聘）

- [ ] **深色/淺色模式切換**
  - 雖然目前是深色風格，可考慮提供選項

---

## 📅 時間規劃建議

### Week 1 (現在)
- **Day 1-2**: Phase 1 內容補完
  - 專注於視覺素材與內容優化
  - 不需要完美，先求完整

- **Day 3**: Phase 2 部署上線
  - 設定 GitHub Actions
  - 完成首次部署

### Week 2+
- **持續迭代**: Phase 3 優化改進
  - 收集朋友/同學反饋
  - 逐步補充真實專案截圖
  - 監控網站數據

---

## 🎯 成功指標

### 最低可行產品 (MVP)
- ✅ 網站成功部署到 GitHub Pages
- ✅ 所有組件正常運作
- ✅ 3 個專案完整展示
- ✅ 聯絡方式可用（email + 社群連結）

### 理想狀態
- ✅ 所有專案有視覺素材
- ✅ SEO 優化完成
- ✅ 效能評分 > 90 (Lighthouse)
- ✅ 自訂域名

---

## 🛠️ 技術檢查清單

### 部署前必做
- [ ] `npm run build` 無錯誤
- [ ] `npm run lint` 通過
- [ ] 所有圖片路徑正確（使用 `/` 開頭的絕對路徑）
- [ ] 外部連結都有 `target="_blank"` 和 `rel="noopener noreferrer"`
- [ ] 測試響應式設計（Chrome DevTools）

### 部署後驗證
- [ ] 首頁載入正常
- [ ] 專案 modal 可開啟/關閉
- [ ] 導航列連結跳轉正確
- [ ] Email 連結可正常開啟郵件客戶端
- [ ] 社群連結導向正確頁面
- [ ] 手機版顯示正常

---

## 📝 備註

### 專案目標
打造一個專業的個人作品集網站，向招聘公司和潛在客戶展示技術能力與專案經驗，引導他們主動聯繫。

### 專案目標
打造一個專業的個人作品集網站，向招聘公司和潛在客戶展示技術能力與專案經驗，引導他們主動聯繫。

### 目標受眾
- 招聘公司 HR 與技術主管
- 潛在客戶與合作夥伴
- 同行開發者

### 當前技術棧
- **前端**: React 19 + TypeScript 5.9
- **樣式**: Tailwind CSS v4 (PostCSS)
- **建置**: Vite 7 + SWC
- **部署**: GitHub Pages (目標)
- **CI/CD**: GitHub Actions

---

## 🚀 快速開始

### 立即行動項（今天可做）
1. 檢視專案視覺素材需求
2. 補充個人資訊與技能清單
3. 測試本地 build (`npm run build && npm run preview`)

### 本週目標
- 完成 Phase 1 內容補完
- 完成 Phase 2 部署上線
- 分享給朋友收集反饋

---

## 💡 附錄：快速參考

### 常用指令
```bash
# 開發
npm run dev

# 建置
npm run build

# 預覽建置結果
npm run preview

# 代碼檢查
npm run lint
```

### 重要檔案位置
```
portfolio/
├── src/
│   ├── components/     # 所有 UI 組件
│   ├── data/          # 靜態內容資料
│   ├── types/         # TypeScript 型別定義
│   └── App.tsx        # 主應用程式
├── public/            # 靜態資源（圖片、履歷）
├── .github/
│   └── workflows/     # GitHub Actions（待建立）
└── vite.config.ts     # Vite 配置（需調整 base）
```

### 資源連結
- [GitHub Pages 文件](https://docs.github.com/pages)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [Tailwind CSS v4 文件](https://tailwindcss.com/docs)
- [Unsplash API](https://unsplash.com/developers) (免費圖片)
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
