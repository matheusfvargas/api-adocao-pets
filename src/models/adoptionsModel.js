// Importa a conexão pool com o banco de dados
const db = require('../config/database');

class AdoptionsModel{
    //Lista todas as adoções
    static async getAllAdoptions(){
    const [rows] = await db.query('SELECT * FROM adoptions');
    return rows;
    }
    //Nova adoção de um pet
    static async registerAdoption({user_id, pet_id, adoption_date }) {
            const [result] = await db.query(
            'INSERT INTO pets (user_id, pet_id, adoption_date) VALUES ( ?, ?, ?)',
            [user_id, pet_id, adoption_date]
            );
            return { id: result.insertId, user_id, pet_id, adoption_date};
    }
}
//
module.exports = AdoptionsModel;