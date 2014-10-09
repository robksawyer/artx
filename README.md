# artx

Coming soon...


## Getting started

I'm not going to reinvent the wheel here. In order to get started, a good basic guide is [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

In order to get a better understanding of how Sails config variables are passed around. Check out this [StackOverflow post](https://stackoverflow.com/questions/18267706/create-config-variables-in-sails-js).

Note: In order to get around some Heroku issue. We ended up renaming app.js to .app.js. Heroku doesn't like some of the syntax in the Sails default app.js file.

## Development

For development and task managment, we're using the standard package of [Grunt](http://gruntjs.org) and the Node Package Manager (NPM). In order to install dependencies you must run `npm install` in the app directoy. If you don't have npm, that means you don't have node installed. Check out [Homebrew](http://brew.sh) – it'll help you get the programs you need quickly.

In order to not have to keep launching the app, we're using a handy CLI tool known as [Forever](https://github.com/nodejitsu/forever). There's a good post named [Sails.js, sick of restarting your server ?](https://coderwall.com/p/njcr7w) that'll get you up and running.

Once you get it all installed, run the following:

`forever -w start .app.js # -w to watch for file changes!`

To stop it, run:

`forever stop .app.js`

## Frontend Stack

The presentation layer is currently built on [AngularJS](http://www.angularjs.org). You can read more about how we set this up via the [StackOverflow post](https://stackoverflow.com/questions/21938850/angularjs-sailsjs). We're mimicking something similar to <https://github.com/angular/angular-seed>.

## Backend Stack

### Framework
ArtX is built off of the [NodeJS](http//www.nodejs.org) framework known as [Sails](http://sailsjs.org). For API calls and such, we're using [Superagent](http://visionmedia.github.io/superagent/).

### Database
The current database is [PostgreSQL](http://postgresql.org). You can find out more about how to set up Postgres on Heroku at <https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-the-add-on>. 

We are also using `sails-postgresql: "^0.10.9"` as the database adapter. You can learn more about Sails database adapters at ???

### Logging 

We are currently using [Papertrail]() for all of our logging purposes.

## The App
The current app is running at <http://artx.herokuapp.com>.


## Staging 

The current staging site is located at <http://artx-stage.herokuapp.com>.


## Deployment 

There are a couple of things to note about deployment. First, check the `package.json` file to ensure that the scripts section is set to your liking. In order to start the production version of Sails, you'd want something like the following.

```
...
"scripts": {
    "start": "sails lift --prod",
    "debug": "node debug app.js"
 },
 ...
 ```

`git push heroku master`