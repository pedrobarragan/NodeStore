//Este es un middleware de tipo normal

const boom = require('@hapi/boom');
//Esta es una función clausure, sus parámetros son un schema y una propiedad y devuelve un middleware de forma dinámica
function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
