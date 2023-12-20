const api = "https://api.jsonbin.io/v3/b/657c7c841f5677401f0e4143";

class RGame
{
    constructor(game)
    {
        this.first_team_logo = game.first_team_logo;
        this.first_team =  game.first_team;
        this.first_team_score = game.first_team_score;
        this.second_team_logo = game.second_team_logo;
        this.second_team = game.second_team;
        this.second_team_score = game.second_team_score;
        this.time = game.time;
    }

    Render()
    {
        return`
        <recent-game first_team_logo="${this.first_team_logo}" 
        first_team="${this.first_team}" 
        first_team_score="${this.first_team_score}"
        second_team_logo="${this.second_team_logo}"
        second_team="${this.second_team}"
        second_team_score="${this.second_team_score}"
        time="${this.time}"
        ></recent-game>
        `;
    }
}

class Gapp
{
    constructor(targetid)
    {
        this.target = targetid;
    }

    init()
    {   
        fetch(api).then(response => response.json()).then(data => {
            let game = data.record;
            let select = document.getElementById(this.target);

            for(let i=0; i< game.length; i++)
            {
                const detail = new RGame(game[i]);
                select.insertAdjacentHTML('beforeend', detail.Render());
            }
        })
    }
}








// const games = [
//     {
//         "first_team_logo": "assets/garid.png",
//         "first_team": "Garid",
//         "first_team_score": 34,
//         "second_team_logo": "assets/metal.png",
//         "second_team" : "Metal",
//         "second_team_score": 41,
//         "time": "Q2 03:12"
//     },
//     {
//         "first_team_logo": "assets/bison.png",
//         "first_team": "Bison",
//         "first_team_score": 99,
//         "second_team_logo": "assets/brothers.png",
//         "second_team" : "Brothers",
//         "second_team_score": 93,
//         "time": "Q4 02:15"
//     },
//     {
//         "first_team_logo": "assets/ihc.png",
//         "first_team": "Apes",
//         "first_team_score": 85,
//         "second_team_logo": "assets/daichid.png",
//         "second_team" : "Warriors",
//         "second_team_score": 83,
//         "time": "Final"
//     },
//     {
//         "first_team_logo": "assets/miners.png",
//         "first_team": "Miners",
//         "first_team_score": 108,
//         "second_team_logo": "assets/huleguud.png",
//         "second_team" : "Broncos",
//         "second_team_score": 102,
//         "time": "Final"
//     }
// ]