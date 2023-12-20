const express = require("express");
const { Client } = require("pg");
const app = express();


app.use(express.json);

client = new Client({
    user:'postgres',
    password:'postgres',
    database:'WebApp-HustleNewGen',
    host:'localhost',
    port:5432
});


//Routes


//Get

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname});
});

app.get("/player", async(res, req) =>{
    res.sendFile("Player.html", {root:__dirname})
});

app.get("/games", async(res, req) =>{
    res.sendFile("games.html", {root:__dirname})
});

app.get("/team", async(res, req) =>{
    res.sendFile("Teamlookup.html", {root:__dirname})
});

app.get("/league", async(req, res) => {
    res.sendFile("League.html", {root: __dirname})
});

app.get("/gamedetail", async(req, res) => {
    res.sendFile("Gamedetail.html", {root: __dirname})
});

//Create

//Update

//Post

app.post("", async(req, res) => {

});

//Delete


app.listen(3000, () => {
    console.log("Server is listening port 3000");
});