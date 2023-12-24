class HonhBuhel extends HTMLElement 
{
    constructor() 
    {
        super();

        this.innerHTML = `

        <!--Honhnii heseg -->
        <div class="honh">

            <!--Honhnii tovchluur-->
            <honh-btn></honh-btn>

            <!--Honhon deer daranguut garch ireh heseg -->
            <honh-unalt></honh-unalt>
        </div>
        `;
    }
}
window.customElements.define('honh-buhel', HonhBuhel);