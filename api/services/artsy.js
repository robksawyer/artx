/**
*
* Artsy.js => in api/services
* @description A service that connects to the Artsy.net public API.
* @url https://developers.artsy.net/
**/
var request = require('superagent'),
 	traverson = require('traverson'),
 	xappToken;

module.exports = {
	
	init: function(){

		sails.log.info('----- Artsy API Initialized -----');

		var clientID = sails.config.artsy.clientId,
		    clientSecret = sails.config.artsy.clientSecret,
		    apiTokenUrl = sails.config.artsy.apiTokenUrl;

		try{ 

			request
				.post(apiTokenUrl)
				.send({ client_id: clientID, client_secret: clientSecret })
				.end(function(res) {
					if (res) {
						xappToken = res.body.token; 
					} else {
						sails.log.error('api/services/Artsy.js:');
						sails.log.error(res.text);
					}
				});

		} catch(e) {

			sails.log.error('api/services/Artsy.js:');
			sails.log.error(e);

		}
	},

	getArtistDetails: function(){
		
		var api = traverson.jsonHal.from(sails.config.artsy.apiUrl);

		sails.log(xappToken);

		var request = api.newRequest()
			.follow('artist')
			.withRequestOptions({
				headers: {
					'X-Xapp-Token': xappToken,
					'Accept': 'application/vnd.artsy-v2+json'
				}
			})
			.withTemplateParameters({ id: 'andy-warhol' });

		var request = api.newRequest()
			.follow('artist')
			.withRequestOptions({
				headers: {
					'X-Xapp-Token': xappToken,
					'Accept': 'application/vnd.artsy-v2+json'
				}
			})
			.withTemplateParameters({ id: 'andy-warhol' })
			.getResource(function(error, andyWarhol) {
				console.log(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
			});
	}

};