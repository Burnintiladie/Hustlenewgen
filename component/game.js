class Game extends HTMLElement
{
    /*Baiguulagch*/
    constructor()
    {
        super();
        
        this.myRoot = this.attachShadow({ mode: "closed" });

        this.first_team_logo = this.getAttribute("first_team_logo");
        this.first_team =  this.getAttribute("first_team");
        this.first_team_score = this.getAttribute("first_team_score");
        this.second_team_logo = this.getAttribute("second_team_logo");
        this.second_team = this.getAttribute("second_team");
        this.second_team_score = this.getAttribute("second_team_score");
        this.time = this.getAttribute("time");
        this.#Render();
    }

    #Render()
    {
        this.myRoot.innerHTML = `
            <style>
            p{
                margin: 0;
            }

            /*Neg togloltnii heseg*/
            .buhel{
                display: grid;
                grid-template-rows: auto auto;
                background-color: var(--bg-color);
                border-radius: 1.55rem;
                height: 5.625rem;
                width: 15rem;
                margin: 1.25rem;
                padding: 1.8rem 0.9rem;
                justify-content: center;
            
                /*Bagiin logo bairluulalt*/
                & section{
                    margin: 0rem 0.5rem;
                    text-align: center;
                }
                /*Bagiin logonii hemjee*/
                & img{
                    width: 3.75rem;
                    height: 3.75rem;
                }
            }

            /*Nuuren taliin heseg*/
            .game{
                grid-row: 1;
                display: flex;
            }
            
            /*Togloltiin minut bolon Final*/
            .final-text{
                padding-top: 0.3rem;
                font-size: 10px;
                color: #f04040;
                text-align: center;
            }
            
            /*Onoonii haritsaa*/
            .team{
                font-size: 20px;
                display: flex;
            }
            
            /*Neg toglolt deeree hoverdvel nuuren heseg alga boloh*/
            .buhel:hover .game{
                opacity: 0;
                transition: 0.2s;
            }
            
            /*Detail heseg garch irelt*/
            .buhel:hover .detail{
                opacity: 1;
            }
            
            /* Hover hiivel garch ireh detail text*/
            .detail{
                grid-row: 2;
                opacity: 0;
                transform: translateY(-4rem);
                transition: 0.8s;
            
                /*Detail text*/
                & p{
                    font-size: 20px;
                    color: white;
                    text-align: center;
                }
            
                & a{
                    text-decoration: none;
                }
            }
            </style>

            <!--Neg matchnii heseg-->
            <div class="buhel">

                <!--Nuuren taliin heseg-->
                <div class="game">

                    <!--Ehnii bagiin logo bolon nernii heseg-->
                    <section>
                        <img src="${this.first_team_logo}" alt="team1 logo">
                        <p>${this.first_team}</p>
                    </section>

                    <!--Goliin onoonii haritsaanii heseg-->
                    <section class="final">

                        <!--Tsag bolon final text-->
                        <p class="final-text">${this.time}</p>

                        <div class="team">
                            <p>${this.first_team_score}</p>
                            <p>:</p>
                            <p>${this.second_team_score}</p>
                        </div>
                    </section>

                    <!--Hoyrdah bagiin logo bolon nernii heseg-->
                    <section>
                        <img src="${this.second_team_logo}" alt="team2 logo">
                        <p>${this.second_team}</p>
                    </section>
                </div>

                <!--Match deer ochvol hoverdoh heseg-->
                <div class="detail">
                    <a href="Gamedetail.html">
                        <p>Game Detail</p>
                    </a>
                </div>
            </div>`;
    }

    //Attribute butsaalt
    static get observedAttributes() 
    {
        return ["first_team_logo", "first_team", "first_team_score", "second_team_logo", "second_team", "second_team_score", "time"];
    }

    //Attribute soligdolt
    attributeChangedCallback(name, oldVal, newVal) 
    {
        switch (name) 
        {
            case "first_team_logo":
                this.first_team_logo = newVal;
                this.#Render();
                break;

            case "first_team":
                this.first_team = newVal;
                this.#Render();
                break;

            case "first_team_score":
                this.first_team_score = newVal;
                this.#Render();
                break;

            case "second_team_logo":
                this.second_team_logo = newVal;
                this.#Render();
                break;

            case "second_team":
                this.second_team = newVal;
                this.#Render();
                break;

            case "second_team_score":
                this.second_team_score = newVal;
                this.#Render();
                break;

            case "time":
                this.time = newVal;
                this.#Render();
                break;

            default:
                break;
        }
    }

}
window.customElements.define('recent-game', Game);