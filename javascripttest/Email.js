class Email extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.email = ''; // State to retain the email value

        this.shadowRoot.innerHTML = `
            <style>
                .comp-email {
                    /* Your styles here */
                }
            </style>
            <div class="comp-email">
                <slot name="email-input"></slot>
                <slot name="submit-button"></slot>
            </div>
        `;

        this.connectedCallback = this.connectedCallback.bind(this);
    }

    connectedCallback() {
        const emailInputSlot = this.shadowRoot.querySelector('slot[name="email-input"]');
        const submitButtonSlot = this.shadowRoot.querySelector('slot[name="submit-button"]');

        emailInputSlot.addEventListener('slotchange', () => {
            const emailInput = emailInputSlot.assignedNodes()[0];
            if (emailInput) {
                emailInput.addEventListener('input', (event) => {
                    this.email = event.target.value;
                });
            }
        });

        submitButtonSlot.addEventListener('slotchange', () => {
            const submitButton = submitButtonSlot.assignedNodes()[0];
            if (submitButton) {
                submitButton.addEventListener('click', () => {
                    const notification = document.querySelector("comp-notification");
                    if (notification) {
                        notification.showMessage(this.email);
                    }
                });
            }
        });
    }
}

window.customElements.define('comp-email', Email);