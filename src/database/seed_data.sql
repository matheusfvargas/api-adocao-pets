-- Insere dois tipos de usuários
INSERT INTO users (name, email, password, phone, role) VALUES
('Matheus Vargas','admin@ifrs.edu.br',
'$2b$10$382cEJJYi5YxSBNvWmufHeoPHX3dqIB9NP2R2XWzt/w.DnC0gmCr2', '54991916567','admin'),
('Usuario Teste','usuario@ifrs.edu.br',
'$2b$10$/JLXJ62EBlk1bNq0xmpvMuTLDJb6AWmZUs74lgEJb4Z.J9.3kFJM.','54991992904', 'adopter');

-- Insere três pets
INSERT INTO pets (name, age, species,size, status, description ) VALUES 
("rex", 5, "Cão pastor alemão","large", "available", "cão de guarda vacinado"),
("totó", 1, "Cão SRD", "medium", "available", "cão castrado e vacinado"),
("mimi", 2, "Gato siamês", "small", "adopted", "gata ideal para companhia");

