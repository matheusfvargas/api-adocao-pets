// Importa o módulo Express, para a criação de servidores web com Node.js
const express = require('express');
// Importa o middleware para tratamento centralizado de erros
const errorMiddleware = require('./middlewares/error.middleware');
// Importa as rotas públicas, que não requerem autenticação
const publicRoutes = require('./routes/public.routes');
// Importa as rotas protegidas, que só podem ser acessadas com um token JWT
const protectedRoutes = require('./routes/protected.routes');
// Cria uma instância da aplicação Express
const app = express();
// Habilita o servidor para receber e interpretar requisições com corpo em JSON
app.use(express.json());
// Define o prefixo '/auth' para as rotas de autenticação
app.use('/auth', authRoutes);
// Define o prefixo '/public' para rotas acessíveis sem autenticação
app.use('/public', publicRoutes);
// Define o prefixo '/protected' para rotas que exigem autenticação com JWT
app.use('/protected', protectedRoutes);
// Middleware de tratamento de erros (deve ser adicionado depois das rotas)
app.use(errorMiddleware);
// Exporta o app para que ele possa ser utilizado por outros arquivos
module.exports = app;
