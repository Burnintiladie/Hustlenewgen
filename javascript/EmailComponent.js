class EmailComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.emailInput = null;
      this.render();
    }
  
    connectedCallback() {
      this.emailForm = this.shadowRoot.querySelector('form');
      this.emailInput = this.shadowRoot.querySelector('.email-input');
      this.emailForm.addEventListener('submit', this.handleSubmit.bind(this));
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <div class="not-sec">
          <button class="notbut" id="notbtn">
            <span class="material-symbols-outlined">email</span>
            Notify
          </button>
  
          <div class="email" id="email-drop">
            <form>
              <label for="email">Email:</label>
              <input type="email" class="email-input" placeholder="youremail@example.com">
              <input type="submit" class="email-btn" value="submit">
            </form>
            <slot></slot>
          </div>
        </div>
      `;
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const email = this.emailInput.value;
      this.dispatchEvent(new CustomEvent('emailSubmitted', { detail: { email } }));
    }
  }
  
  customElements.define('email-component', EmailComponent);
  