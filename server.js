// Carrega variáveis de ambiente
require('dotenv').config();
// Importa o app já configurado (rotas, middlewares e tratamento de erros)
const app = require('./src/app');
const PORT = process.env.PORT || 3000;
// Inicia o servidor Express para escutar na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
