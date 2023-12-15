class Game extends HTMLElement
{
    constructor()
    {
        super();

        this.innerHTML = `
        <div class="buhel">

                <div class="game">
                    <section>
                        <img src="assets/garid.png" alt="team1 logo">
                        <p>Garid</p>
                    </section>

                    <section class="final">
                        <p class="final-text">Q2 03:12</p>
                        <div class="team">
                            <p>34</p>
                            <p>:</p>
                            <p>41</p>
                        </div>
                    </section>

                    <section>
                        <img src="assets/metal.png" alt="team2 logo">
                        <p>Metal</p>
                    </section>
                </div>

                <div class="detail">
                    <a href="Gamedetail.html">
                        <p>Game Detail</p>
                    </a>
                </div>
        </div>`;
    }
}
window.customElements.define('recent-game', Game);