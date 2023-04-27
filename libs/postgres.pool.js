// La carpeta libs se encarga de la conexión a terceros
const { Pool } = require('pg');

// Importo las variables de entorno, que es donde tengo mis datos sensibles, para eso también creo el archivo .env
// que contiene las variables pero de manera local, en github ignoro esta parte

const { config } = require('./../config/config');

// Construyo mi URL de conexión

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


const pool = new Pool({ connectionString: URI });
// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'peter',
//   password: 'admin123',
//   database: 'my_store'
// });

module.exports = pool;
