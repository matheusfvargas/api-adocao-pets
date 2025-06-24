-- Cria a tabela de usuários
CREATE TABLE IF NOT EXISTS users (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 email VARCHAR(150) NOT NULL UNIQUE,
 password VARCHAR(150) NOT NULL,
 phone VARCHAR(100) NOT NULL,
 role ENUM("adopter", "admin") NOT NULL,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cria a tabela de pets
CREATE TABLE IF NOT EXISTS pets (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 age INT NOT NULL,
 species VARCHAR(100) NOT NULL,
 size ENUM ("small", "medium", "large"),
 status ENUM("available", "adopted") NOT NULL,
 description VARCHAR(255),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Cria a tabela de adoptions, relacionamento pets e users
CREATE TABLE IF NOT EXISTS adoptions (
 id INT AUTO_INCREMENT PRIMARY KEY,
 user_id INT NOT NULL,
 pet_id INT NOT NULL,
 adoption_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY (user_id) REFERENCES users(id),
 FOREIGN KEY (pet_id) REFERENCES pets(id)
);
