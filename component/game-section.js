class GamesSection extends HTMLElement
{
    constructor()
    {
        super();

        this.innerHTML = `
        <div class="match">
            <recent-game></recent-game>
            <recent-game></recent-game>
            <recent-game></recent-game>
            <recent-game></recent-game>
        </div>
        `;
    }
}
window.customElements.define('games-section', GamesSection);