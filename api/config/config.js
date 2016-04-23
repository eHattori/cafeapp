/**
 * All configuration from APP
 *
 * @author Eduardo Hattori 
 * @param  {[type]}   app [description]
 * @return {[type]}       [description]
 */

 module.exports = function(app){

 	var config = {
 		'env' :  process.env.NODE_ENV,
 		'mongoUrl' : (this.env == 'development' ? 'mongodb://localhost:27017/cafeapp' : 'mongodb://localhost:27017/cafeapp_test')
 	};

 	return config;
 };
