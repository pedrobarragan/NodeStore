const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['https://myapp.co', 'http://127.0.0.1:5500'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true);
    }
    else{
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors(options));

app.get('/', (req, res)=>{
  res.send('Hola Kevind, soy un server en express');
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, ()=>{
  console.log('Mi port ' + port);
});
