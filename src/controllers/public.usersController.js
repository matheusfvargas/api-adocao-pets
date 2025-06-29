const UserService = require('../services/userService');

class PublicUsersController {
  // Método estático que trata o cadastro de um novo usuário
  static async register(req, res) {
    try {
      // Chama o serviço para registrar o usuário, passando os dados da requisição
      const result = await UserService.registerUser(req.body);
      // Retorna status 201 (Criado) com os dados retornados pelo serviço
      return res.status(201).json(result);
    } catch (error) {
      // Em caso de erro (ex: usuário já existe), retorna status 409 (Conflito) com a mensagem do erro
      return res.status(409).json({ message: error.message });
    }
  }
  // Método estático que trata o login do usuário
  static async login(req, res) {
    try {
      // Chama o serviço para autenticar o usuário, passando os dados da requisição
      const result = await UserService.loginUser(req.body);
      // Retorna status 200 (OK) com o token JWT
      return res.status(200).json(result);
    } catch (error) {
      // Define o status apropriado com base na mensagem de erro
      const status =
        error.message === 'Usuário não encontrado' ||
        error.message === 'Senhainválida'
          ? 401
          : 500; // Não autorizado ou erro interno do servidor
      // Retorna o status definido com a mensagem do erro
      return res.status(status).json({ message: error.message });
    }
  }
}

module.exports = PublicUsersController;
