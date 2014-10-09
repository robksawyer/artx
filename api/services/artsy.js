/**
*
* artsy.js
* @description 
* @url https://developers.artsy.net/
**/
var request = require('superagent');

var clientID = sails.config.artsy.clientID,
    clientSecret = sails.config.artsy.clientSecret,
    apiUrl = sails.config.artsy.apiUrl,
    xappToken;

request
  .post(apiUrl)
  .send({ client_id: clientID, client_secret: clientSecret })
  .end(function(res) {
    xappToken = res.body.token; 
  });

 debug(sails.config.artsy.clientID);