// src/controllers/crawl.controller.js
const { crawlWebsite } = require('../services/crawl.service');

exports.crawlSingle = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    const result = await crawlWebsite(url);

    res.json({
      success: true,
      data: result
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Crawl multiple 
exports.crawlMultiple = async (req, res) => {
  try {
    const { urls } = req.body;

    if (!urls || !Array.isArray(urls)) {
      return res.status(400).json({ error: 'URLs must be array' });
    }

    const results = [];

    for (const url of urls) {
      const result = await crawlWebsite(url);
      results.push(result);
    }

    res.json({
      success: true,
      total: results.length,
      data: results
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};