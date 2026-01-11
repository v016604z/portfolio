# Portfolio 專案待辦事項

> 最後更新: 2026/01/11

---

## 🎯 當前狀態

✅ **專案已成功部署上線**  
🌐 https://v016604z.github.io/portfolio/

---

## 📋 待辦清單

### 🔥 高優先級

#### 自動同步 GitHub 專案 🆕
- [ ] 建立 `.github/workflows/sync-projects.yml`
- [ ] 建立 `scripts/sync-projects.js` 同步腳本
- [ ] 在 GitHub repos 添加 `portfolio-featured` topic 標記
- [ ] 規範 repo description 格式：`痛點: XXX | 解決方案: YYY`
- [ ] 測試自動同步流程
- [ ] （選配）實作混合方案：手動精選 + 自動補充

**預期效果：**
- 新專案自動出現在 portfolio
- GitHub 更新 → portfolio 自動更新
- 減少手動維護成本

**技術細節：**
```yaml
觸發條件: 每週日凌晨 + 手動觸發
處理流程: 
  1. 使用 GitHub API 抓取 repos
  2. 過濾 portfolio-featured topic
  3. 轉換為 Project 格式
  4. 更新 src/data/projects.ts
  5. Commit & Push 觸發部署
```

---

### 🎨 設計優化（中優先級）

#### 1. 字體系統完善
- [ ] 在 `tailwind.config.js` 定義完整字級系統
- [ ] 統一調整所有文字大小
- [ ] 確保移動端可讀性

#### 2. 動畫時序優化
- [ ] 延長動畫延遲時間 (0.1s → 0.4s)
- [ ] 為不同區塊添加 stagger 效果
- [ ] 新增 slide-left 等動畫變體

#### 3. 導航欄品牌強化
- [ ] 將「PORTFOLIO」改為個人名字
- [ ] 添加程式碼符號裝飾 `＜李柏達／＞`
- [ ] 或設計簡單 Logo

---

### 🚀 功能擴充（低優先級）

#### 效能優化
- [ ] 實作圖片 lazy loading
- [ ] 轉換圖片為 WebP 格式
- [ ] 檢查並優化 bundle size

#### SEO 強化
- [ ] 提交 Google Search Console
- [ ] 新增 sitemap.xml
- [ ] 實作結構化資料 (JSON-LD)

#### 內容擴充
- [ ] 補充專案真實截圖
- [ ] 新增更多專案（非 featured）
- [ ] 考慮新增部落格區塊

#### 分析追蹤（選配）
- [ ] Google Analytics 4
- [ ] Microsoft Clarity 熱圖分析

---

## 📊 完成記錄

### 2026/01/11 ✅
- [x] 設計改進（Hero 漸變、卡片深度、觸控優化）
- [x] Bug 修復（照片路徑、履歷路徑）
- [x] GitHub Pages 部署
- [x] GitHub Actions 自動化
- [x] Dependabot 安全監控
- [x] SEO Meta Tags

---

## 🎓 學習筆記

### GitHub Actions 用途
- ✅ CI/CD 自動化部署
- ✅ 自動化測試
- ✅ 定時任務 (Cron)
- ✅ 自動發布
- ✅ 資料同步（待實作）

### 資安最佳實踐
- ✅ 啟用 Dependabot alerts
- ✅ 啟用 Dependabot security updates
- ✅ 啟用 Grouped security updates
- ✅ 定期執行 `npm audit`
- ⏸️ Version updates (保持穩定)

---

## 💡 未來想法

- 考慮整合 Notion API 作為 CMS
- 考慮新增多語言支援（中/英）
- 考慮實作深色/淺色模式切換
- 考慮新增專案篩選進階功能
