const productsRoutes = require('./products.router');
const categoriesRoutes = require('./categories.router');
const usersRoutes = require('./users.router');

function routerApi(app) {
  app.use('/products', productsRoutes);
  app.use('/categories', categoriesRoutes);
  app.use('/users', usersRoutes);
}

module.exports = routerApi;
