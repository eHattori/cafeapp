/**
* Test the funcionalities of the Consumers controller
* @author: Eduardo Hattori
**/

describe('Test the funcionalities of the Consumers controller', function(){

	var app, should, request, env, config;

	this.timeout(6000);

	/**
	* Method that initializes all variables 
	* for unit test using mocha
	* 
	* @author: Eduardo Hattori
	*/
	before(function(done){
		app     = require('../app');
		should  = require('should');
		request = require('supertest')(app);
		config  = app.config.config;
		env     = config.env;

		config.env = 'test';
		done();
	});

	/**
	* the request should return the JSON Object
	* with consumer of coffee	
	* 
	* @author: Eduardo Hattori
	*/
	it('Include a consumer in database', function(done){

		request.post('/api/consumer')
		.send({'name': 'Eduardo'})
		.expect(201)
		.end(function(err, res){
			if(err) return done(err);
			(res.body.record.name == 'Eduardo').should.is.be.true;
			done();
		});

	});

	/**
	* When send a worng request eith invalid object
	* the API valid object and return a message object
	* with status 400 - Bad Request
	*
	* @author: Eduardo Hattori
	*/
	it('Include a wrong consumer in database', function(done){

		request.post('/api/consumer')
		.send({'teste': 'teste'})
		.expect(400)
		.end(function(err, res){
			if(err) return done(err);
			(res.body.developerMessage != undefined).should.is.be.true;
			done();
		});

	});

	/**
	* the request should return the JSON array
	* with all consumer of coffee	
	* 
	* @author: Eduardo Hattori
	*/
	it('Get all consumers from the database', function(done){

		request.get('/api/consumers')
		.expect(200)
		.end(function(err, res){
			if(err)	return done(err);
			(Array.isArray(res.body.records)).should.is.be.true;
			done();
		});
	});

	/**
	* the request update a consumer 
	* and return status 200 with 
	* consumer updated
	* 
	* @author: Eduardo Hattori
	*/
	it('Update the consumer quantity of coffee', function(done){

		try {

			request.post('/api/consumer')
			.send({'name': 'Eduardo'})
			.expect(201)
			.end(function(err, res){
				if(err) return done(err);

				var id = res.body.record._id;

				request.put('/api/consumer/' + id + '/incrementcoffee')
				.expect(200)
				.end(function(err, res){
					if(err) return done(err);
					done();
				});
			});

		} catch(e){
			done(e);
		}

	});

	/**
	* After test execute the operations 
	* for clean test
	*/
	after(function(done){
		config.env = env;
		done();
	});

});

