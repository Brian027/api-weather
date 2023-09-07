// Importation de express
const  express = require('express');

// Appel la fonction express
const  app = express();

// Importation de la base de données
const connectDB = require('./config/database');
const dotenv = require('dotenv').config();


// Attribution du port
const port = 5000;

// Connexion à la base de données
connectDB();

// app.get("/post", (req, res) => {
//     res.json({message: "Voici les données"});
// });

// Middleware pour traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/post", require("./routes/post.routes"))

// Lance le serveur
app.listen(port, () =>  console.log(`Le serveur a démarré au port ${port}`));