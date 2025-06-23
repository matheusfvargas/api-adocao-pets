const AdoptionsModel = require("../models/adoptionsModel"); // Model responsável pelo acesso à tabela de adoções

class AdoptionService{

 //Serviço para listar todas as adoções
 static async listAdoptions() {
    return await AdoptionsModel.getAllAdoptions();
    }
//Serviço para registrar nova adoção
static async createAdoption(adoption){
    return await AdoptionsModel.registerAdoption(adoption)

}

}

module.exports = AdoptionService;