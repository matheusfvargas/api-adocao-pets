const AdoptionsService = require('../services/adoptionsService');

class ProtectedAdoptionsController {
  // Lista todas as adoções
  static async getAllAdoptions(req, res) {
    try {
      const adoptions = await AdoptionsService.listAdoptions();
      res.json(adoptions);
    } catch (error) {
      res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
    }
  }
  //Registra nova adoção
  static async createAdoption(req, res) {
    try {
      const _id = req.user.userID;
      const adoption = await AdoptionsService.createAdoption(_id, req.body);
      res.status(201).json(adoption);
    } catch (error) {
      res.status(400).json({ error: error.message }); // Em caso de erro de validação, retorna status 400
    }
  }
}

module.exports = ProtectedAdoptionsController;
