# 個人作品集網站 - 專案計畫

> **最後更新**: 2026/01/11  
> **狀態**: ✅ 已成功部署上線  
> **網址**: https://v016604z.github.io/portfolio/

---

## 🎯 未來優化計畫

### 效能優化
- [ ] 圖片優化（lazy loading + WebP）
- [ ] 程式碼分割（檢查 bundle size）

### SEO 強化
- [ ] 提交 Google Search Console + sitemap
- [ ] 新增結構化資料 (JSON-LD)

### 內容擴充
- [ ] 補充專案真實截圖
- [ ] 新增更多專案
- [ ] 考慮新增部落格區塊（選配）

### 進階功能（選配）
- [ ] 自訂域名
- [ ] 多語言支援（中/英）
- [ ] 深色/淺色模式切換
- [ ] Google Analytics / Microsoft Clarity

---

## 🛠️ 技術檢查清單

### 部署驗證
- [x] 首頁載入正常
- [x] 專案 modal 可開啟/關閉
- [x] 導航列連結跳轉正確
- [x] Email 連結可正常開啟
- [x] 社群連結導向正確
- [x] 手機版顯示正常

---

## � 快速參考

### 常用指令
```bash
npm run dev      # 開發伺服器
npm run build    # 建置
npm run preview  # 預覽建置結果
npm run lint     # 程式碼檢查
```

### 專案結構
```
src/
├── components/     # UI 組件
├── data/          # 靜態內容
├── types/         # TypeScript 型別
└── hooks/         # 自訂 hooks
```
