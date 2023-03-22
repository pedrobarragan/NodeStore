const productsRoutes = require('./products.router');
const categoriesRoutes = require('./categories.router');
const usersRoutes = require('./users.router');
const express = require('express');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRoutes);
  router.use('/categories', categoriesRoutes);
  router.use('/users', usersRoutes);
}

module.exports = routerApi;
