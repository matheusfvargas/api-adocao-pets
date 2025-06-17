// Importa o framework Express
const express = require('express');
//Importa o middleware que valida tokens JWT em rotas protegidas
const { authenticateToken, authorizeRole } = require('../middlewares/auth.middleware');
// Importa o controller responsável por lidar com rotas protegidas por autenticação JWT
const ProtectedController = require('../controllers/protected.controller');
// Cria uma nova instância do roteador do Express para definir as rotas protegidas
const router = express.Router();

// Define a rota GET /dashboard que chama o método dashboard do ProtectedController
router.get('/dashboard', authenticateToken, ProtectedController.dashboard);
// Define a rota GET /admin que chama o método adminOnly do ProtectedController

router.get('/admin', authenticateToken, authorizeRole('admin'),
ProtectedController.adminOnly);

// Exporta o roteador configurado para ser utilizado na aplicação
module.exports = router;
