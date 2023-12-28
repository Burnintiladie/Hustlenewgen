const api = "https://api.jsonbin.io/v3/b/6579c9b81f5677401f0d4eb5";

class PlayerStats
{
    constructor(playerstats)
    {
        this.teamname = playerstats.teamname;
        this.logo = playerstats.logo;
        this.players = playerstats.players;
        this.benchplayers = playerstats.benchplayers;
    }

    Render()
    {
        return `
        <div class="scoreboard">
           <div class="head"><img src="${this.logo}" alt="${this.teamname}">${this.teamname}</div>
                <div class="mur a2">
                    <div class="first">Player</div>
                    <div>MIN</div>
                    <div>PTS</div>
                    <div>OFF</div>
                    <div>DEF</div>
                    <div>REB</div>
                    <div>AST</div>
                    <div>STL</div>
                    <div>BLK</div>
                    <div>FGM</div>
                    <div>FGA</div>
                    <div>FG%</div>
                    <div>3PM</div>
                    <div>3PA</div>
                    <div>3P%</div>
                    <div>FTM</div>
                    <div>FTA</div>
                    <div>FT%</div>
                    <div>TO</div>
                    <div>PF</div>
                    <div>+/-</div>
                </div>
                ${this.RenderPlayers()}
                ${this.RenderBench()}

                <div class="mur a5">
                 <div class="first">Totals</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                 <div>-</div>
                </div>
        </div>`;
    }

    RenderPlayers()
    {
        let playersHTML = "";
        for(const player of this.players)
        {
            playersHTML +=`
            <div class="mur a3">
                    <div class="first">${player.playername}</div>
                    <div class="ontsloh">${player.minutes}</div>
                    <div class="ontsloh">${player.points}</div>
                    <div>${player.offensive_rebound}</div>
                    <div>${player.defensive_rebound}</div>
                    <div class="ontsloh">${player.rebound}</div>
                    <div class="ontsloh">${player.assist}</div>
                    <div class="ontsloh">${player.steal}</div>
                    <div class="ontsloh">${player.block}</div>
                    <div>${player.field_goals_made}</div>
                    <div>${player.field_goals_attempted}</div>
                    <div>${player.field_golas_percentage}</div>
                    <div>${player.three_point_made}</div>
                    <div>${player.three_point_attempted}</div>
                    <div>${player.three_point_percentage}</div>
                    <div>${player.free_throws_made}</div>
                    <div>${player.free_throws_attempted}</div>
                    <div>${player.free_throws_percentage}</div>
                    <div>${player.turnover}</div>
                    <div>${player.personal_foul}</div>
                    <div class="eff">${player.plus_minus}</div>
            </div>
            `;
        }
        return playersHTML;
    }

    RenderBench()
    {
        let benchHTML = "";
        for(const benchplayer of this.benchplayers)
        {
            benchHTML +=`
            <div class="mur a4">
                    <div class="first">${benchplayer.playername}</div>
                    <div class="ontsloh">${benchplayer.minutes}</div>
                    <div class="ontsloh">${benchplayer.points}</div>
                    <div>${benchplayer.offensive_rebound}</div>
                    <div>${benchplayer.defensive_rebound}</div>
                    <div class="ontsloh">${benchplayer.rebound}</div>
                    <div class="ontsloh">${benchplayer.assist}</div>
                    <div class="ontsloh">${benchplayer.steal}</div>
                    <div class="ontsloh">${benchplayer.block}</div>
                    <div>${benchplayer.field_goals_made}</div>
                    <div>${benchplayer.field_goals_attempted}</div>
                    <div>${benchplayer.field_golas_percentage}</div>
                    <div>${benchplayer.three_point_made}</div>
                    <div>${benchplayer.three_point_attempted}</div>
                    <div>${benchplayer.three_point_percentage}</div>
                    <div>${benchplayer.free_throws_made}</div>
                    <div>${benchplayer.free_throws_attempted}</div>
                    <div>${benchplayer.free_throws_percentage}</div>
                    <div>${benchplayer.turnover}</div>
                    <div>${benchplayer.personal_foul}</div>
                    <div class="eff">${benchplayer.plus_minus}</div>
            </div>
            `;
        }
        return benchHTML;
    }
}

