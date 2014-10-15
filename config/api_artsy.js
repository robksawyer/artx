/**
* artsy.js
*
* @description :: This is the brains that allow the app to connect to artsy.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
module.exports.artsy = {

  clientId: process.env.ARTSY_CLIENT_ID,
  clientSecret: process.env.ARTSY_CLIENT_SECRET,
  apiUrl: 'https://api.artsy.net/api',
  apiTokenUrl: process.env.ARTSY_API_URL
  
};