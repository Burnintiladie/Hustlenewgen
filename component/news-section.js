class NewsSection extends HTMLElement
{
    constructor()
    {
        super();

        this.innerHTML = `
        <div class="news">
            <recent-news></recent-news>  
            <recent-news></recent-news>  
            <recent-news></recent-news>  
            <recent-news></recent-news>  
        </div>
        `;
    }
}

window.customElements.define('news-section', NewsSection);