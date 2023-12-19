class Notification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                p {
                    color: white;
                }
            </style>
            <div class="notification">
                <p id="notification-message"></p>
            </div>
        `;
    }

    showMessage(useremail) {
        const messageElement = this.shadowRoot.querySelector("#notification-message");
        if (messageElement) {
            messageElement.textContent = "Tanii email: '" + useremail + "' amjilttai burtgegdlee .";
        }
    }
}

window.customElements.define('comp-notification', Notification);