class League {
    constructor(league) {
        this.teamname = league.teamname;
        this.logo = league.logo;
        this.rosters = league.rosters;
    }

    Render() {
        return `
            <li class="drop">
                <a><img src="${this.logo}" alt="${this.teamname}"></a>
                <div class="drop-player">
                    ${this.RenderRosters()}
                </div>
            </li>`;
    }

    RenderRosters() {
        let rostersHTML = "";
        for (const roster of this.rosters) {
            rostersHTML += `
                <section class="column">
                    <h3>${roster.position}</h3>
                        ${this.RenderPlayers(roster.players)}
                </section>`;
        }
        return rostersHTML;
    }

    RenderPlayers(players) 
    {
        return players.map(player => `
            <a>
                <span>${player.number}</span>
                ${player.playername}
            </a>`).join('');
    }
}


class App
{
    constructor(targetid)
    {
        this.target = targetid;
    }
    init()
    {
        const teams = [
            {
                teamname: "Erdenet Miners",
                logo: "assets/miners.png",
                rosters: [
                    {
                        position: "Point Guard",
                        players: [
                            {
                                number: 4,
                                playername: "Ганцолмон Ган-Эрдэнэ"
                            },
                            {
                                number: 17,
                                playername: "Ганболд Баттөр"
                            },
                            {
                                number: 44,
                                playername: "Ганцолмон Болор-Эрдэнэ"
                            },
    
                        ]
                    },
                    {
                        position: "Shooting Guard",
                        players: [
                            {
                                number: 1,
                                playername: "Ариунболд Тэмүүжин"
                            },
                            {
                                number: 12,
                                playername: "Энхбаатар Мөнхбаяр"
                            },
                            {
                                number: 27,
                                playername: "Энхбат Дорж-Арилд"
                            },
                        ]
                    },
                ]
            },
            {
                teamname: "BCH Garid",
                logo: "assets/garid.png",
                rosters: [
                    {
                        position: "Point Guard",
                        players: [
                            {
                                number: 22,
                                playername: "Мөнхжаргал Тэлмэн"
                            },
                            {
                                number: 25,
                                playername: "Аззаяа Батхуяг"
                            },
                            {
                                number: 25,
                                playername: "Батмөнх Төгөлдөр"
                            },
    
                        ]
                    },
                    {
                        position: "Shooting Guard",
                        players: [
                            {
                                number: 99,
                                playername: "Devoe Joseph"
                            },
                            {
                                number: 17,
                                playername: "Хүрэлтогоо Мөнхтөр"
                            },
                            {
                                number: "00",
                                playername: "Бат-Эрдэнэ Болдбаатар"
                            },
                        ]
                    },
                ]
            },
        ]

        const targetElement = document.getElementById(this.target);
        for (const team of teams) {
            const league = new League(team);
            targetElement.innerHTML += league.Render();

    }
}
}