# React + Express No-Fluff Boilerplate

A boilerplate project for anyone interested in making a project that uses React and Express.

This repository is a bootleg of @NimaBoscarino's [React Rails Boilerplate](https://github.com/NimaBoscarino/react-rails-boilerplate). It uses the same React app, but replaces the Rails server with an Express server.

Note! This boilerplate has _no fluff_! That means that there's nothing set up for you to do authentication stuff, there's no Redux stuff, and there's no React Router stuff. On the Express end, there is no session storage or database connection.

The main important bit is that the React project has `proxy` set to `localhost:8080` in the `package.json` file, and that the Express app listens to port 8080 in `server.js`. Take a look!

You can (and perhaps should) rename the directories `express-back-end` and `react-front-end` if you want-- The name doesn't matter.

## Running the projects

You need **TWO** terminal windows/tabs for this (or some other plan for running two Node processes).

In one terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.

In the other terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn start` to launch the server.

In the browser, you can click on the button and see the data get loaded.

If this doesn't work, please message me!

## Next steps

From here, you can start working on your project!

As soon as the dependencies are installed, your Express server can serve JSON and static assets (like images) in response to API calls from the React app. You can get started on developing your React app, routing plan, etc. right away! Any request that isn't handled by React is passed on to the Express server. That means that you can call a route like `/api/users` from React using `fetch`, `axios`, or something else, and Express will receive it as though they originated from the same app. For routing, best practice is to namespace all of your data routes to `/api`, so that they don't clash with other routing schemes, like React Router.

At some point, you'll likely want to install and configure a database driver for Postgres or MongoDB-- Refer to past projects for hints on how to do this.

And don't forget to update the README!

## Example Projects

You might want to look at examples of projects that have used this boilerplate for hints on how to extend it. Here are a few:

- [Later Cart](https://github.com/bonitac/later-cart)
- [Buddi.io](https://github.com/Danny-Tran/buddi.io)

If you'd like your project added to the list, please shoot me a message.

## Contact

Please contact me on Slack (@garrettgsb) or Nima at `nima@lighthouselabs.com` if you have any questions, requests, or feedback, or post an issue to this repo. If you are using the boilerplate, I'd love to hear from you as well!

### How to set up database

Set up:
first try npm install, if you run into errors relating to these, you may need to additonally install these:

- npm install knex
- npm install pg
- npm install dotenv

1. In express-back-end root, add .env file (use .env.example as template)
2. set:

   username as development
   password as development
   database name as trip_savr

3. on command line, `cd [path to]/express-back-end`
4. type `psql -U development`
5. should ask for password - put `development`
6. in psql, type `CREATE DATABASE trip_savr`
7. on command line, run `npx knex migrate:latest`
8. if successful, will see
   "Using environment: development
   Batch 1 run: 1 migrations"
9. on command line, run `npx knex seed:run`

## How to reset the database (and run latest migration)

For debug see below:

1. run `http://localhost:8080/api/debug/deletealldata` in browser or `curl http://localhost:8080/api/debug/deletealldata` to clear all data from database - you should see a database cleared message
2. run `npx knex migrate:list` to check which migration you are currently running
   (2.1 if you are not running the latest, run `npx knex migrate:latest` to update)
3. run `npx knex seed:run` to populate the database with data

### Debug

To revert database to original:
clear data using 1. , then run `npx knex migrate:rollback`. You can choose specifically which migration to rollback to by doing `knex migrate:down xxxx_migration_name.js` to move up a migration, do `knex migrate:up xxxx_migration_name.js`
