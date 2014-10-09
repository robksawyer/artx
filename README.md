# artx

Coming soon...


## Getting started

I'm not going to reinvent the wheel here. In order to get started, a good basic guide is [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

In order to get a better understanding of how Sails config variables are passed around. Check out this [StackOverflow post](https://stackoverflow.com/questions/18267706/create-config-variables-in-sails-js).

Note: In order to get around some Heroku issue. We ended up renaming app.js to .app.js. Heroku doesn't like some of the syntax in the Sails default app.js file.


## On-boarding - This is a work in progress

New to all of this? Maybe the following will help. This is basically how the app was spawned/born.

Dependencies: [Homebrew](http://brew.sh), [SailsJS](http://sailsjs.org), Git, [Heroku Toolbelt](https://toolbelt.heroku.com/)

1. Generate a new app `sails new my-app` and `cd my-app` into the folder generated.
1. Follow the post [Sails.js, sick of restarting your server?](https://coderwall.com/p/njcr7w) to keep Sails running so that you don't have to keep lifting the sails.
1. Update your package.json with packages that you need.
```
"pg": "3.x",
"sails-postgresql": "^0.10.9",
"forever": "^0.11.1",
```
1. Run `git init` and add code to an existing [Github](http://github.com) project that you previously created using `git remote add origin https://github.com/myusername/myproject.git`
1. Set up Heroku wit hthe command `heroku apps:create my-app-name` and possibly a staging app `heroku apps:create example-staging --remote staging`
1. Check to ensure Git remote was added with `git remote -v`
1. Add the initial code with `git add .`
1. Commit the initial code with `git commit -am "My intial code"`.
1. Push the code to the repo.


## Development

For development and task managment, we're using the standard package of [Grunt](http://gruntjs.org) and the Node Package Manager (NPM). In order to install dependencies you must run `npm install` in the app directoy. If you don't have npm, that means you don't have node installed. Check out [Homebrew](http://brew.sh) – it'll help you get the programs you need quickly.

In order to not have to keep launching the app, we're using a handy CLI tool known as [Forever](https://github.com/nodejitsu/forever). There's a good post named [Sails.js, sick of restarting your server ?](https://coderwall.com/p/njcr7w) that'll get you up and running.

Once you get it all installed, run the following:

`forever -w start .app.js # -w to watch for file changes!`

To stop it, run:

`forever stop .app.js`


### API Connections/Connecting

In order to gather a variety of data, ArtX connects to various APIs. And in doing so, there is some specifc code needed in order to make the connections. Some of these are listed below.

General
-------

Coming soon...

### [Artsy.net](http://www.artsy.net) Public API

- [Traverson](https://github.com/basti1302/traverson) - Traverson comes in handy when consuming REST APIs that follow the HATEOAS principle, that is, REST APIs that have links between their resources. 

- [SuperAgent](http://visionmedia.github.io/superagent/) - Super Agent is light-weight progressive ajax API crafted for flexibility, readability, and a low learning curve after being frustrated with many of the existing request APIs.

### User Authentication

@TODO: Set up user authentication using [Passport](http://passportjs.org/) and use the [Sails Social Auth Examples](https://github.com/stefanbuck/sails-social-auth-example) as a guide for the implementation.

### File Uploads

@TODO: It's not currently implemneted, but if file uploads are needed, the plan would be to implement [Skipper](https://github.com/balderdashy/skipper).

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
