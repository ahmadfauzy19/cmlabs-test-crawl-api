// src/services/crawl.service.js
const { chromium } = require('playwright');
const fs = require('fs-extra');
const path = require('path');

async function crawlWebsite(url) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log(`Crawling: ${url}`);

  await page.goto(url, { waitUntil: 'networkidle' });

  // Tunggu render JS 
  await page.waitForTimeout(3000);

  const content = await page.content();

  const safeName = url
    .replace(/https?:\/\//, '')
    .replace(/[^\w]/g, '_');

  const fileName = `${safeName}.html`;
  const filePath = path.join(__dirname, '../../output', fileName);

  await fs.outputFile(filePath, content);

  await browser.close();

  return {
    url,
    fileName,
    filePath
  };
}

module.exports = { crawlWebsite };