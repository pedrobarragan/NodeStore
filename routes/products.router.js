const express = require('express');
const ProductsService = require('./../services/product.service')

const router = express.Router();
const service = new ProductsService();

router.get('/', (peticion, respuesta)=>{
  const products = service.find();
  respuesta.json(products);
  });

  router.get('/:id', (peticion, respuesta) =>{
    //const id = peticion.params.id; Así también se puede hacer!
    const { id } = peticion.params;
    const product = service.findOne(id);
    respuesta.json(product);
  })

  router.post('/', (peticion, respuesta) =>{
    const body = peticion.body;
    respuesta.status(201).json(
      {
        message: 'Creado con éxito',
        data: body
      }
    )
  })

  router.patch('/:id', (peticion, respuesta) =>{
    const { id } = peticion.params;
    const body = peticion.body;
    respuesta.json(
      {
        message: 'Actualizado con éxito',
        data: body,
        id,
      }
    )
  })

  router.delete('/:id', (peticion, respuesta) =>{
    const { id } = peticion.params;
    respuesta.json(
      {
        message: 'Borrado exitoso',
        id,
      }
    )
  })

module.exports = router;
