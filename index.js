const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('Hola, soy un server en express');
})

app.get('/nueva-ruta', (peticion, respuesta)=>{
  respuesta.json(
    {
      nombre: 'nombre',
      cantidad: 2
    }
  )
})

app.listen(port, ()=>{
  console.log('Mi port' + port);
});