class Appp
{
    constructor(targetid)
    {
        this.target = targetid;
    }

    // init()
    // {
    //     const targetElement = document.getElementById(this.target);
    //     for(const tteam of tteams)
    //     {
    //         const stats = new PlayerStats(tteam);
    //         targetElement.innerHTML += stats.Render();
    //     }
    // }

    init()
    {
        fetch(api).then(response => response.json()).then(data => {
            let game = data.record;
            let select = document.getElementById(this.target);

            for(let i=0; i<game.length; i++)
            {
                const playerstats = new PlayerStats(game[i]);
                select.insertAdjacentHTML('beforeend', playerstats.Render());
            }
        })
    }
}

// const tteams = [
//             {
//                 teamname: "IHC Apes",
//                 logo: "assets/ihc.png",
//                 players: [
//                     {
//                         playername: "Мягмарсүрэн Өлзий-Орших",
//                         minutes: "28:21",
//                         points: 22,
//                         offensive_rebound: 0,
//                         defensive_rebound: 3,
//                         rebound: 3,
//                         assist: 6,
//                         steal: 1,
//                         block: 0,
//                         field_goals_made: 6,
//                         field_goals_attempted: 13,
//                         field_golas_percentage: 46.2,
//                         three_point_made: 2,
//                         three_point_attempted: 8,
//                         three_point_percentage: 25.0,
//                         free_throws_made: 8,
//                         free_throws_attempted: 10,
//                         free_throws_percentage: "80.0",
//                         turnover: 2,
//                         personal_foul: 4,
//                         plus_minus: 10,
//                     },
//                     {
//                         playername: "Батаа Тулуй",
//                         minutes: "31:50",
//                         points: 15,
//                         offensive_rebound: 2,
//                         defensive_rebound: 0,
//                         rebound: 2,
//                         assist: 0,
//                         steal: 1,
//                         block: 1,
//                         field_goals_made: 7,
//                         field_goals_attempted: 10,
//                         field_golas_percentage: "70.0",
//                         three_point_made: 0,
//                         three_point_attempted: 2,
//                         three_point_percentage: 0.0,
//                         free_throws_made: 1,
//                         free_throws_attempted: 3,
//                         free_throws_percentage: 33.3,
//                         turnover: 3,
//                         personal_foul: 4,
//                         plus_minus: 4,
//                     },
//                     {
//                         playername: "Нарангэрэл Батбаяр",
//                         minutes: "20:35",
//                         points: 12,
//                         offensive_rebound: 0,
//                         defensive_rebound: 2,
//                         rebound: 2,
//                         assist: 0,
//                         steal: 0,
//                         block: 1,
//                         field_goals_made: 5,
//                         field_goals_attempted: 10,
//                         field_golas_percentage: "50.0",
//                         three_point_made: 2,
//                         three_point_attempted: 5,
//                         three_point_percentage: 40.0,
//                         free_throws_made: 0,
//                         free_throws_attempted: 0,
//                         free_throws_percentage: "0.0",
//                         turnover: 2,
//                         personal_foul: 1,
//                         plus_minus: 13,
//                     },
//                     {
//                         playername: "Сүхбаатар Эрдэнэдалай",
//                         minutes: "20:55",
//                         points: 2,
//                         offensive_rebound: 2,
//                         defensive_rebound: 1,
//                         rebound: 3,
//                         assist: 1,
//                         steal: 2,
//                         block: 0,
//                         field_goals_made: 1,
//                         field_goals_attempted: 5,
//                         field_golas_percentage: "20.0",
//                         three_point_made: 0,
//                         three_point_attempted: 2,
//                         three_point_percentage: 0.0,
//                         free_throws_made: 0,
//                         free_throws_attempted: 0,
//                         free_throws_percentage: "0.0",
//                         turnover: 1,
//                         personal_foul: 4,
//                         plus_minus: 4,
//                     },
//                     {
//                         playername: "Нямдорж Ганбаатар",
//                         minutes: "28:06",
//                         points: 15,
//                         offensive_rebound: 3,
//                         defensive_rebound: 7,
//                         rebound: 10,
//                         assist: 0,
//                         steal: 2,
//                         block: 1,
//                         field_goals_made: 7,
//                         field_goals_attempted: 12,
//                         field_golas_percentage: 58.3,
//                         three_point_made: 0,
//                         three_point_attempted: 1,
//                         three_point_percentage: 0.0,
//                         free_throws_made: 1,
//                         free_throws_attempted: 2,
//                         free_throws_percentage: "50.0",
//                         turnover: 4,
//                         personal_foul: 5,
//                         plus_minus: 4,
//                     },
                    
