/**
* klout.js
*
* @description :: This is the brains that allow the app to connect to Klout API.
* @docs        :: http://developer.klout.com/
*
*/
module.exports.klout = {

  api_key: process.env.KLOUT_API_KEY,
  api_secret_key: process.env.KLOUT_API_SECRET_KEY,
  api_endpoint: 'http://api.klout.com/v2/'
  
};