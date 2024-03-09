# 2023 Vue 冬季班專題 - 今天吃什麼？

![Alt text](https://whatstoday2024.github.io/assets/img/about.png)

自助餐是許多人日常生活中常見的用餐選擇，但面對琳瑯滿目的菜色，很多人不知道如何兼顧美味與健康。

我們的專題「今天吃什麼？」目的在開發一個能夠根據使用者個人情況和喜好推薦菜色的系統，幫助使用者更輕鬆地做出合適的餐食選擇，輕鬆打造個人專屬的選菜系統。

#### Demo：[https://whatstoday2024.github.io/](https://whatstoday2024.github.io/)

## 成員介紹：

精靈

- CSS等級到LV3左右
- 正在摸索Bootstrap JS等級大概LV4.5左右
- 過去有用React+Vite做過todolist
- 團隊專題實作 Git 流程

hua

- CSS等級4
- 熟悉 bootstrap， JS 等級4
- 有整合過第三方JS套件 (使用過C3.js)
- 團隊專題實作 Git 流程

jeremyChan

- CSS 等級 3 (比較喜歡手刻scss / tailwindcss)
- JS 等級 5
- 框架等級 4(React) 看了一些教程發現composition api就是react的寫法啊
- 團隊專題實作 Git 流程

Adonis

- 居住宜蘭已婚育有一女，目前在宜蘭工作為 MIS(打雜，本業不用寫程式)，本身專長為後端程式設計。
- 後端程式設計：Laravel
- VPS 環境設置：NGINX、MySQL、PHP、Docker等
- CSS 等級 3：基本運用。
- JS 等級4：整合第三方工具套件、JWT 實作驗證機制。

## 開發工具

◆ 使用 BootStrap 5、SCSS 製作 RWD 版型

◆ 後端使用 JSON-Server 及 JSON-Server-Auth

◆ 前端使用 Vue + Vite

◆ 搭配使用第三方套件如：

- Vite 5.0.11
- Bootstrap 5.3.2
- Vue 3.4.15
- Pinia 2.1.7
- Vue Loading Overlay 6.0
- Vue 3 Toastify 0.2.1
- VeeValidate 4.12.5
- Star Rating Component for Vue 2.x / 3.x 2.1.0
- vue-axios 3.5.2
- element-plus/icons-vue 2.3.1
- FullCalendar 6.1.11
- EmailJS 4.1.0

## 運行環境

Vite 5.0.11 的運行環境如下：

- Node.js >= 14.16.0
- npm >= 6.14.4 或 Yarn >= 1.22.10

安裝

- npm install -g vite

## 系統安裝說明

安裝

- npm install

本機運行

- npm run dev

專案打包

- npm run build

## 資料夾結構

node_modules：存放專案所需的第三方模塊。

package.json：存放專案的元數據，包括專案名稱、版本、依賴項等。

vite.config.js：存放 Vite 的配置。

src：存放專案的源文件。

- assets：存放靜態資源，如圖片、CSS 等。
- components：存放元件檔。
- App.vue：應用程序的根元件。
- index.html：應用程序的入口頁面。
- main.js：應用程序的入口腳本。

dist：專案的生產環境版本

- assets：存放靜態資源，如圖片、CSS 等。
- css：存放編譯後的 CSS 檔案。
- index.html：應用程序的入口頁面。
- js：存放編譯後的 JavaScript 檔案。
- vendor.js：存放第三方模塊的 JavaScript 檔案。

## JSON Server Auth Fake API

程式位置及安裝步驟：

[https://github.com/whatstoday2024/json-server-auth/](https://github.com/whatstoday2024/json-server-auth/)

#### 資料庫結構

- /users 使用者資料(含管理者)
- /dishes 菜色資料
- /selecteds 記錄是哪個使用者選哪一道菜色
- /records 使用者選菜資料
- /freeDays 放縱日資料
