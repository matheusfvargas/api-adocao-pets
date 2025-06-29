// Importa a conexão pool com o banco de dados
const db = require('../config/database');

class UserModel {
  // Busca um usuário pelo email
  static async findByEmail(email) {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [
      email,
    ]);
    return rows[0];
  }
  // Cria um novo usuário
  static async create(user) {
    if (!user.role) {
      const { name, email, password, phone } = user;
      const [result] = await db.query(
        'INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)',
        [name, email, password, phone]
      );
      return result.insertId; // Retorna o ID do usuário criado
    }
    const { name, email, password, phone, role } = user;
    const [result] = await db.query(
      'INSERT INTO users (name, email, password, phone, role) VALUES (?, ?, ?, ?, ?)',
      [name, email, password, phone, role]
    );
    return result.insertId; // Retorna o ID do usuário criado
  }

  //Lista todos os usuários
  static async getAllUsers() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  }
  //Lista usuario por ID
  static async getUserByID(_id) {
    const [row] = await db.query('SELECT * FROM users WHERE id =?', [_id]);
    return row[0];
  }
  //Atualiza cadastro de user
  static async updateUser(id, { name, email, password, phone, role }) {
    await db.query(
      'UPDATE users SET name = ?, email = ?, password =?, phone=?, role=?  WHERE id = ?',
      [name, email, password, phone, role, id]
    );
  }
  //Deleta cadastro de user
  static async deleteUser(id) {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
  }
}
// Exporta a classe UserModel para ser usada nos services

module.exports = UserModel;
