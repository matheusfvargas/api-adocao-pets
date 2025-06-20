// Importa o framework Express
const express = require('express');
// Cria uma nova instância do roteador do Express para definir as rotas  relacionadas à autenticação
const router = express.Router();
const PublicController = require('../controllers/public.controller');
// Define a rota POST /register que chama o método register do AuthController
router.post('/users', PublicController.register);
// Define a rota POST /login que chama o método login do AuthController
router.post('/login', PublicController.login);

// Exporta o roteador para ser utilizado na aplicação
module.exports = router;
