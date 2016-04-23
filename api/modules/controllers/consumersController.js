/**
 * Controller that hold all
 * operations for consumer
 * @author Eduardo Hattori 
 * @param  {[type]}   app [description]
 * @return {[type]}       [description]
 */

module.exports = function(app){

	var consumerModel = app.modules.models.consumerModel;
	
	var consumerController = {

		/**
		* insert a new consumer to model
		* and return to callback a new consumer 
		* from model		
		* 
		* @author: Eduardo Hattori
		*/		
		pushConsumer : function(req, res){

			var consumer       = req.body;

			consumer.qtdCoffee = 0;
			consumer.date      = new Date();

			if(consumerModel.isValid(consumer)){
				consumerModel.pushConsumer(consumer,function(err, data){
					if(err) res.status(500).send(err);
					res.status(201).send({'record' : data});
				});	
			} else {				
				res.status(400).send({'developerMessage' : 'Invalid Object Consumer'});				
			}
		},

		/**
		* The method get from model the information
		* of all consumers and return to callback		
		* 
		* @author: Eduardo Hattori
		*/
		getAllConsumers : function(req, res){

			consumerModel.getAllConsumers(function(err, consumers){
				if(err) res.status(500).send(err);

				if(Array.isArray(consumers)){
					res.status(200).send({ 'totalRecords': consumers.lenght, 'records' : consumers});	
				} else {
					res.status(500).send('The problem ocorred with API');
				}
				
			});
		},

		/**
		* The method increment more one coffee
		* for consumer selected
		*
		* @author: Eduardo Hattori
		*/
		incrementCoffee : function(req, res){

			var id = req.params.id;

			consumerModel.incrementCoffee(id, function(err){				
				if(err) res.status(500).send(err);
				res.status(200).send('');
			});
		}
	};


	return consumerController;
};