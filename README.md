# Trickle-Trip

Trickle-Trip is a group savings app that lets users save money for their desired trip along with their friends. This app has a search function that utilizes the [G-Adventures API](https://developers.gadventures.com/) that has over 1,300 trips that users can book that include information such as itinerary, meals, accommodation, and many more. Users can also double their drip (daily withdrawal from their chequing account) once per day that has a very small chance of winning prizes through the app's "Surprise Mechanic".

## Developed by:

- Philip Hansen&nbsp;&nbsp;[![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/philip-hansen/)
&nbsp;
[![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/P-Hansen)
- Ted Pampilon&nbsp;&nbsp;[![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/ted-pampilon/)
&nbsp;
[![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/tpampilon)
- Dennis Wong&nbsp;&nbsp;[![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/denniswong0106)


## Tech Stacks
- Node.js
- Express
- React
- React-Router-Dom
- CSS and SASS
- PostgreSQL
- Knex
- Axios
- Cypress (for testing)

## Screenshots

![home-page.png](https://github.com/denniswong0106/trip-saving-app/blob/master/react-front-end/src/pics/screenshots/home-page.png?raw=true)
![book-trip.png](https://github.com/denniswong0106/trip-saving-app/blob/master/react-front-end/src/pics/screenshots/book-trip.png?raw=true)
![user-page.png](https://github.com/denniswong0106/trip-saving-app/blob/master/react-front-end/src/pics/screenshots/user-page.png?raw=true)
![surprise-mechanic.png](https://github.com/denniswong0106/trip-saving-app/blob/master/react-front-end/src/pics/screenshots/surprise-mechanic.png?raw=true)
![groups-page.png](https://github.com/denniswong0106/trip-saving-app/blob/master/react-front-end/src/pics/screenshots/groups-page.png?raw=true)

## Running the projects

You need **TWO** terminal windows/tabs for this (or some other plan for running two Node processes).

In one terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.

In the other terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn start` to launch the server.

### How to set up database

Set up:
first try npm install, if you run into errors relating to these, you may need to additonally install these:

- npm install knex
- npm install pg
- npm install dotenv

1. In express-back-end root, add .env file (use .env.example as template)
2. set:

   - username as development
   - password as development
   - database name as trip_savr

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
2. In cd /express-backend, run `npx knex migrate:list` to check which migration you are currently running
   (2.1 if you are not running the latest, run `npx knex migrate:latest` to update)
3. run `npx knex seed:run` to populate the database with data

### Debug

To revert database to original:

1. clear data using step 1. in "How to reset the database" 
2. run `npx knex migrate:rollback` to rollback to the original database.
3. You can choose specifically which migration to rollback to by doing `knex migrate:down xxxx_migration_name.js` to move up a migration, do `knex migrate:up xxxx_migration_name.js`
