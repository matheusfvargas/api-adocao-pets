const AdoptionsModel = require("../models/adoptionsModel"); // Model responsável pelo acesso à tabela de adoções
const PetsModel = require("../models/petsModel");
class AdoptionService{

 //Serviço para listar todas as adoções
 static async listAdoptions() {
    return await AdoptionsModel.getAllAdoptions();
    }
//Serviço para registrar nova adoção
static async createAdoption(user_id, {pet_id}){
    const available = await PetsModel.getAvailablePetByID(pet_id)
    if (!available){
        throw new Error('Pet não está disponível para adoção')
    }
    const status = "adopted";
    await PetsModel.setStatus(pet_id, status);
    const existing = await PetsModel.getAvailablePetByID(pet_id)
    if (existing){
        throw new Error('Registro não efetuado')
    }
    return await AdoptionsModel.registerAdoption(user_id, pet_id);
}
}

module.exports = AdoptionService;