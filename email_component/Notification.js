class Notification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                p {
                    color: black;
                }
            </style>
            <div class="notification">
                <p id="notification-message">Хоосон байна.</p>
            </div>
        `;
    }

    showMessage(useremail) {
        const messageElement = this.shadowRoot.querySelector("#notification-message");
        if (messageElement) {
            messageElement.textContent = "Таны '" + useremail + "' хаяг амжилттай бүртгэгдлээ.";
        }
    }
}

window.customElements.define('comp-notification', Notification);