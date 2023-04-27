//Importo las librerías
const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

//Esto es para los CORS
const whitelist = ['https://myapp.co', 'http://127.0.0.1:5500'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true); // el argumento es el error, el segundo set origin to true to reflect the request origin, as defined by req.header('Origin'), or set it to false to disable CORS
    }
    else{
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors(options));

app.get('/', (req, res)=>{
  res.send('Hola, soy un server en express');
})

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

//Puerto donde se despliega nuestro software
app.listen(port, ()=>{
  console.log('Mi port ' + port);
});
