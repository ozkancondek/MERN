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
-npm i antd
-npm i react-stripe-checkout
-npm i react-toastify
-npm i cors (to prevent to conflict beween loccl 3000 and 5000)
-but dont use it in production phase
-we can forward 300 to 500
-go to package json in client side and write proxy
-install frontend packeges

---

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node server.js",
"start-client": "npm start --prefix client" or "cd client && npm start"
},
npm run start-client
