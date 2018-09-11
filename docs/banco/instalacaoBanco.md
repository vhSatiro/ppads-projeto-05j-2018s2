# Instalação do banco de dados MongoDB no servidor Linux

#### Configurações pré-instalação

* Importação da chave para o repositório MongoDB

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
```

* Criação do arquivo de lista para baixar o pacote

```
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
```

* Atualize os repositórios

```
sudo apt-get update
```

#### Instalação

* Instalação do pacote do MongoDB

```
sudo apt-get install -y mongodb-org
```

* Criação de um arquivo de gerenciamento de serviço para o MongoDB no diretório /etc/systemd/system

```
sudo nano /etc/systemd/system/mongodb.service
```

* Preencha com o seguinte conteúdo

```
[Unit]
Description=High-performance, schema-free document-oriented database
After=network.target

[Service]
User=mongodb
ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

[Install]
WantedBy=multi-user.target
```

* Inicie o serviço recém-criado

```
sudo systemctl start mongodb
```

* Verifique o status do serviço

```
sudo systemctl status mongodb
```
O output deverá ser algo parecido com isso:
```
● mongodb.service - High-performance, schema-free document-oriented database
   Loaded: loaded (/etc/systemd/system/mongodb.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2016-04-25 14:57:20 EDT; 1min 30s ago
 Main PID: 4093 (mongod)
    Tasks: 16 (limit: 512)
   Memory: 47.1M
      CPU: 1.224s
   CGroup: /system.slice/mongodb.service
           └─4093 /usr/bin/mongod --quiet --config /etc/mongod.conf
```

* Habilite o serviço do MongoDB na inicialização do sistema

```
sudo systemctl enable mongodb
```

Pronto, o banco de dados está instalado e configurado para uso, para iniciá-lo, basta digitar o comando:

```
mongo
```

[Fonte: Como instalar o MongoDB no Ubuntu 16.04 - Mateusz Papiernik](https://www.digitalocean.com/community/tutorials/como-instalar-o-mongodb-no-ubuntu-16-04-pt)
