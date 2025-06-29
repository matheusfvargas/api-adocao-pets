// Importa a conexão pool com o banco de dados
const db = require('../config/database');

class AdoptionsModel {
  //Lista todas as adoções
  static async getAllAdoptions() {
    const [rows] = await db.query('SELECT * FROM adoptions');
    return rows;
  }
  //Nova adoção de um pet
  static async registerAdoption(user_id, pet_id) {
    const [result] = await db.query(
      'INSERT INTO adoptions (user_id, pet_id) VALUES ( ?, ?)',
      [user_id, pet_id]
    );
    return { id: result.insertId, user_id, pet_id };
  }
  //Busca adoção por user_id
  static async getAdoptionByUser(user_id) {
    const [result] = await db.query('SELECT * FROM adoptions WHERE user_id=?', [
      user_id,
    ]);
    return result[0];
  }
}
//
module.exports = AdoptionsModel;
