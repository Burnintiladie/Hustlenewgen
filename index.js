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
              "IМОНГОЛЫН САГСАН БӨМБӨГИЙН ҮНДЭСНИЙ ДЭЭД ЛИГИЙН АЛБАН ЁСНЫ САЙТ", 
          contact: {
              name: "Admin",
              url: "Hustle.mn",
              email: "admin@hustle.mn"
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
    //tsak,suvda
    //port:5432
    //ja
    port:5433
});

client.connect();

//Routes

/**
 * @swagger
 * tags:
 *  -
 *   name: "Client"
 *   description: Hereglegchiin email hayg
 *      
 *  - 
 *   name: "Player"
 *   description: Toglogchiin medeelel 
 */


//Schema uusgelt
/**
 * @swagger
 * components:
 *   schemas:
 *     Client:
 *       type: object
 *       required:
 *         - client email
 *       properties:
 *         userid:
 *           type: integer
 *           description: Hereglegchiin id
 *         sessionid:
 *           type: integer
 *           description: Cookie id
 *         email:
 *           type: variable character
 *           description: Hereglegchiin email hayg
 *       example:
 *         userid: 23
 *         sessionid: 1618437
 *         email: javhaa@gmail.com
 *     Player:
 *       type: object
 *       required:
 *         - player number
 *         - player name
 *         - player age
 *         - player position
 *         - player height
 *         - player weight
 *       properties:
 *         playerid:
 *           type: integer
 *           description: Toglogchiin id
 *         teamid:
 *           type: integer
 *           description: Bagiin id
 *         playernumber:
 *           type: integer
 *           description: Toglogchiin huviin dugaar
 *         playercardimg:
 *           type: variable character
 *           description: Toglogchiin profile zurag
 *         playername:
 *           type: variable character
 *           description: Toglogchiin ner
 *         age:
 *           type: integer
 *           description: Toglogchiin nas
 *         position:
 *           type: variable character
 *           description: Toglogchiin bairlal
 *         height:
 *           type: integer
 *           description: Toglogchiin undur
 *         weight:
 *           type: integer
 *           description: Toglogchiin jin
 *       example:
 *         playerid: 1
 *         teamid: 1
 *         playernumber: 0
 *         playercardimg: /assets/team_metal/jahlil.png
 *         playername: Jahlil Tripp
 *         age: 29
 *         position: SF
 *         height: 196
 *         weight: 98
 */



//Get requestuud
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




//-------------------------------------------------------------------Get---------------------------------------------------------------- 
/**
 * @swagger
 *  paths:
 *     /userinfo:
 *         get:
 *           summary: Get user info
 *           tags: 
 *              - Client
 *           responses:
 *             200:
 *               description: userinfo json
 *               contens:
 *                  application/json:
 *                    schema:
 *                      $ref: '#/components/schemas/Client'
 *             500:
 *               description: Server error
 */
app.get("/userinfo", async(req, res) => {
    try {
        const userinfo = await client.query('SELECT * FROM client');
        res.status(200).json(userinfo.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});



/**
 * @swagger
 *  paths:
 *     /playerinfo:
 *         get:
 *           summary: Get user info
 *           tags: 
 *              - Player
 *           responses:
 *             200:
 *               description: playerinfo json
 *               contens:
 *                  application/json:
 *                    schema:
 *                      $ref: '#/components/schemas/Client'
 *             500:
 *               description: Server error
 */
app.get("/playerinfo", async(req, res) => {
    try {
        const playerinfo = await client.query('SELECT * FROM players');
        res.status(200).json(playerinfo.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});



//--------------------------------------------------------------Create requestuud--------------------------------------------------------- 

/**
 * @swagger
 * /createmyemail:
 *   post:
 *     summary: Create email
 *     tags:
 *        - Client
 *     parameters:
 *              - 
 *                in: path
 *                name: userid
 *                schema:
 *                  type: integer
 *                required: true
 *                description: Hereglegchiin id
 *              - 
 *                in: path
 *                name: email
 *                schema:
 *                  type: variable character
 *                required: true
 *                description: Hereglegchiin email hayg
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       201:
 *         description: Email inserted succesfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       400:
 *         description: Email is already registered 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       500:
 *         description: Server error
 */
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



/**
 * @swagger
 * /players:
 *   post:
 *     summary: Create player
 *     tags:
 *        - Player
 *     parameters:
 *              - 
 *                in: path
 *                name: teamid
 *                schema:
 *                  type: integer
 *                required: true
 *                description: Bagiin id
 *              - 
 *                in: path
 *                name: playernumber
 *                schema:
 *                  type: integer
 *                required: true
 *                description: Toglogchiin huviin dugaar
 *              - 
 *                in: path
 *                name: playercardimg
 *                schema:
 *                  type: variable character
 *                required: true
 *                description: Toglogchiin profile zurag
 *              - 
 *                in: path
 *                name: playername
 *                schema:
 *                  type: variable character
 *                required: true
 *                description: Toglogchiin ner
 *              - 
 *                in: path
 *                name: age
 *                schema:
 *                  type: integer
 *                required: true
 *                description: Toglogchiin nas
 *              - 
 *                in: path
 *                name: position
 *                schema:
 *                  type: variable character
 *                required: true
 *                description: Toglogchiin bairlal
 *              - 
 *                in: path
 *                name: height
 *                schema:
 *                  type: integer
 *                required: true
 *                description: Toglogchiin undur
 *              - 
 *                in: path
 *                name: weight
 *                schema:
 *                  type: integer
 *                required: true
 *                description: Toglogchiin jin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Player'
 *     responses:
 *       201:
 *         description: Created player
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Player'
 *       500:
 *         description: Server error
 */
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


//--------------------------------------------------------------Update requestuud--------------------------------------------------------- 

/**
 * @swagger
 * /updateemail/{userId}:
 *   post:
 *     summary: Update email
 *     tags:
 *        - Client
 *     parameters:
 *              - 
 *                in: path
 *                name: userid
 *                schema:
 *                  type: integer
 *                required: true
 *                description: Hereglegchiin id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       200:
 *         description: Email updated succesfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       500:
 *         description: Server error
 */
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




//--------------------------------------------------------------Delete requestuud--------------------------------------------------------- 

/**
 * @swagger
 * /deleteuser/{email}:
 *   delete:
 *     summary: Remove the email 
 *     tags:
 *        - Client
 *     parameters:
 *       - in: path
 *         name: email
 *         schema:
 *           type: variable character
 *         required: true
 *         description: Hereglegchiin email
 * 
 *     responses:
 *       200:
 *         description: User deleted succesfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
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



/**
 * @swagger
 * /players/{playername}:
 *   delete:
 *     summary: Remove the player
 *     tags:
 *        - Player
 *     parameters:
 *       - in: path
 *         name: playername
 *         schema:
 *           type: variable character
 *         required: true
 *         description: Toglogchiin ner
 * 
 *     responses:
 *       200:
 *         description: Player deleted succesfully
 *       404:
 *         description: Player not found
 *       500:
 *         description: Server error
 */
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