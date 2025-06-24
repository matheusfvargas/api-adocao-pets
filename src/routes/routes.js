// Importa o framework Express
const express = require('express');
//Importa o middleware que valida tokens JWT em rotas protegidas
const { authenticateToken, authorizeRole, authorizeIDAdmin } = require('../middlewares/auth.middleware');

//Importa os controllers para rotas protegidas
const ProtectedAdoptionsController = require('../controllers/protected.adoptionsController')
const ProtectedPetsController = require('../controllers/protected.petsController');
const ProtectedUsersController = require('../controllers/protected.usersController')


//Importa os controllers para rotas públicas
const PublicPetsController = require('../controllers/public.petsController');
const PublicUsersController = require('../controllers/public.usersController')


// Cria uma nova instância do roteador do Express 
const router = express.Router();
// Define a rota POST /users que chama o método register do AuthController
router.post('/users', PublicUsersController.register);
// Define a rota POST /login que chama o método login do AuthController
router.post('/login', PublicUsersController.login);
//Define a rota GET /pets/available para listar os pets com status 'available'
router.get('/pets/available', PublicPetsController.getAvailablePets);

// Define a rota GET /pets (admin)
router.get('/pets', authenticateToken, authorizeRole('admin'),ProtectedPetsController.getAllPets)
//Define a rota GET /pets/:id (admin)
router.get('/pets/:id', authenticateToken, authorizeRole('admin'),ProtectedPetsController.getPetByID)
//Define a rota POST /pets (admin)
router.post('/pets', authenticateToken, authorizeRole('admin'),ProtectedPetsController.createPet)
//Define a rota PUT /pets/:id (admin)
router.put('/pets/:id', authenticateToken, authorizeRole('admin'),ProtectedPetsController.updatePet)
//Define a rota DELETE /pets/:id (admin)
router.delete('/pets/:id', authenticateToken, authorizeRole('admin'),ProtectedPetsController.removePet)
//Define a rota GET /users (admin)
router.get('/users', authenticateToken, authorizeRole('admin'), ProtectedUsersController.getAllUsers)
//Define a rota GET /users/:id (admin ou o próprio usuário logado)
router.get('/users/:id', authenticateToken, authorizeIDAdmin,ProtectedUsersController.getUserByID)
//Define a rota PUT /users (admin ou o próprio usuário logado)
router.put('/users/:id', authenticateToken, authorizeIDAdmin,ProtectedUsersController.updateUser)
//Define a rota DELETE /users (admin)
router.delete('/users/:id', authenticateToken,  authorizeRole('admin'), ProtectedUsersController.removeUser)
//Define a rota GET /adoptions (admin)
router.get('/adoptions', authenticateToken, authorizeRole('admin'), ProtectedAdoptionsController.getAllAdoptions)
//Define a rota POST /adoptions (adopter)
router.post('/adoptions', authenticateToken, authorizeRole('adopter'), ProtectedAdoptionsController.createAdoption)
// Exporta o roteador configurado para ser utilizado na aplicação
module.exports = router;
