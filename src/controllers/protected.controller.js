const PetsService = require("../services/petsService");
const UserService = require("../services/userService");

// Controlador responsável por lidar com rotas protegidas por autenticação JWT
class ProtectedController {
   // Lista todos os pets
    static async getAllPets(req, res) {
    try {
    const pets = await PetsService.listPets();
    res.json(pets);
    } catch (error) {
    res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
    }
    }
    //Lista pet por ID
    static async getPetByID(req, res) {
        try {
        const { id } = req.params
        const pet = await PetsService.getPetByID(id);
        res.json(pet);
        } catch (error) {
        res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
        }
        }
    // Cria um novo cadastro de pet
    static async createPet(req, res) {
    try {
    const pet = await PetsService.addPets(req.body);
    res.status(201).json(pet);
    } catch (error) {
        res.status(400).json({ error: error.message }); // Em caso de erro de validação, retorna status 400
         }
         }
    // Atualiza um cadastro de pet existente
    static async updatePet(req, res) {
         try {
         const { id } = req.params;
         await PetsService.editPet(id, req.body);
         res.json({ message: 'Cadastro atualizado com sucesso.' });
         } catch (error) {
         res.status(400).json({ error: error.message }); // Retorna erro se não encontrar ou problema nos dados
         }
         }
         // Exclui um cadastro de pet
         static async removePet(req, res) {
         try {
         const { id } = req.params;
         await PetsService.removePet(id);
         res.json({ message: 'Cadastro deletado com sucesso.' });
         } catch (error) {
         res.status(400).json({ error: error.message }); // Retorna erro se usuário não encontrado
         }
         }
        
        // Lista todos os usuarios
        static async getAllUsers(req, res) {
        try {
        const users = await UserService.listUsers();
        res.json(users);
        } catch (error) {
        res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
        }
        }
        //Lista user por ID
        static async getUserByID(req, res) {
            try {
            const { id } = req.params
            const user = await UserService.getUserByID(id);
            res.json(user);
            } catch (error) {
            res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
            }
            }
        // Atualiza um cadastro de usuario existente
        static async updateUser(req, res) {
             try {
             const { id } = req.params;
             await UserService.editUser(id, req.body);
             res.json({ message: 'Cadastro atualizado com sucesso.' });
             } catch (error) {
             res.status(400).json({ error: error.message }); // Retorna erro se não encontrar ou problema nos dados
             }
             }
             // Exclui um cadastro de user
             static async removeUser(req, res) {
             try {
             const { id } = req.params;
             await UserService.deleteUser(id);
             res.json({ message: 'Cadastro deletado com sucesso.' });
             } catch (error) {
             res.status(400).json({ error: error.message }); // Retorna erro se usuário não encontrado
             }
             }
            }
   // Exporta o controlador para ser utilizado nas rotas protegidas
   module.exports = ProtectedController;