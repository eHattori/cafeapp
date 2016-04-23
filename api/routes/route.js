/**
 * Mapping routes of API
 * @author Eduardo Hattori 
 * @param  {[type]}   app [description]
 * @return {[type]}       [description]
 */

module.exports = function(app){


	var consumersController = app.modules.controllers.consumersController;


	//ROUTE CONSUMER
	app.post('/api/consumer', consumersController.pushConsumer);
	app.get('/api/consumers', consumersController.getAllConsumers);
	app.put('/api/consumer/:id/incrementcoffee', consumersController.incrementCoffee)

};
