// Importa o framework Express
const express = require('express');
//Importa o middleware que valida tokens JWT em rotas protegidas
const { authenticateToken, authorizeRole } = require('../middlewares/auth.middleware');
const ProtectedAdoptionsController = require('../controllers/protected.adoptionsController')
const ProtectedPetsController = require('../controllers/protected.petsController');
const ProtectedUsersController = require('../controllers/protected.usersController')
// Cria uma nova instância do roteador do Express para definir as rotas protegidas
const router = express.Router();
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
router.get('/users/:id', authenticateToken, ProtectedUsersController.getUserByID)
//Define a rota PUT /users (admin ou o próprio usuário logado)
router.put('/users/', authenticateToken, ProtectedUsersController.updateUser)
//Define a rota DELETE /users (admin)
router.delete('/users/:id', authenticateToken, authorizeRole('admin'), ProtectedUsersController.removeUser)
//Define a rota GET /adoptions (admin)
router.get('/adoptions', authenticateToken, authorizeRole('admin'), ProtectedAdoptionsController.getAllAdoptions)
//Define a rota POST /adoptions (adopter)
router.post('/adoptions', authenticateToken, authorizeRole('adopter'), ProtectedAdoptionsController.createAdoption)
// Exporta o roteador configurado para ser utilizado na aplicação
module.exports = router;
