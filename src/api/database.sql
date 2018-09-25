#Isso aqui é o que eu rodei no banco
CREATE TABLE users (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  active BIT DEFAULT 1,
  email varchar(255) DEFAULT 'Não Informado',
  PRIMARY KEY (`id`)
);
INSERT INTO users (name, email, active) VALUES ('Admin','admin@admin.com', 1);