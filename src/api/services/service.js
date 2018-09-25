const Connection = require('../utils/connection');

module.exports = 
{
    list: async data =>
    {
        return new Promise((resolve, reject) => 
        {
            try
            {
                //Pra falar com o banco eu gosto de 
                //Escrever a query na mão
                
                //Esse ? é substituido por uma variavel que você quiser
                //Que fica naquele vetor "args"
                //Que nesse caso é 1
                //Podem ter vários ?, cada um pra uma variavel do vetor args
                const query = `SELECT id, name, email FROM users WHERE active = ?;`;

                const args = [1];
                
                Connection.query(query, args)
                .then(dbResponse => 
                {
                    //Esse if com throw é uma validação padrão que tem que ter
                    //Por que esse Connection fui eu que fiz. E se da pau quando fala com o banco
                    //OU ele retorna nulo, OU ele retorna status false, OU ele não retorna nada no data.
                    //Se der sucesso, mesmo que retorne uma lista vazia do banco, não vai entrar nesse IF. 
                    //É só quando da merda
                    if(!dbResponse || dbResponse.status != true || !dbResponse.data)
                        throw new Error('No response');

                    //Se deu certo, devolve pra controller que vai devolver pra quem chamou
                    resolve({status: true, message: 'Ok', data: dbResponse});
                })
                .catch(error => reject(error));
            }
            catch(e)
            {
                reject({status: false});
            }
        });
    },
    create: async data =>
    {
        return new Promise((resolve, reject) => 
        {
            try
            {
                const query = `INSERT INTO users (name, email, active) VALUES (?,?,?);`;
                const args = [data.name, data.email, data.active];
                
                Connection.query(query, args)
                .then(dbResponse => 
                {
                    if(!dbResponse || dbResponse.status != true)
                        throw new Error('No response');

                    resolve({status: true, message: 'Usuário criado'});
                })
                .catch(error => reject(error));
            }
            catch(e)
            {
                console.log(e);
                reject({status: false});
            }
        });
    },
    edit: async data =>
    {
        return new Promise((resolve, reject) => 
        {
            try
            {
                const select_query = `SELECT id, name, email, active FROM users WHERE active = ?;`;
                const update_query = `UPDATE users SET name = ?, email = ?, active = ? WHERE id = ?;`;

                const select_args = [data.id];
                let update_args = [];
                
                Connection.query(select_query, select_args)
                .then(dbSelectResponse => 
                {
                    if(!dbSelectResponse || dbSelectResponse.status != true || !dbSelectResponse.data)
                        throw new Error('No response');
                    if(dbSelectResponse.data.length == 0)
                        return reject({status: false, message:'Usuário não encontrado'})

                    const user = dbSelectResponse.data[0];
                    
                    console.log(JSON.stringify(user));

                    update_args.push(data.name || user.name);
                    update_args.push(data.email || user.email);
                    update_args.push(data.active || user.active);
                    update_args.push(data.id);

                    Connection.query(update_query, update_args)
                    .then(dbUpdateResponse => 
                    {
                        if(!dbUpdateResponse || dbUpdateResponse.status != true)
                            throw new Error('Could not update');
                        
                        resolve({status: true, message: 'Usuário editado'});
                    })
                    .catch(error => reject(error));
                })
                .catch(error => reject(error));
            }
            catch(e)
            {
                reject({status: false});
            }
        });
    },
    delete: async data =>
    {
        return new Promise((resolve, reject) => 
        {
            try
            {
                const query = `DELETE FROM users WHERE id = ?;`;
                const args = [data.id];
                
                Connection.query(query, args)
                .then(dbResponse => 
                {
                    if(!dbResponse || dbResponse.status != true)
                        throw new Error('No response');

                    resolve({status: true, message: 'Ok'});
                })
                .catch(error => reject(error));
            }
            catch(e)
            {
                reject({status: false});
            }
        });
    },
}