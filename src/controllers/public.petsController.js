const PetsService = require("../services/petsService");

class PublicPetsController{
    // Método que lista todos os pets com status 'available'
    static async getAvailablePets(req, res) {
        try {
        const pets = await PetsService.availablePets();
        res.json(pets);
        } catch (error) {
        res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
        }
        }
}

module.exports = PublicPetsController;