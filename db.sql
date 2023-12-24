/*sql, database iin table uud bolon ashiglaj bui querienuudiin huraangui*/


Create table client(
	UserId int,
	SessionId int,
	Email varchar(255)
);

CREATE TABLE teams (
    team_id SERIAL PRIMARY KEY,
    team_name VARCHAR(255) NOT NULL
);

CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    team_id INT REFERENCES teams(team_id),
    player_number INT,
    playercardimg VARCHAR(255),
    player_name VARCHAR(255) NOT NULL,
    age INT,
    position VARCHAR(255),
    height INT,
    weight INT
);


SELECT * FROM client WHERE Email = $1;
INSERT INTO client (UserId, SessionId, Email) VALUES ($1, $2, $3);
SELECT * FROM client WHERE UserId = $1;
UPDATE client SET Email = $1 WHERE UserId = $2;
SELECT * FROM client WHERE Email = $1;
DELETE FROM client WHERE Email = $1;
