// Importa a conexão pool com o banco de dados
const db = require('../config/database');

class PetsModel{
// Retorna todos os pets
static async getAllPets() {
    const [rows] = await db.query('SELECT * FROM pets');
    return rows;
    }
    // Busca um pet por ID (usada para evitar duplicação)
    static async getPetByID(_id) {
    const [rows] = await db.query('SELECT * FROM pets WHERE id = ?', [
    _id,
    ]);
    return rows[0];
    }
    // Inserir um novo cadastro de pet
    static async registerPet({ name, age, species, size, status, description }) {
    const [result] = await db.query(
    'INSERT INTO pets (name, age, species, size, status, description) VALUES (?, ?, ?, ?, ?, ?)',
    [name, age, species, size, status, description]
    );
    return { id: result.insertId, name, age, species, size, status, description };
    }
    // Atualizar os dados de um pet
    static async updatePet(id, { name, age, species, size, status, description }) {
    await db.query(
    'UPDATE pets SET name = ?, age = ?, species =?, size=?, status=?, description =? WHERE id = ?',
    [name, age, species, size, status, description,id]
    );
    }
    // Deletar cadastro do pet 
    static async deletePet(id) {
    await db.query('DELETE FROM pets WHERE id = ?', [id]);
    }
    //Retorna pets com status 'available'
    static async getAvailablePets(){
        const [rows] = await db.query("SELECT * FROM pets WHERE status = 'available'", [_id])
        return rows;
    }
    //Retorna pet com ID e status 'available'
    static async getAvailablePetByID(_id){
        const [rows] = await db.query("SELECT * FROM pets WHERE status = 'available' AND id =?")
        return rows[0];
    }
   }

   // Exporta a classe PetsModel para ser usada nos services
   module.exports = PetsModel;
