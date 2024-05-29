
require('dotenv').config({ path: './.env'} ) ;

// Définition du n° de port sur lequel le serveur va écouter
const port = process.env.PORT || 3000

const http = require('http');
const app = require('./app'); // inclusion d'Express

const server = http.createServer(app);

// Démarrage de l'écoute des requêtes sur le port indiqué
server.listen(port,()=>{
    console.log(`Le server écoute sur http://127.0.01:${port}/`);
})