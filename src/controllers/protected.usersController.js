const UserService = require('../services/userService');

class ProtectedUsersController {
  // Lista todos os usuarios
  static async getAllUsers(req, res) {
    try {
      const users = await UserService.listUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
    }
  }
  //Lista user por ID
  static async getUserByID(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserByID(id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
    }
  }
  // Atualiza um cadastro de usuario existente
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { _id } = req.user.userID;
      await UserService.editUser(_id, id, req.body);
      res.json({ message: 'Cadastro atualizado com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se não encontrar ou problema nos dados
    }
  }
  // Exclui um cadastro de user
  static async removeUser(req, res) {
    try {
      const { id } = req.params;
      await UserService.deleteUser(id);
      res.json({ message: 'Cadastro deletado com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se usuário não encontrado
    }
  }
}

module.exports = ProtectedUsersController;
