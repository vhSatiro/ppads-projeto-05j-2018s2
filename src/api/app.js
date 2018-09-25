//Loading the environment variables via dotenv module
require('dotenv').config();
//Express setup
const Express = require('express');
const App = Express();
//My lib
const Routes = require('./utils/routes');
//MiddleWare
App.use(Express.json());
App.use((req, res, next) => 
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,HEAD');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Simplus-Auth");    
    next();
});
//Routing
Routes(App);
//Server
App.listen(process.env.PORT, () => console.log('Server started at localhost' + (process.env.PORT != 80 ? ':8000/' : '/')));
