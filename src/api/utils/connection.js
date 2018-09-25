const Mysql = require('Mysql');

//Polling config
const Pool = Mysql.createPool({
    connectionLimit : 20,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

module.exports = 
{
    query: (query, args) => 
    {
        return new Promise((resolve, reject) => 
        {
            try
            {
                //Se a chamada da query não tem nada dentro, da erro
                if(!query || query.trim() == '') 
                    return reject({status:false, message:'No query was specified'});

                //Pega uma conexão com o banco
                Pool.getConnection((conError, connection) => 
                {
                    //Se não conseguiu conectar, reclama
                    if(conError || !connection)
                        return reject({status:false,message:'Could not connect to the database.'});
                    
                    //Tenta fazer a query
                    connection.query(query, (args || []), (queryError, queryResponse) => 
                    {
                        //Solta a conexão que pegou
                        connection.release();
                        //Se deu problema na chamada, reclama e manda o erro da query
                        if(queryError || !queryResponse)
                            return reject({status:false, message:'The query could not be completed due to an error or a lack of response. ' + queryError.sql});

                        //Se deu certom, devolve o que retornou
                        resolve({status: true, message: 'success', data: queryResponse});
                    });
                });
            }
            catch(e)
            {
                reject({status: false, message:'Unknown exception was thrown. Could not complete the query.'});
            }
        });
    }
}
