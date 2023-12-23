class Notification extends HTMLElement {
    constructor() {
        super();
        //shadowrootee zarlana
        this.attachShadow({ mode: 'open' });
        //shadowrootiin html css iig zarlana
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
    //hereglegchiin emailiig notificationii component dotor haruulah heseg
    showMessage(useremail) {
        const messageElement = this.shadowRoot.querySelector("#notification-message");
        if (messageElement) {
            messageElement.textContent = "Таны '" + useremail + "' хаяг амжилттай бүртгэгдлээ.";
        }
    }
}
//custom element zarlaj ogch baina.
window.customElements.define('comp-notification', Notification);