class EmailComponent extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();

      this.emailInput = this.shadowRoot.querySelector('.email-input');
      this.emailBtn = this.shadowRoot.querySelector('.email-btn');

      this.emailBtn.addEventListener('click', () => this.sendEmail());
  }

  render() {
      this.shadowRoot.innerHTML = `
      <style>
      /* Add your component styles here */
      :host {
        display: block;
        font-family: Arial, sans-serif;
      }

      .email {
        display: none;
        background-color: white;
        border-radius: 5px;
        position: absolute;
        z-index: 1;
        width: 22rem;
        padding: 1.5rem;
        margin-top: 0.2rem;
        margin-right: 1.1rem;
        justify-content: center;
        right: 0;
        color: black;
        font-size: 16px;
      }

      /* email bichih input heseg */
      .email-input {
        width: 12rem;
        height: 1.3rem;
        padding: 2px 4px;
        border: 1px solid var(--main-bg-color);
      }

      /* email-iin submit button */
      .email-btn {
        height: 1.5rem;
        background-color: #050c1c;
        color: white;
        font-family: var(--font);
        border: none;
        border-radius: 3px;
      }
    </style>

          <div class="email">
              <form action="">
                  <label for="emailInput">Email:</label>
                  <input type="email" class="email-input" id="emailInput" placeholder="youremail@example.com">
                  <input type="button" class="email-btn" value="Submit">
              </form>
          </div>
      `;
  }

  sendEmail() {
      const email = this.emailInput.value.trim();
      if (email) {
          this.dispatchEvent(new CustomEvent('emailSent', { detail: { email } }));
          this.emailInput.value = ''; // Clear the input after sending
      }
  }
}

customElements.define('email-component', EmailComponent);
