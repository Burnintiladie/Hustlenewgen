class Email extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.email = '';
  
      this.shadowRoot.innerHTML = `
        <style>
          .comp-email {
            /* email bichih input heseg */
            & .email-input{
              width: 12rem;
              height: 1.3rem;
              padding: 2px 4px;
              border: 1px solid var(--main-bg-color) ;
            }
            
            /* email-iin submit button */
            & .email-btn{
              height: 1.5rem;
              background-color: #050c1c;
              color: white;
              font-family: var(--font);
              border: none;
              border-radius: 3px;
            }
          }
        </style>
        <div class="comp-email">
          <label for="">Email:</label>
          <slot name="email-input" class="email-input"></slot>
          <slot name="submit-button" class="email-btn"></slot>
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
          submitButton.addEventListener('click', async () => {
            try {
              const response = await fetch('http://localhost:3000/createmyemail', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  userId: Math.floor(Math.random() * 100),
                  email: this.email,
                }),
              });
  
              const data = await response.json();

              console.log(data);
              const notification = document.querySelector("comp-notification");
              if (notification) {
                notification.showMessage(this.email.message);
              }
            } catch (error) {
              console.error( error);
            }
          });
        }
      });
    }
  }
  
  window.customElements.define('comp-email', Email);
  