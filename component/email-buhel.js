class EmailBuhel extends HTMLElement 
{
    constructor() 
    {
        super();

        this.innerHTML = `

        <!-- Email button heseg -->
        <div class="not-sec">

            <!-- Email button -->
            <email-btn></email-btn>

            <!-- Email button deer daranguut unaj ireh heseg -->
            <email-unalt></email-unalt>
        </div>

        `;
    }
}

window.customElements.define('email-buhel', EmailBuhel);