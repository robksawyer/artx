/**
*
* Klout.js => in api/services
* @description A service that connects to the Klout public API.
* @url https://klout.com/s/developers/v2
**/

module.exports = {

	klout: {},

	user: {},

	apiKey: sails.config.klout.api_key,
	
	apiSecretKey: sails.config.klout.api_secret_key,

	apiEndpoint: sails.config.klout.api_endpoint,

	init: function(){

		sails.log.info('----- Klout API Initialized -----');

		try{ 

			var Klout = require('node_klout');
			this.klout = new Klout(this.apiKey);

		} catch(e) {

			sails.log.error('api/services/Klout.js:');
			sails.log.error(e);

		}
	}

};