class PlayerCard {
    //baiguulagch function
    constructor(playerimg, playerNumber, playerName, age, position, height, weight) {
        this.playerImage = playerimg;
        this.playerNumber = playerNumber;
        this.playerName = playerName;
        this.age = age;
        this.position = position;
        this.height = height;
        this.weight = weight;
    }


    //uusgeh html ee render hiij ogch bn
    createHTML() {
        return `
        <article class="Player_card">
          <div class="playercardimg"><img src="${this.playerImage}" alt="playerImg"></div>
          <div class="player_number">${this.playerNumber}</div>
          <div class="player-card_info_container">
            <div class="player-card_info_table">
              <h4>${this.playerName}</h4>
              <div></div>
              <p>Age: ${this.age}</p>
              <p>Position: ${this.position}</p>
              <p>Height: ${this.height}</p>
              <p>Weight: ${this.weight}</p>
            </div>
          </div>
        </article>
      `;
    }

    //html ee reduce hiij ogch bn
    static reduceHTML(html1, html2) {
        return html1 + html2;
    }


    //playeriin data g todorhoilj json file aas unshih daraalliig todorhoilno
    static mapPlayerData(playerData) {
        return new PlayerCard(
            playerData.playercardimg,
            playerData.player_name,
            playerData.age,
            playerData.position,
            playerData.height,
            playerData.weight
        ).createHTML();
    }

    //json file iig unshij parametereer haij boloh bolomjtoi bolgoh function
    async Init() {
        try {
            const response = await fetch('http://localhost:3000/playerinfo');
            const players = await response.json();

            console.log(players);

            const urlParams = new URLSearchParams(window.location.search);
            const positionFilter = urlParams.get('position');

            const targetElement = document.querySelector('.slider');

            const playerHTMLs = players
                .filter(playerData => !positionFilter || positionFilter.toLowerCase() === playerData.position.toLowerCase())
                .map(PlayerCard.mapPlayerData);

            const finalHTML = playerHTMLs.reduce(PlayerCard.reduceHTML, '');
            targetElement.insertAdjacentHTML('beforeend', finalHTML);

            // const response = await fetch(
            //     'https://api.jsonbin.io/v3/b/6567655054105e766fd74656',
            //     {
            //         method: 'GET',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'X-Master-Key': '$2a$10$CmcNutPQebbacvYxu62Dcu6qi7nQH7o9RCEJREhO6pJnH4ul1il9C',
            //         }
            //     }
            // );
            // const data = await response.json();

            // console.log(data); 

            // const urlParams = new URLSearchParams(window.location.search);
            // const positionFilter = urlParams.get('position');

            // const targetElement = document.querySelector('.slider');
            // const players = data.record.teams[0].Players;

            // const playerHTMLs = players
            //     .filter(playerData => !positionFilter || positionFilter === playerData.position)
            //     .map(PlayerCard.mapPlayerData);

            // const finalHTML = playerHTMLs.reduce(PlayerCard.reduceHTML, '');
            // targetElement.insertAdjacentHTML('beforeend', finalHTML);
        } catch (error) {
            console.error('Error on fetch:', error);
        }
    }
}





// const playerdata = {
//     "teams": [
//         {
//             "Team name": "Hasiin huleguud",
//             "Players": [
//                 {
//                     "playercardimg": "assets/team_metal/jahlil.png",
//                     "player_number": 1,
//                     "Тоглогчийн нэр": null,
//                     "age": null,
//                     "position": "pg",
//                     "height": null,
//                     "weight": null,
//                 },
//                 {
//                     "playercardimg": null,
//                     "player_number": 2,
//                     "Тоглогчийн нэр": null,
//                     "age": null,
//                     "position": "pf",
//                     "height": null,
//                     "weight": null,
//                 },
//                 {
//                     "playercardimg": null,
//                     "player_number": 3,
//                     "Тоглогчийн нэр": null,
//                     "age": null,
//                     "position": "sf",
//                     "height": null,
//                     "weight": null,
//                 },
//                 {
//                     "playercardimg": null,
//                     "player_number": 4,
//                     "Тоглогчийн нэр": null,
//                     "age": null,
//                     "position": "sg",
//                     "height": null,
//                     "weight": null,
//                 },
//                 {
//                     "playercardimg": null,
//                     "player_number": 5,
//                     "Тоглогчийн нэр": null,
//                     "age": null,
//                     "position": "c",
//                     "height": null,
//                     "weight": null,
//                 },
//                 {
//                     "playercardimg": null,
//                     "player_number": 6,
//                     "Тоглогчийн нэр": null,
//                     "age": null,
//                     "position": "sg",
//                     "height": null,
//                     "weight": null,
//                 },
//                 {
//                     "playercardimg": null,
//                     "player_number": 7,
//                     "Тоглогчийн нэр": null,
//                     "age": null,
//                     "position": "sf",
//                     "height": null,
//                     "weight": null,
//                 },
//                 {
//                     "playercardimg": null,
//                     "player_number": 8,
//                     "Тоглогчийн нэр": null,
//                     "age": null,
//                     "position": "pg",
//                     "height": null,
//                     "weight": null,
//                 },
//                 {
//                     "playercardimg": null,
//                     "player_number": 9,
//                     "Тоглогчийн нэр": null,
//                     "age": null,
//                     "position": "pf",
//                     "height": null,
//                     "weight": null,
//                 },
//                 {
//                     "playercardimg": null,
//                     "player_number": 10,
//                     "Тоглогчийн нэр": null,
//                     "age": null,
//                     "position": "c",
//                     "height": null,
//                     "weight": null,
//                 },
//                 {
//                     "playercardimg": null,
//                     "player_number": 11,
//                     "Тоглогчийн нэр": null,
//                     "age": null,
//                     "position": "sf",
//                     "height": null,
//                     "weight": null,
//                 },
//                 {
//                     "playercardimg": null,
//                     "player_number": 12,
//                     "Тоглогчийн нэр": null,
//                     "age": null,
//                     "position": "sg",
//                     "height": null,
//                     "weight": null,
//                 },

//             ]
//         }
//     ]

// };

// const targetElement = document.querySelector('.slider');

// playerdata.teams[0].Players.forEach(playerData => {
//     const playerCard = new PlayerCard(
//         playerData.player_number,
//         playerData["Тоглогчийн нэр"],
//         playerData.age,
//         playerData.position,
//         playerData.height,
//         playerData.weight
//     );

//     const articleHTML = playerCard.createHTML();
//     targetElement.insertAdjacentHTML('beforeend', articleHTML);
// });
//     }
// }