//                 ],
//                 benchplayers: [
//                     {
//                         playername: "Нэмэхбаяр Эрдэмтөгс",
//                         minutes: "9:11",
//                         points: 0,
//                         offensive_rebound: 0,
//                         defensive_rebound: 2,
//                         rebound: 2,
//                         assist: 0,
//                         steal: 0,
//                         block: 0,
//                         field_goals_made: 0,
//                         field_goals_attempted: 2,
//                         field_golas_percentage: "0.0",
//                         three_point_made: 0,
//                         three_point_attempted: 2,
//                         three_point_percentage: 0.0,
//                         free_throws_made: 0,
//                         free_throws_attempted: 0,
//                         free_throws_percentage: "0.0",
//                         turnover: 1,
//                         personal_foul: 1,
//                         plus_minus: -13,
//                     },
//                     {
//                         playername: "Цогтбаатар Сэргэлэнбаатар",
//                         minutes: "12:13",
//                         points: 10,
//                         offensive_rebound: 0,
//                         defensive_rebound: 1,
//                         rebound: 1,
//                         assist: 1,
//                         steal: 0,
//                         block: 1,
//                         field_goals_made: 3,
//                         field_goals_attempted: 5,
//                         field_golas_percentage: "60.0",
//                         three_point_made: 1,
//                         three_point_attempted: 3,
//                         three_point_percentage: 33.3,
//                         free_throws_made: 3,
//                         free_throws_attempted: 4,
//                         free_throws_percentage: "75.0",
//                         turnover: 1,
//                         personal_foul: 2,
//                         plus_minus: -2,
//                     },
//                     {
//                         playername: "Энхтайван Цэрэнбаатар",
//                         minutes: "7:23",
//                         points: 3,
//                         offensive_rebound: 0,
//                         defensive_rebound: 0,
//                         rebound: 0,
//                         assist: 0,
//                         steal: 0,
//                         block: 0,
//                         field_goals_made: 1,
//                         field_goals_attempted: 1,
//                         field_golas_percentage: "100.0",
//                         three_point_made: 0,
//                         three_point_attempted: 0,
//                         three_point_percentage: 0,
//                         free_throws_made: 1,
//                         free_throws_attempted: 2,
//                         free_throws_percentage: "50.0",
//                         turnover: 1,
//                         personal_foul: 1,
//                         plus_minus: -11,
//                     },
//                     {
//                         playername: "Туул Мэндбаяр",
//                         minutes: "24:13",
//                         points: 0,
//                         offensive_rebound: 1,
//                         defensive_rebound: 4,
//                         rebound: 5,
//                         assist: 8,
//                         steal: 5,
//                         block: 0,
//                         field_goals_made: 0,
//                         field_goals_attempted: 2,
//                         field_golas_percentage: "0.0",
//                         three_point_made: 0,
//                         three_point_attempted: 1,
//                         three_point_percentage: 0.0,
//                         free_throws_made: 0,
//                         free_throws_attempted: 0,
//                         free_throws_percentage: "0.0",
//                         turnover: 3,
//                         personal_foul: 3,
//                         plus_minus: -1,
//                     },
//                     {
//                         playername: "Баярсайхан Энхсайхан",
//                         minutes: "17:13",
//                         points: 2,
//                         offensive_rebound: 0,
//                         defensive_rebound: 1,
//                         rebound: 1,
//                         assist: 2,
//                         steal: 1,
//                         block: 0,
//                         field_goals_made: 0,
//                         field_goals_attempted: 2,
//                         field_golas_percentage: "0.0",
//                         three_point_made: 0,
//                         three_point_attempted: 1,
//                         three_point_percentage: 0.0,
//                         free_throws_made: 2,
//                         free_throws_attempted: 2,
//                         free_throws_percentage: "100.0",
//                         turnover: 3,
//                         personal_foul: 1,
//                         plus_minus: -18,
//                     },
//                 ]
        
        
//             },
//             {
//                 teamname: "Erdenet Miners",
//                 logo: "assets/miners.png",
//                 players: [
//                     {
//                         playername: "Pendarvis Williams",
//                         minutes: "34:40",
//                         points: 19,
//                         offensive_rebound: 2,
//                         defensive_rebound: 4,
//                         rebound: 6,
//                         assist: 3,
//                         steal: 5,
//                         block: 2,
//                         field_goals_made: 7,
//                         field_goals_attempted: 14,
//                         field_golas_percentage: "50.0",
//                         three_point_made: 0,
//                         three_point_attempted: 4,
//                         three_point_percentage: "0.0",
//                         free_throws_made: 5,
//                         free_throws_attempted: 5,
//                         free_throws_percentage: "100.0",
//                         turnover: 1,
//                         personal_foul: 2,
//                         plus_minus: 1,
//                     },
//                     {
//                         playername: "Энхбаатар Мөнхбаяр",
//                         minutes: "15:53",
//                         points: 8,
//                         offensive_rebound: 1,
//                         defensive_rebound: 0,
//                         rebound: 1,
//                         assist: 0,
//                         steal: 0,
//                         block: 1,
//                         field_goals_made: 3,
//                         field_goals_attempted: 5,
//                         field_golas_percentage: "60.0",
//                         three_point_made: 1,
//                         three_point_attempted: 2,
//                         three_point_percentage: "50.0",
//                         free_throws_made: 1,
//                         free_throws_attempted: 3,
//                         free_throws_percentage: "33.3",
//                         turnover: 3,
//                         personal_foul: 4,
//                         plus_minus: -5,
//                     },
//                     {
//                         playername: "Энхбат Дорж-Арилд",
//                         minutes: "12:08",
//                         points: 2,
//                         offensive_rebound: 0,
//                         defensive_rebound: 0,
//                         rebound: 0,
//                         assist: 1,
//                         steal: 0,
//                         block: 0,
//                         field_goals_made: 1,
//                         field_goals_attempted: 1,
//                         field_golas_percentage: "100.0",
//                         three_point_made: 0,
//                         three_point_attempted: 0,
//                         three_point_percentage: "0.0",
//                         free_throws_made: 0,
//                         free_throws_attempted: 0,
//                         free_throws_percentage: "0.0",
//                         turnover: 1,
//                         personal_foul: 1,
//                         plus_minus: 1,
//                     },
//                     {
//                         playername: "Оюунболд Очирбат",
//                         minutes: "12:33",
//                         points: 3,
//                         offensive_rebound: 0,
//                         defensive_rebound: 1,
//                         rebound: 1,
//                         assist: 0,
//                         steal: 1,
//                         block: 0,
//                         field_goals_made: 1,
//                         field_goals_attempted: 2,
//                         field_golas_percentage: "50.0",
//                         three_point_made: 0,
//                         three_point_attempted: 0,
//                         three_point_percentage: "0.0",
//                         free_throws_made: 1,
//                         free_throws_attempted: 2,
//                         free_throws_percentage: "50.0",
//                         turnover: 0,
//                         personal_foul: 1,
//                         plus_minus: 5,
//                     },
//                     {
//                         playername: "Ганцолмон Болор-Эрдэнэ",
//                         minutes: "28:13",
//                         points: 7,
//                         offensive_rebound: 1,
//                         defensive_rebound: 0,
//                         rebound: 1,
//                         assist: 6,
//                         steal: 3,
//                         block: 0,
//                         field_goals_made: 1,
//                         field_goals_attempted: 6,
//                         field_golas_percentage: 16.7,
//                         three_point_made: 0,
//                         three_point_attempted: 3,
//                         three_point_percentage: "0.0",
//                         free_throws_made: 5,
//                         free_throws_attempted: 6,
//                         free_throws_percentage: "83.3",
//                         turnover: 5,
//                         personal_foul: 5,
//                         plus_minus: -4,
//                     },
//                 ],
//                 benchplayers: [
//                     {
//                         playername: "Ариунболд Тэмүүжин",
//                         minutes: "31:24",
//                         points: 13,
//                         offensive_rebound: 0,
//                         defensive_rebound: 6,
//                         rebound: 6,
//                         assist: 3,
//                         steal: 1,
//                         block: 0,
//                         field_goals_made: 3,
//                         field_goals_attempted: 5,
//                         field_golas_percentage: "60.0",
//                         three_point_made: 2,
//                         three_point_attempted: 2,
//                         three_point_percentage: "100.0",
//                         free_throws_made: 5,
//                         free_throws_attempted: 6,
//                         free_throws_percentage: "83.3",
//                         turnover: 2,
//                         personal_foul: 2,
//                         plus_minus: 9,
//                     },
//                     {
//                         playername: "Ганцолмон Ган-эрдэнэ",
//                         minutes: "31:59",
//                         points: 13,
//                         offensive_rebound: 3,
//                         defensive_rebound: 3,
//                         rebound: 6,
//                         assist: 2,
//                         steal: 0,
//                         block: 0,
//                         field_goals_made: 5,
//                         field_goals_attempted: 9,
//                         field_golas_percentage: "55.6",
//                         three_point_made: 0,
//                         three_point_attempted: 1,
//                         three_point_percentage: "0.0",
//                         free_throws_made: 3,
//                         free_throws_attempted: 3,
//                         free_throws_percentage: "100.0",
//                         turnover: 4,
//                         personal_foul: 2,
//                         plus_minus: 7,
//                     },
//                     {
//                         playername: "Намжилдорж Золжаргал",
//                         minutes: "10:45",
//                         points: 0,
//                         offensive_rebound: 0,
//                         defensive_rebound: 1,
//                         rebound: 1,
//                         assist: 1,
//                         steal: 1,
//                         block: 0,
//                         field_goals_made: 0,
//                         field_goals_attempted: 5,
//                         field_golas_percentage: "0.0",
//                         three_point_made: 0,
//                         three_point_attempted: 4,
//                         three_point_percentage: "0.0",
//                         free_throws_made: 0,
//                         free_throws_attempted: 0,
//                         free_throws_percentage: "0.0",
//                         turnover: 1,
//                         personal_foul: 1,
//                         plus_minus: 3,
//                     },
//                     {
//                         playername: "Тунгалаг Санчир",
//                         minutes: "22:25",
//                         points: 19,
//                         offensive_rebound: 0,
//                         defensive_rebound: 4,
//                         rebound: 4,
//                         assist: 1,
//                         steal: 2,
//                         block: 0,
//                         field_goals_made: 7,
//                         field_goals_attempted: 14,
//                         field_golas_percentage: "50.0",
//                         three_point_made: 2,
//                         three_point_attempted: 6,
//                         three_point_percentage: "33.3",
//                         free_throws_made: 3,
//                         free_throws_attempted: 5,
//                         free_throws_percentage: "60.0",
//                         turnover: 1,
//                         personal_foul: 2,
//                         plus_minus: 0,
//                     },
//                 ]
//             },
//         ]