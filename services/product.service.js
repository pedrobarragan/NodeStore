const { faker } = require('@faker-js/faker');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {
    const tamano = 100;
    for (let index = 0; index < tamano; index++) {

      products.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price(), 10),
        imagen: faker.image.imageUrl(),
      }
      )
    }
  }

  create(){

  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }
}

module.exports = ProductsService;
