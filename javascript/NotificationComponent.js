class NotificationComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <div class="honh">
          <span class="material-symbols-outlined">notifications</span>
          Youre email successfully registered
        </div>
      `;
    }
  }
  
  customElements.define('notification-component', NotificationComponent);
  