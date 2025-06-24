const PetsModel = require("../models/petsModel")  // Model responsável pelo acesso à tabela de pets no banco

// Classe que contém os serviços relacionados aos pets
class PetsService{
     // Serviço para listar todos os pets
 static async listPets() {
    return await PetsModel.getAllPets();
    }
    // Serviço para criar cadastro de pets, com validação
    static async addPets(pet) {
    //validateProduct(pet); // valida campos
    const existing = await PetsModel.getPetByID(pet.id);
    if (existing) {
    throw new Error('Pet com este ID já existe.');
    }
    return await PetsModel.registerPet(pet);
    }
    // Serviço para atualizar cadastro de pet, com validação
 static async editPet(id, pet) {
    //validateProduct(pet);
    await PetsModel.updatePet(id, pet);
    }
    // Serviço para deletar cadastro de pet
    static async removePet(id) {
    const existing = await PetsModel.getAvailablePetByID(id);
    if (!existing){
    throw new Error('Pet não está disponível para remoção do cadastro')
    }
    await PetsModel.deletePet(id);
    }
    //Serviço para listar pets com status 'available'
    static async availablePets(){
        return await PetsModel.getAvailablePets();
    }
    //Serviço para listar pets por ID
    static async getPetByID(_id){
        return await PetsModel.getPetByID(_id)
    }
   }
   module.exports = PetsService;
   // Exporta a classe para ser utilizada pelos controllers



