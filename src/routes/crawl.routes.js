const express = require('express');
const router = express.Router();
const crawlController = require('../controllers/crawl.controller');

/**
 * @swagger
 * /api/crawl:
 *   post:
 *     summary: Crawl single website
 *     tags: [Crawler]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             url: https://cmlabs.co
 *     responses:
 *       200:
 *         description: Success crawl website
 */
router.post('/crawl', crawlController.crawlSingle);

/**
 * @swagger
 * /api/crawl/batch:
 *   post:
 *     summary: Crawl multiple websites
 *     tags: [Crawler]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             urls:
 *               - https://cmlabs.co
 *               - https://sequence.day
 *               - https://example.com
 *     responses:
 *       200:
 *         description: Success crawl multiple websites
 */
router.post('/crawl/batch', crawlController.crawlMultiple);

module.exports = router;