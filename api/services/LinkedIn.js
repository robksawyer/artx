/**
*
* LinkedIn.js => in api/services
* @description A service that connects to the Linked.net public API. 
* 	This uses features in the following node-linkedin package.
* @url https://www.npmjs.org/package/node-linkedin
* @usage var Linkedin = require('node-linkedin')('YOUR_API_KEY', 'YOUR_API_SECRET', 'YOUR_API_CALLBACK');
**/

module.exports = {
	
	Linkedin: require('node-linkedin'),

	init: function(){

		sails.log.info('----- LinkedIn API Initialized -----');
		
		//Initialize the library with options
		Linkedin(sails.config.linkedin.api_key, sails.config.linkedin.secret_key, '/linkedin/get_token');

		app.get('/oauth/linkedin', function(req, res) {
			// This will ask for permisssions etc and redirect to callback url.
			Linkedin.auth.authorize(res, [
				'r_basicprofile', 'r_fullprofile', 
				'r_emailaddress', 'r_network', 
				'r_contactinfo', 'rw_nus', 
				'rw_groups', 'w_messages'
			]);
		});

		/*app.get('/oauth/linkedin/callback', function(req, res) {
			Linkedin.auth.getAccessToken(res, req.query.code, function(err, results) {
			if ( err ) return console.error(err);

				console.log(results);
				return res.redirect('/');
			});
		});*/

		/*var linkedin = Linkedin.init(sails.config.linkedin.api_key, {
			timeout: 10000 // 10 seconds 
		});*/
		// Now, you're ready to use any endpoint

		/*linkedin.people.id('35912854', function(err, $in) {
    		// Loads the profile by id.
    		sails.log.info($in); 
		});*/

	},

	get_token: function(req, res){
		Linkedin.auth.getAccessToken(res, req.query.code, function(err, results) {
			if (err) return console.error(err);
			console.log(results);
		});
	}

}