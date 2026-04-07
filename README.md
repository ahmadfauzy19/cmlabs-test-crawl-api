# Web Crawler API (SPA, SSR, PWA Support)

## 📌 Overview

Project ini merupakan implementasi **Web Crawler API berbasis Node.js** yang mampu melakukan crawling pada berbagai tipe website modern, yaitu:

* **SPA (Single Page Application)**
* **SSR (Server Side Rendering)**
* **PWA (Progressive Web App)**

Crawler akan mengakses website target, melakukan rendering (jika diperlukan), dan menyimpan hasilnya dalam bentuk file **HTML**.

---

## 🎯 Objectives

* Mengambil konten HTML dari berbagai jenis website modern
* Mendukung rendering JavaScript (untuk SPA & PWA)
* Menyediakan API untuk crawling single dan multiple URL
* Menyimpan hasil crawling ke file `.html`

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js** → REST API
* **Playwright** → Browser automation (Chromium)
* **fs-extra** → File handling
* **Morgan** → Logging

---

## 🧠 Supported Website Types

### 1. SPA (Single Page Application)

* Render di client menggunakan JavaScript
* HTML awal kosong
* Contoh:

  * https://portofolio-ashy-xi.vercel.app/

### 2. SSR (Server Side Rendering)

* HTML sudah lengkap dari server
* Tidak perlu rendering tambahan
* Contoh:

  * https://nextjs.org/learn

### 3. PWA (Progressive Web App)

* Website dengan fitur aplikasi (offline, caching)
* Biasanya berbasis SPA
* Contoh:

  * https://x.com/

---

## 🚀 Features

* ✅ Crawl single URL
* ✅ Crawl multiple URLs (batch)
* ✅ Support SPA, SSR, PWA
* ✅ Save hasil ke file HTML
* ✅ Logging request
* ✅ Clean project structure

---

## 📁 Project Structure

```
crawler-api/
│
├── src/
│   ├── controllers/
│   │   └── crawl.controller.js
│   │
│   ├── services/
│   │   └── crawl.service.js
│   │
│   ├── routes/
│   │   └── crawl.routes.js
│   │
│   └── app.js
│
├── output/
│   ├── portofolio_ashy_xi_vercel_app.html
│   ├── nextjs_org_learn.html
│   └── x_com.html
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

```bash
# Clone repository
git clone <your-repo-url>

# Masuk ke folder
cd crawler-api

# Install dependencies
npm install

# Install browser Playwright
npx playwright install
```

---

## ▶️ Running the App

```bash
npm start
```

Server akan berjalan di:

```
http://localhost:3000
```

---

##  API Endpoints

###  1. Crawl Single Website

**POST** `/api/crawl`

#### Request Body:

```json
{
  "url": "https://portofolio-ashy-xi.vercel.app/"
}
```

#### Response:

```json
{
  "success": true,
  "data": {
    "url": "...",
    "fileName": "...",
    "filePath": "..."
  }
}
```

---

###  2. Crawl Multiple Websites (Batch)

**POST** `/api/crawl/batch`

#### Request Body:

```json
{
  "urls": [
    "https://portofolio-ashy-xi.vercel.app/",
    "https://nextjs.org/learn",
    "https://x.com/"
  ]
}
```

---

## Output

Hasil crawling akan disimpan di folder:

```
/output
```

Contoh:

```
output/
├── portofolio_ashy_xi_vercel_app.html
├── nextjs_org_learn.html
└── x_com.html
```

---

## How It Works

1. API menerima request URL
2. Playwright membuka browser (headless)
3. Halaman di-render (termasuk JavaScript)
4. HTML hasil render diambil
5. Disimpan sebagai file `.html`

---
