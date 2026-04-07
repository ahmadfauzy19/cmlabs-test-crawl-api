// src/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Crawler API',
      version: '1.0.0',
      description: 'API untuk crawling website (SPA, SSR, PWA) dan menyimpan HTML'
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // baca dokumentasi dari routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;