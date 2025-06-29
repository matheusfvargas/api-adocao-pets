# 🛍 Serviço API de Adoção de Pets

## Neste projeto, oferecemos uma **API RESTFul** que serve de base para um sistema de adoção de animais de estimação. A API tem o objetivo de realizar o cadastro e gerenciamento de usuários e pets, além de implementar o controle de autenticação de usuário em JWT. Uma **API RESTful** desenvolvida em **Node.js** com **Express** e **MySQL**. Projetada com boas práticas de organização de código, uso de middlewares, validações e integração com ESLint + Prettier.

## 🚀 Funcionalidades

_Rotas Públicas_

- 🔹 `POST /users` – Registro de novos usuários
- 🔹 `POST /login` – Login do usuário para rotas protegidas
- 🔹 `GET /pets/available` - Lista de todos os pets disponíveis para adoção

_Rotas Protegidas_

- 🔹 `GET /pets` – Lista todos os pets (restrito a admin)
- 🔹 `GET /pets/:id` - Lista atributos de um pet específico (restrito a admin)
- 🔹 `POST /pets` – Cadastra um novo pet (restrito a admin)
- 🔹 `PUT /pets/:id` – Atualiza um cadastro de pet (restrito a admin)
- 🔹 `DELETE /pets/:id` – Remove um cadastro de pet (restrito a admin)
- 🔹 `GET /users` - Lista todos os usuários (restrito a admin)
- 🔹 `DELETE /users/:id` - Remove um usuário específico (restrito a admin)
- 🔹 `GET /users/:id` - Lista os atributos do perfil do usuário (admin ou o próprio usuário)
- 🔹 `PUT /users/:id` - Atualiza o cadastro do usuário (admin ou o próprio usuário)
- 🔹 `GET /adoptions` - Lista todas as adoções realizadas (restrito a admin)
- 🔹 `POST /adoptions` - Realiza nova adoção (usuário não admin)
- ✅ Validação de campos obrigatórios
- 🧪 Testes via REST Client no VSCode

---

## 🧱 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [REST
  Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

---

## 📦 Instalação e uso

```bash
# Clone o repositório
git clone https://github.com/matheusfvargas/api-adocao-pets
cd api-adocao-pets
# Instale as dependências
npm install express mysql2 jsonwebtoken bcryptjs dotenv nodemon eslint prettier
# Configure o ambiente
cp .env.example .env
# Edite o .env com as configurações do seu MySQL
# Crie o banco de dados e tabelas
mysql -u root -p < src/database/create_database.sql
mysql -u root -p pets_db < src/database/create_tables.sql
mysql -u root -p pets_db < src/database/seed_data.sql
# Inicie a aplicação
node server.js
```

### ⌨️ Testes de estilo de codificação

```bash
#Para rodar o script das ferramentas ESLINT e PRETTIER, execute o seguinte comando (as recomendações aparecerão no console):

npm run lint

#Para aplicar a formatação recomendada pelo PRETTIER, execute o seguinte comando:

npm run format

#Para aplicar a correção de erros pelo automaticamente pelo ESLINT, execute o seguinte comando:

npm run lint -- --fix
```

## Estrutura do Banco de Dados

_Tabela Users_
- ***id (int)*** Identificador único (auto incremento)
- ***name (string)*** Nome completo
- ***email (string)*** E-mail (único)
- ***password (string)*** Senha (criptografada com bcrypt)
- ***phone (string)*** Telefone de contato
- ***role (string)*** Perfil do usuário (admin ou adopter)

_Tabela Pets_
- ***id (int)*** Identificador único (auto incremento)
- ***name (string)*** Nome do pet
- ***age (int)*** Idade aproximada em anos
- ***species (string)*** Espécie (ex: dog, cat)
- ***size (string)*** Porte do animal (small, medium, large)
- ***status (string)*** Situação (available, adopted)
- ***description (string)*** Texto opcional com informações adicionais

_Tabela Adoptions_
- ***id (int)*** Identificador da adoção (auto incremento)
- ***user_id (int)*** ID do usuário que realizou a adoção
- ***pet_id (int)*** ID do pet adotado
- ***adoption_date (date)*** Data da adoção


## ✒️ Autores

- **Matheus Vargas** - [matheusfvargas](https://github.com/matheusfvargas)

Você também pode ver a lista de todos os colaboradores (https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.
