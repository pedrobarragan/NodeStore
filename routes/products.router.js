const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();


router.get('/', (peticion, respuesta)=>{
  const products = [];
  const { size } = peticion.query;
  const tamano = size || 10;
  for (let index = 0; index < tamano; index++) {

    products.push({
      nombre: faker.commerce.productName(),
      precio: parseInt(faker.commerce.price(), 10),
      imagen: faker.image.imageUrl(),
    }
    )
  }
  respuesta.json(products);
  });

  router.get('/:id', (peticion, respuesta) =>{
    //const id = peticion.params.id; Así también se puede hacer!
    const { id } = peticion.params;
    respuesta.json(
      {
        id,
        nombre: 'Producto',
        cantidad: 2
      }
    )
  })

module.exports = router;
