const express = require("express");
const { Client } = require("pg");
const app = express();


app.use(express.json());

client = new Client({
    user:'postgres',
    password:'91209913',
    database:'WebApp-HustleNewGen',
    host:'localhost',
    port:5432
});

client.connect();

//Routes


//Get

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname});
});

app.get("/player", async(req, res) =>{
    res.sendFile("Player.html", {root:__dirname})
});

app.get("/games", async(req, res) =>{
    res.sendFile("games.html", {root:__dirname})
});

app.get("/team", async(req, res) =>{
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

app.post("/createmyemail", async(req, res) => {
try {
    const{id, name, email} = req.params;
    
    res.status(200);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" })
}
});

//Delete


app.listen(3000, () => {
    console.log("Server is listening port 3000");
});