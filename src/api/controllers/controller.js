const Service = require('../services/service');

module.exports = (App) => 
{
    App.get('/users', (req, res) => 
    {
        try
        {
            //Assim que pega dados da query
            const info = req.query.info;

            //Assim que retorna erro, mandando um res.status(status)
            // return res.status(401).json({status: false, message: 'Erro'});

            //Se acostuma com Promise e Arrow function. Aquele res.json(response) é onde cai quando da certo
            //O outro que tem 400 é quando da pau no arquivo Service
            Service.list()
            .then(response =>  res.json(response))
            .catch(error => res.status(400).json(error));
        }
        catch(e)
        {
            console.log(e);
            res.status(400).json({status: false, message: 'Erro Genérico'});
        }
    });
    
    App.post('/users', (req, res) => 
    {
        try
        {
            //Assim que pega dados do body
            const user = {
                email: req.body.email,
                name: req.body.name,
                active: req.body.active
            }

            if(!user.email || user.email == '')
                return res.status(400).json({status: false, message: 'Email é obrigatório'});
            
            Service.create(user)
            .then(response =>  res.json(response))
            .catch(error => res.status(400).json(error));
        }
        catch(e)
        {
            res.status(400).json({status: false, message: 'Erro'});
        }
    });

    App.put('/users/:id', (req, res) => 
    {
        try
        {
            //Esse req.params pega o id quando ele é colocado depois da barra e não como variavel da queryString
            const user = {
                id: req.params.id,
                email: req.body.email,
                name: req.body.name,
                active: req.body.active
            }

            if(!user.id )
                return res.status(400).json({status: false, message: 'Id é obrigatório'});
            
            Service.edit(user)
            .then(response =>  res.json(response))
            .catch(error => res.status(400).json(error));
        }
        catch(e)
        {
            res.status(400).json({status: false, message: 'Erro'});
        }
    });

    App.delete('/users/:id', (req, res) => 
    {
        try
        {
            const user = {
                id: req.params.id
            }

            if(!user.id )
                return res.status(400).json({status: false, message: 'Id é obrigatório'});
            
            Service.delete(user)
            .then(response =>  res.json(response))
            .catch(error => res.status(400).json(error));
        }
        catch(e)
        {
            res.status(400).json({status: false, message: 'Erro'});
        }
    });
}