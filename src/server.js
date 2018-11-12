//Setup da aplicação
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Livro = require('./app/models/livro');

mongoose.connect('mongodb://vini123:vini123@ds159237.mlab.com:59237/node-bookstore', {
    useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
var port = process.env.port || 4321;

//Rotas

var router = express.Router();

router.use(function (req, res, next) {
    console.log("Algo está acontecendo aqui!");
    next();
});

//rota de exemplo
router.get('/', function (req, res) {
    res.json({ message: "Funciona" });
});

//Rotas que terminarem com /livros (GET e POST)
router.route('/livros')
    //Método de criar livro acessível em POST /api/livros
    .post(function (req, res) {
        var livro = new Livro();

        //Setar os campos do produto(via req)
        livro.titulo = req.body.titulo;
        livro.genero = req.body.genero;
        livro.descricao = req.body.descricao;
        livro.ano = req.body.ano;
        livro.autor = req.body.autor;
        livro.status = req.body.status;
        livro.save(function (error) {
            if (error) {
                res.send('Erro ao tentar salvar' + error);
            }
            res.json({ message: 'Livro cadastrado!' });
        });
    })
    .get(function (req, res) {
        console.log(req.query)
        if (req.query.filtro) {
            var filtro = req.query.filtro;
            var searchParams = req.query.tags
            switch (filtro) {
                case 'autor':
                    var query = Livro.find({ autor: new RegExp(searchParams, 'i') });
                    query.exec(function (err, docs) {
                        res.json(docs);
                    });
                    break;
                case 'genero':
                    var query = Livro.find({ titulo: new RegExp(searchParams, 'i') });
                    console.log(query);
                    query.exec(function (err, docs) {
                        res.json(docs);
                    });
                    break;
                case 'titulo':
                    var query = Livro.find({ titulo: new RegExp(searchParams, 'i') });
                    query.exec(function (err, docs) {
                        res.json(docs);
                    });
                    break;
            }
        } else {
            Livro.find(function (error, livros) {
                if (error) {
                    res.send("Erro ao tentar selecionar produtos: " + error);
                }
                res.json(livros);
            })
        }

    });

//Rotas que irão terminar em /livros/:livro_id (GET, PUT E DELETE)
router.route('/livros/:livro_id')
    //Selecionar por ID
    .get(function (req, res) {
        console.log(req.query)
        Livro.findById(req.params.livro_id, function (error, livro) {
            if (error) {
                res.send("ID não encontrado: " + error);
            }
            res.json(livro);
        })
    });
app.use('/api', router);

app.listen(port);
console.log('Iniciando app na porta: ' + port);
