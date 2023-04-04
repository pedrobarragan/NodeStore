const express = require('express');

const ProductsService = require('./../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');

const router = express.Router();
const service = new ProductsService();

//respuesta para get de /products
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

//respuesta para products/filter
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

//Respuesta para products/id
router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

//post de /products
router.post('/',
  validatorHandler(createProductSchema, 'body'), // el primer argumento es el esquema, el segundo es la propiedad, puede ser el body, un parámetro, etc
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

//Patch de /products/id -> Se valida que el id esté bien escrito y que el body tenga los datos de manera correcta
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
