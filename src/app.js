// Importa o módulo Express, para a criação de servidores web com Node.js
const express = require('express');
// Importa as rotas protegidas, que só podem ser acessadas com um token JWT
const routes = require('./routes/routes');
// Cria uma instância da aplicação Express
const app = express();
// Habilita o servidor para receber e interpretar requisições com corpo em JSON
app.use(express.json());
app.use('/', routes);
// Exporta o app para que ele possa ser utilizado por outros arquivos
module.exports = app;
