const express = require("express");
const { Client } = require("pg");
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

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

app.get("/userinfo", async(req, res) => {
    try {
        const userinfo = await client.query('SELECT * FROM client');
        res.status(200).json(userinfo.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

app.get("/playerinfo", async(req, res) => {
    try {
        const playerinfo = await client.query('SELECT * FROM players');
        res.status(200).json(playerinfo.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

//Create

app.post("/createmyemail", async (req, res) => {
    try {
        const { userId, email } = req.body;

      const result = await client.query('SELECT * FROM client WHERE Email = $1', [email]);
  
      if (result.rows.length > 0) {
        res.status(400).json({ error: 'Email is already registered' });
      } else {
        const sessionId = Math.floor(userId * Math.random() * 100_000);
        await client.query('INSERT INTO client (UserId, SessionId, Email) VALUES ($1, $2, $3)', [userId, sessionId, email]);
        res.status(201).json({ message: 'Email inserted successfully' });
        res.cookie("session_id", sessionId);
      }

      res.status(200).json({ message: 'Request processed successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  });
  

//Update

app.post('/updateemail/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const { email } = req.body;
    
      const userResult = await client.query('SELECT * FROM client WHERE UserId = $1', [userId]);
  
      if (userResult.rows.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        await client.query('UPDATE client SET Email = $1 WHERE UserId = $2', [email, userId]);
        res.status(200).json({ message: 'Email updated successfully' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

//Delete

app.delete('/deleteuser/:email', async (req, res) => {
    try {
      const email = req.params.email;

      const userResult = await client.query('SELECT * FROM client WHERE Email = $1', [email]);
  
      if (userResult.rows.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        await client.query('DELETE FROM client WHERE Email = $1', [email]);
        res.status(200).json({ message: 'User deleted successfully' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

//

app.listen(port, () => {
    console.log("Server is listening port: " + port);
});