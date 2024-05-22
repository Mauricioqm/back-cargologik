const cors = require('cors');
const countriesRoutes = require('./countries/countryRoutes');
const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');

// Conectamos DB
DB();

// Creacion del servidor
const app = express();

const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

const server = require('http').createServer(app);

app.use(router);
countriesRoutes(router);

server.listen(propierties.PORT, () => console.log('Servidor corriendo en puerto 3300'));