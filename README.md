# MERN

Project : Bookstore Project

Epics(stories)
-Landing page

-User authentication(Register, login)

-Dashboard/Profile page

-Book list

-Book details

-Checkout system

Tech Stack
-BE node.js server(Restful Api)
-DB MongoDB
-View(Client) React
-Payment(Stripe)
-Production-Heroku deploy

instructions
-npm init -y (project start for server)
-npm i express
-npm i nodemon --save-dev
-npm i mongoose(to connect mongodb)
-npm i dotenv(.env file configuration)
-npm i bcryptjs(password cryption)
-npm i express-validator(validate fields)
-npm i jsonwebtoken(authentication)
-npm i concurrently --save-dev (start both backend and frontend)

---

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node server.js",
"start-client": "npm start --prefix client" or "cd client && npm start"
},
npm run start-client
