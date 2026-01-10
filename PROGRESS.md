# 專案進度記錄

**最後更新**: 2026/01/10

---

## ✅ Phase 1 完成項目

### 1. 內容補完
- [x] 專案封面圖片（使用 Unsplash 佔位圖）
  - HIV 衛教系統: 醫療相關圖片
  - VTuber 系統: 虛擬主播圖片
  - E-Scooter: 電動滑板車圖片
- [x] 個人資訊優化
  - tagline 更新為「專注於解決實際問題的全端與 AI 工程師」
  - bio 擴充內容
- [x] 技能清單擴充（9 → 16 項）
  - 新增: OpenAI API, FAISS, Discord.js, LINE Bot, WebSocket, Spring Boot, Cloudflare
- [x] Favicon 建立（青色漸層「李」字 SVG）
- [x] Meta Tags 完整（SEO + Open Graph + Twitter Cards）

### 2. 程式碼優化
- [x] 清理 App.css 預設樣式
- [x] 更新 Skill 類型支援 "AI & Tools" 分類

---

## ✅ Phase 2 完成項目

### 部署配置
- [x] Vite base path 設定: `/portfolio/`
- [x] GitHub Actions workflow 建立 (`.github/workflows/deploy.yml`)
- [x] TypeScript 類型修正
- [x] 本地建置測試成功 ✓
- [x] 404.html SPA 路由處理

---

## ⚠️ 待解決問題

### 🔴 個人照片無法顯示 (CRITICAL)

**問題描述**:
- 檔案已重新命名: `public/半身照.jpg` → `public/profile.jpg`
- 檔案確認存在: `dist/profile.jpg` ✓
- 程式碼已更新: `src/components/About.tsx` 使用 `/profile.jpg`
- 建置成功無錯誤
- **但瀏覽器仍然 404**

**已嘗試方案**:
1. ✓ 重新命名檔案為英文（避免中文編碼問題）
2. ✓ 刪除 dist 資料夾重新建置
3. ✓ 停止所有 Node 進程重啟
4. ✗ 清除瀏覽器緩存（使用者未測試）

**下次處理建議**:
1. **檢查 Vite public 處理機制**
   - 可能需要使用 `import` 方式而非 public 資料夾
   - 或使用完整路徑 `/portfolio/profile.jpg`

2. **替代方案**:
   ```tsx
   // 方案 A: 使用 import
   import profileImg from '/profile.jpg'
   <img src={profileImg} />
   
   // 方案 B: 明確指定完整路徑
   <img src="/portfolio/profile.jpg" />
   
   // 方案 C: 使用 import.meta.env.BASE_URL
   <img src={`${import.meta.env.BASE_URL}profile.jpg`} />
   ```

3. **徹底測試**:
   - 在開發模式測試 (`npm run dev`)
   - 在預覽模式測試 (`npm run preview`)
   - 確認兩種環境路徑一致性

**相關檔案**:
- `src/components/About.tsx` (第 27 行)
- `public/profile.jpg`
- `vite.config.ts` (base: '/portfolio/')

---

## 📋 待辦事項

### 立即處理 (下次優先)
- [ ] 修復個人照片顯示問題
- [ ] 測試完整建置流程
- [ ] 準備推送到 GitHub

### Phase 3 (優化改進)
- [ ] 新增 og-image.jpg（社群分享預覽圖）
- [ ] 圖片 lazy loading
- [ ] 補充真實專案截圖
- [ ] SEO 優化測試
- [ ] Google Analytics（選配）

---

## 📝 開發筆記

### 已知限制
- 圖片路徑在 Vite build 模式下可能需要特殊處理
- 中文檔名會導致 URL 編碼問題（已解決）
- 瀏覽器緩存可能影響測試結果

### 環境資訊
- Node.js: v20
- Vite: 7.3.1
- React: 19.2.0
- Tailwind CSS: v4.1.18

---

## 🎯 下次開工清單

1. **修復圖片問題**（30 分鐘）
2. **完整測試預覽**（15 分鐘）
3. **推送到 GitHub**（10 分鐘）
4. **啟用 GitHub Pages**（5 分鐘）
5. **驗證線上版本**（10 分鐘）

**預估總時間**: 70 分鐘

---

## 💡 備註

- 所有內容資料已完成，只差圖片顯示問題
- GitHub Actions workflow 已就緒
- 一旦解決圖片問題即可立即部署上線
