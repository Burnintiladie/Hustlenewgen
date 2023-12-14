class EmailNotification extends HTMLElement {
    constructor() {
      super();
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          p {
            margin-top: 8px;
          }
        </style>
        <p><slot></slot></p>
      `;
  
      shadowRoot.appendChild(template.content.cloneNode(true));
  
      this.addEventListener('email-sent', this.handleEmailSent.bind(this));
    }
  
    handleEmailSent(event) {
      const { email } = event.detail;
      this.shadowRoot.querySelector('p').textContent = `Your email (${email}) is successfully registered.`;
    }
  }
  
  customElements.define('email-notification', EmailNotification);
  