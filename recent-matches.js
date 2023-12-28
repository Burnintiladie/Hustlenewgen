const api = "https://api.jsonbin.io/v3/b/6589b23f266cfc3fde6e2717";

class RecentMatches {
  constructor(recentmatches) {
    this.title = recentmatches.title;
    this.stats = recentmatches.stats;
  }

  Render() {
    return `
        <div class="recent-matches">
            <div class="head">${this.title}</div>
                    <div>
                        <div class="first">ОГНОО</div>
                        <div>VERSUS</div>
                        <div>RESULTS</div>
                        <div>MIN</div>
                        <div>PTS</div>
                        <div>FGM</div>
                        <div>FGA</div>
                        <div>FG%</div>
                        <div>3PM</div>
                        <div>3PA</div>
                        <div>3P%</div>
                        <div>FTM</div>
                        <div>FTA</div>
                        <div>FT%</div>
                        <div>OFF</div>
                        <div>DEF</div>
                        <div>REB</div>
                        <div>AST</div>
                        <div>STL</div>
                        <div>BLK</div>
                        <div>TO</div>
                        <div>PF</div>
                    </div>
                    ${this.RenderStats()}

                    <div>
                        <div class="first">-</div>
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
                        <div>-</div>
                        <div>-</div>
                    </div>
        </div>`;
  }

  RenderStats() {
    let statsHTML = "";
    for (const pstats of this.stats) {
      statsHTML += `
            <div>
                    <div class="first">${pstats.date}</div>
                    <div>${pstats.versus}</div>
                    <div>${pstats.results}</div>
                    <div>${pstats.minute}</div>
                    <div>${pstats.points}</div>
                    <div>${pstats.field_goals_made}</div>
                    <div>${pstats.field_goals_attempted}</div>
                    <div>${pstats.field_goals_percentage}</div>
                    <div>${pstats.three_point_made}</div>
                    <div>${pstats.three_point_attempted}</div>
                    <div>${pstats.three_point_percentage}</div>
                    <div>${pstats.free_throws_made}</div>
                    <div>${pstats.free_throws_attempted}</div>
                    <div>${pstats.free_throws_percentage}</div>
                    <div>${pstats.offensive_rebound}</div>
                    <div>${pstats.defensive_rebound}</div>
                    <div>${pstats.rebound}</div>
                    <div>${pstats.assist}</div>
                    <div>${pstats.steal}</div>
                    <div>${pstats.block}</div>
                    <div>${pstats.turnover}</div>
                    <div>${pstats.personal_foul}</div>
            </div>
            `;
    }
    return statsHTML;
  }
}

class Appp {
  constructor(targetid) {
    this.target = targetid;
  }

  init() {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        let game = data.record;
        let select = document.getElementById(this.target);

        for (let i = 0; i < game.length; i++) {
          const recentmatches = new RecentMatches(game[i]);
          select.insertAdjacentHTML('beforeend', recentmatches.Render());
        }
      });
  }
}

// const matches = [
//         {
//             title: "Recent Matches",
//             stats: [
//                     {
//                         date: "14/12/2023",
//                         versus: "Хасын Хүлэгүүд",
//                         results: "W 91-89",
//                         minute: "15:53",
//                         points: 3,
//                         field_goals_made: 1,
//                         field_goals_attempted: 3,
//                         field_goals_percentage: 33.3,
//                         three_point_made: 1,
//                         three_point_attempted: 1,
//                         three_point_percentage: 100.0,
//                         free_throws_made: 0,
//                         free_throws_attempted: 0,
//                         free_throws_percentage: 0,
//                         offensive_rebound: 1,
//                         defensive_rebound: 2,
//                         rebound: 3,
//                         assist: 5,
//                         steal: 0,
//                         block: 0,
//                         turnover: 3,
//                         personal_foul: 5
//                     },
//                     {
//                         date: "14/12/2023",
//                         versus: "Хасын Хүлэгүүд",
//                         results: "W 91-89",
//                         minute: "15:53",
//                         points: 3,
//                         field_goals_made: 1,
//                         field_goals_attempted: 3,
//                         field_goals_percentage: 33.3,
//                         three_point_made: 1,
//                         three_point_attempted: 1,
//                         three_point_percentage: 100.0,
//                         free_throws_made: 0,
//                         free_throws_attempted: 0,
//                         free_throws_percentage: 0,
//                         offensive_rebound: 1,
//                         defensive_rebound: 2,
//                         rebound: 3,
//                         assist: 5,
//                         steal: 0,
//                         block: 0,
//                         turnover: 3,
//                         personal_foul: 5
//                     },
//                     {
//                         date: "14/12/2023",
//                         versus: "Хасын Хүлэгүүд",
//                         results: "W 91-89",
//                         minute: "15:53",
//                         points: 3,
//                         field_goals_made: 1,
//                         field_goals_attempted: 3,
//                         field_goals_percentage: 33.3,
//                         three_point_made: 1,
//                         three_point_attempted: 1,
//                         three_point_percentage: 100.0,
//                         free_throws_made: 0,
//                         free_throws_attempted: 0,
//                         free_throws_percentage: 0,
//                         offensive_rebound: 1,
//                         defensive_rebound: 2,
//                         rebound: 3,
//                         assist: 5,
//                         steal: 0,
//                         block: 0,
//                         turnover: 3,
//                         personal_foul: 5
//                     },
//                     {
//                         date: "14/12/2023",
//                         versus: "Хасын Хүлэгүүд",
//                         results: "W 91-89",
//                         minute: "15:53",
//                         points: 3,
//                         field_goals_made: 1,
//                         field_goals_attempted: 3,
//                         field_goals_percentage: 33.3,
//                         three_point_made: 1,
//                         three_point_attempted: 1,
//                         three_point_percentage: 100.0,
//                         free_throws_made: 0,
//                         free_throws_attempted: 0,
//                         free_throws_percentage: 0,
//                         offensive_rebound: 1,
//                         defensive_rebound: 2,
//                         rebound: 3,
//                         assist: 5,
//                         steal: 0,
//                         block: 0,
//                         turnover: 3,
//                         personal_foul: 5
//                     },
//                     {
//                         date: "14/12/2023",
//                         versus: "Хасын Хүлэгүүд",
//                         results: "W 91-89",
//                         minute: "15:53",
//                         points: 3,
//                         field_goals_made: 1,
//                         field_goals_attempted: 3,
//                         field_goals_percentage: 33.3,
//                         three_point_made: 1,
//                         three_point_attempted: 1,
//                         three_point_percentage: 100.0,
//                         free_throws_made: 0,
//                         free_throws_attempted: 0,
//                         free_throws_percentage: 0,
//                         offensive_rebound: 1,
//                         defensive_rebound: 2,
//                         rebound: 3,
//                         assist: 5,
//                         steal: 0,
//                         block: 0,
//                         turnover: 3,
//                         personal_foul: 5
//                     },
//             ]
//         },
// ]
