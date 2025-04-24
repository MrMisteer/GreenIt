require('dotenv').config();

// Import the moduls
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const session = require('express-session');

// Initiate the app
const app = express();
const port = process.env.PORT || 3000;

//Middleware : Configure CORS
app.use(cors({
  origin: 'http://localhost:8080', // Frontend Vue.js
  credentials: true,
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH']
}));

//Middleware : Configure the session session (needed for Passport)
app.use(session({
  secret: 'SecretRandomString',
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: false, secure: false },
  resave: false
}));

//Middleware : Parsing JSON requests
app.use(express.json());

//Middleware : Configure bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connexion to the database
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '123456789',
  database: process.env.DB_NAME || 'eco_cook',
};
const db = mysql.createConnection(dbConfig);
db.connect((err) => {
  if (err) {
    console.error('Error while connecting the databse:', err.message);
    process.exit(1);
  } else {
    console.log('Connexion to the databse is ok.');
  }
});

const recipeRoutes = require('./controllers/recipeapi.route');


// Define the routers
app.use('/api/recipe', recipeRoutes);

// Start the server
app.listen(port, () => {
  console.log(`The server is on the port : ${port}`);
});
