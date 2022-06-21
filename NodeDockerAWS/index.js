// Para que sea una aplicación Express
// https://expressjs.com/
const express = require("express");

const app = express();

// Este es un endpoint, el slash endpoint, o sea la URL sin nada más.
app.get("/", (req, res) => {
    res.send("Esta es mi app express, una masa.");
});

app.get("/me", (req, res) => {
    res.send("Aquí el Superagente 86.");
});

app.listen(5000, () => {
    console.log("Listening puerto 5000 en el container.");
});