const bcrypt = require('bcryptjs'); // Biblioteca para criptografia de senhas
const jwt = require('jsonwebtoken'); // Biblioteca para geração de tokens JWT
const UserModel = require("../models/usersModel"); // Model responsável pelo acesso à tabela de usuários no banco

// Classe que contém os serviços relacionados ao usuário, como registro e login
class UserService {
// Serviço para registrar um novo usuário
    static async registerUser(user) {
    const { email, password} = user;
    // Verifica se o e-mail já está cadastrado
    const existing = await UserModel.findByEmail(email);
    if (existing) {
    throw new Error('Usuário já existe');
    }
    // Criptografa a senha antes de salvar no banco
    const hashed = await bcrypt.hash(password, 10);
    // Substitui a senha original pela criptografada
    user.password = hashed;
    // Cria o novo usuário e retorna seu ID
    const id = await UserModel.create(user);
    // Retorna os dados de sucesso (sem lançar erro)
    return { message: 'Usuário registrado com sucesso', id };
    }

//Serviço para autenticar o usuário e gerar token JWT
    static async loginUser({ email, password }) {
    // Busca o usuário pelo e-mail
    const user = await UserModel.findByEmail(email);
    if (!user) {
    throw new Error('Usuário não encontrado');
    }
    // Verifica se a senha fornecida é válida
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
    throw new Error('Senha inválida');
    }
    // Gera o token JWT
    const token = jwt.sign(
    { userID: user.id, role: user.role },
    process.env.JWT_SECRET,
 { expiresIn: '1h' }
 );
 // Retorna o token para o controller
 return { token };
 }

 //Serviço para listar todos os usuários
 static async listUsers() {
    return await UserModel.getAllUsers();
    }
// Serviço para retornar usuario por ID
static async getUserByID(id){
    return await UserModel.getUserByID(id);
}
//Serviço para atualizar cadastro de usuário
static async editUser(id, user){
    return await UserModel.updateUser(id, user)
}
//Serviço para deletar cadastro de usuário
static async deleteUser(id){
    return await UserModel.deleteUser(id)
}
}
module.exports = UserService;