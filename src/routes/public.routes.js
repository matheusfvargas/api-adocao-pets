// Importa o framework Express
const express = require('express');
// Cria uma nova instância do roteador do Express para definir as rotas  relacionadas à autenticação
const router = express.Router();
const PublicPetsController = require('../controllers/public.petsController');
const PublicUsersController = require('../controllers/public.usersController')
// Define a rota POST /users que chama o método register do AuthController
router.post('/users', PublicUsersController.register);
// Define a rota POST /login que chama o método login do AuthController
router.post('/login', PublicUsersController.login);
//Define a rota GET /pets/available para listar os pets com status 'available'
router.post('pets/available', PublicPetsController.getAvailablePets);
// Exporta o roteador para ser utilizado na aplicação
module.exports = router;
