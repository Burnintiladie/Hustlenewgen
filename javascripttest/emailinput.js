class EmailInput extends HTMLElement {
    constructor() {
      super();
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          input {
            margin-right: 8px;
          }
        </style>
        <input type="email" placeholder="Enter your email">
        <button>Send Email</button>
      `;
  
      shadowRoot.appendChild(template.content.cloneNode(true));
  
      this.emailInput = shadowRoot.querySelector('input');
      this.sendButton = shadowRoot.querySelector('button');
  
      this.sendButton.addEventListener('click', this.sendEmail.bind(this));
    }
  
    sendEmail() {
      const email = this.emailInput.value;
      const event = new CustomEvent('email-sent', {
        detail: { email },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    }
  }
  
  customElements.define('email-input', EmailInput);
  