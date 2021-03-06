/**
* linkedin.js
*
* @description :: This is the brains that allow the app to connect to linkedin.
* @docs        :: https://developer.linkedin.com/documents/
* 
* API_KEY (required) - Your API key. (Get a key [https://www.linkedin.com/secure/developer])
* SECRET_KEY (required)
* OAUTH_USER_TOKEN
* OAUTH_USER_SECRET
* ONLOAD (optional, comma-separated) - The names of JavaScript functions which should be 
*	invoked once the framework has finished loading.
* AUTHORIZE (optional, boolean, default=false) - If false, then the framework will not 
*	automatically check to see if API access is available for the current user. If true, then 
*	the framework will check (based on the user's cookie) and if API access is available, then 
*	an oauth token will be retrieved automatically. In other words, if you set authorize: true, 
*	then the framework will attempt to auto-login the user.
* LANG (optional, default=en_US) - You can localize a JavaScript plugin in one of the languages 
*	that we support. Currently, this functionality has been implemented only for the Sign-in 
*	plugin and you can find the details at http://developer.linkedin.com/sign-linkedin-new.
*
*/
module.exports.linkedin = {

  api_key: process.env.LINKEDIN_API_KEY,
  secret_key: process.env.LINKEDIN_API_SECRET_KEY,
  callback: '',
  oauth_user_token: process.env.LINKEDIN_OAUTH_TOKEN,
  oauth_user_secret: process.env.LINKEDIN_OAUTH_SECRET,
  //onLoad: '',
  authorize: false,
  lang: 'en_US',
  api_url: 'http://platform.linkedin.com/in.js'
  
};