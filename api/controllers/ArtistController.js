/**
 * ArtistController
 *
 * @description :: Server-side logic for managing Artists
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	score: function(req, res) {
			
		Klout.klout.getKloutIdentity(req.param('name'), "tw", function(err, k_res){
			if(err) return res.json(err);

			if(k_res && k_res.id){
				
				return res.redirect('/artist/score_response?klout_id=' + k_res.id);

			}
		});
	},

	score_response: function(req, res){
		var klout_id = req.param('klout_id');
		sails.log(klout_id);
		Klout.klout.getUser(klout_id, function(err, k_res){
			return res.json(k_res);
		});
	}
};

