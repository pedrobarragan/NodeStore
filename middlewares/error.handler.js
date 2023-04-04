//Estos son middlewares de tipo error, deben tener los 4 parámetros y se importan en el index.js principal
//y se ejecutan en orden después del routing
//Se deben llamar explicitamente en el catch simplemente colocando next(error)
function logErrors (err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}
function boomErrorHandler(err, req, res, next) {
  if(err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  else{
    next(err);
  }

}


module.exports = { logErrors, errorHandler, boomErrorHandler }
