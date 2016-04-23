/**
 * Model that control the transaction with mongo DB 
 *
 * @author Eduardo Hattori 
 * @param  {[type]}   app [description]
 * @return {[type]}       [description]
 */

 module.exports = function(app){

 	var mongoose = require('mongoose');
 	var Schema = require('mongoose').Schema;
 	var config   = app.config.config;

 	var consumer = new Schema({
 		name 	  : String,
 		qtdCoffee : Number,
 		date 	  : Date
 	});

 // 	consumer.statics.findAndModify = function (query, sort, doc, options, callback) {
 //    	return this.collection.findAndModify(query, sort, doc, options, callback);
	// }

 	var db = mongoose.connect(config.mongoUrl).model('consumer', consumer);

 	var consumerModel = {

 		/**
 		* A consumer for to be valid 
 		* it's necessary have a name 
 		* as String and not empty 
 		* it's necessary have qdtCoffee 
 		* as number
 		* it's necessary has date not empty
 		* 
 		* @author Eduardo Hattori
 		* @parans consumer type Consumer
 		* #return type Boolean
 		*/
 		isValid : function(consumer){

 			try {

 				var ret = true;

 				if(!consumer){
 					ret = false;
 				} 
 				if(typeof consumer.name !== 'string' || consumer.name == '' ){
 					ret = false;	
 				}
 				if(typeof consumer.qtdCoffee !== 'number' || consumer.qtdCoffee < 0){
 					ret = false;	 						
 				}
 				if(typeof consumer.date !== 'object'){
 					ret = false;
 				}

 				return ret;

 			} catch(e){
 				return false;
 			}
 		},

 		/**
 		* Insert new object type consumer in 
 		* collection mongo and return the new 
 		* consumer inserted
 		*
 		* @author: Eduardo Hattori
 		* @params: consumer type consumer
 		*          callback type function(err, consumer)
 		*/
		pushConsumer :  function(consumer, callBack){			

			new db(consumer).save(function(err, data){
				callBack(err, data);
			});
		},

		/**
		* get of mongo collection all consumers
		*
		* @author: Eduardo Hattori
 		* @params: callback type function(err, consumers)
 		*
		*/
 		getAllConsumers : function(callBack){
 			db.find(function(err, consumers){
 				callBack(err,consumers);
 			});
 		},

 		/**
		* Update the qtdCoffee of the consumer		
		*
		* @author: Eduardo Hattori
 		* @params: callback type function(err)
 		*
		*/
 		incrementCoffee : function(id, callBack){
 			 db.update({_id : id},{$inc:{qtdCoffee : 1}},[], function(err,data){
 			 	callBack(err);
 			 });
 		}
 	}

	return consumerModel;
 }