//express ashiglaj bn
const express = require("express");
//data base teige clienta holbono
const { Client } = require("pg");
const cors = require('cors');
const app = express();  
const port = 3000;

//swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("swagger-jsdoc");

//json file aa ashiglaltand oruulna
app.use(express.json());
app.use(cors());

const options = {
  swaggerDefinition: {
      openapi: "3.0.0",
      info: {
          title: "Hustle New Generation",
          version: "1.0.0",
          description:
              "I dunno", 
          contact: {
              name: "Tsagaadai",
              url: "Tsagaadaihaan.mn",
              email: "tsak@ihmongol.uls.mn"
          }
      },
      servers: [
          {
              url: "http://localhost:3000/"
          }
      ]
  },
  apis: ["./index.js"]
};

const specs = swaggerDocument(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));


//database iin info-g todorhoilj baina.
client = new Client({
    user:'postgres',
    password:'91209913',
    database:'WebApp-HustleNewGen',
    host:'localhost',
    port:5433
});

client.connect();

//Routes

//Get requestuud

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname});
});
/**
 * @swagger
 * tags:
 *  -
 *   name: "Email"
 *   description: Product related operations
 *      
 *  - 
 *   name: "Player"
 *   description: Company info 
 *
 *  - 
 *   name: "uugii"
 *   description: Order related operations 

 */
/**
 * @swagger
 *  paths:
 *      /products/{productId}/likes:
 *          post:
 *              tags:
 *                  - Product
 *              summary: Upload product likes to NUM
 *              parameters:
*                -
*                   in: path
*                   name: productId
*                   schema:
*                   type: integer
*                   required: true
*                   description: Numeric ID of the product
 *              requestBody:
 *                  description: Like ийн тоог явуулна
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  likes:
 *                                      type: integer
 *                              
 *              responses:
 *                  "201":
 *                      description: POST to NUM API
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: string
 */

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

//Create requestuud

app.post("/createmyemail", async (req, res) => {
  try {
      const { userId, email } = req.body;

      const result = await client.query('SELECT * FROM client WHERE Email = $1', [email]);

      if (result.rows.length > 0) {
          res.status(400).json({ error: 'Email is already registered' });
      } else {
          const sessionId = Math.floor(userId * Math.random() * 100_000);
          await client.query('INSERT INTO client (UserId, SessionId, Email) VALUES ($1, $2, $3)', [userId, sessionId, email]);
          res.cookie("session_id", sessionId);
          res.status(201).json({ message: 'Email inserted successfully' });
      }
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
  }
});



  app.post('/players', async (req, res) => {
    try {
        const { team_id, player_number, playercardimg, player_name, age, position, height, weight } = req.body;

        const result = await client.query(
            'INSERT INTO players(team_id, player_number, playercardimg, player_name, age, position, height, weight) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [team_id, player_number, playercardimg, player_name, age, position, height, weight]
        );

        const createdPlayer = result.rows[0];
        res.status(201).json(createdPlayer);
    } catch (error) {
        console.error('Error creating player:', error);
        res.status(500).send('Internal Server Error');
    }
});

//Update requestuud

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

//Delete requestuud

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


  app.delete('/players/:player_name', async (req, res) => {
    try {
        const player_name = req.params.player_name;

        const result = await client.query('DELETE FROM players WHERE player_name = $1 RETURNING *', [player_name]);

        const deletedPlayer = result.rows[0];

        if (!deletedPlayer) {
            return res.status(404).json({ error: 'Player not found' });
        }

        res.json({ message: 'Player deleted successfully', deletedPlayer });
    } catch (error) {
        console.error('Error deleting player:', error);
        res.status(500).send('Server Error');
    }
});
//portiin medeelliig console deer delgetslene

app.listen(port, () => {
    console.log("Server is listening port: " + port);
});