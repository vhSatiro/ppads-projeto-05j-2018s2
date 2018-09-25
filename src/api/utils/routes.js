const Controller = require('../controllers/controller');
module.exports = (App) => 
{
    //Aqui só seria importante se tivessem várias controllers.
	Controller(App);
}