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

INSERT INTO players (player_number, playercardimg, player_name, age, position, height, weight)
VALUES
    (0, '/assets/team_metal/jahlil.png', 'Jahlil Tripp', 0, 'SF', 196, 98),
    (1, '/assets/team_metal/tojildorj.png', 'Энхбат Тожилдорж', 22, 'PG', 188, 75),
    (2, '/assets/team_metal/sainbayar.png', 'Отгонбаяр Сайнбаяр', 28, 'n/a', 185, 80),
    (3, '/assets/team_metal/enhbaysgalan.png', 'Амарбаясгалан Энхбаясгалан', 26, 'SF', 193, 90),
    (4, '/assets/team_metal/uuganbayar.png', 'Түмэнбаяр Ууганбаяр', 25, 'PG', 180, 70),
    (6, '/assets/team_metal/suhbat.png', 'Батзориг Сүхбат', 23, 'SF', 192, 85),
    (8, '/assets/team_metal/dulguun.png', 'Энхцогт Дөлгөөн', null, 'PG, SG', null, null),
    (9, '/assets/team_metal/idersaihan.png', 'Мөнхбат Идэрсайхан', 22, 'SG', 182, 75),
    (11, '/assets/team_metal/adiyasuren.png', 'Даваасүрэн Адъяасүрэн', 25, 'n/a', 191, 90),
    (12, '/assets/team_metal/enhtur.png', 'Зоригтбаатар Энхтөр', 28, 'SG', 180, 66),
    (18, '/assets/team_metal/munhchudur.png', 'Насанбат Мөнхчөдөр', 23, 'PF', 188, null),
    (20, '/assets/team_metal/delgernyam.png', 'Даваасамбуу Дэлгэрням', 33, 'C', 193, 106);


SELECT * FROM client WHERE Email = $1;
INSERT INTO client (UserId, SessionId, Email) VALUES ($1, $2, $3);
SELECT * FROM client WHERE UserId = $1;
UPDATE client SET Email = $1 WHERE UserId = $2;
SELECT * FROM client WHERE Email = $1;
DELETE FROM client WHERE Email = $1;
