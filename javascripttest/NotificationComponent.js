class NotificationComponent extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();

      this.notificationContent = this.shadowRoot.getElementById('notificationContent');

      document.addEventListener('emailSent', (event) => {
          this.showNotification(event.detail.email);
      });
  }

  render() {
      this.shadowRoot.innerHTML = `
          <style>

          </style>

          <div id="notificationContent"></div>
      `;
  }

  showNotification(email) {
      this.notificationContent.innerHTML = `📧 Email sent to ${email}!`;
      this.classList.add('visible');

      setTimeout(() => {
          this.notificationContent.textContent = 'Done!';
      }, 2000);
      setTimeout(() => {
          this.classList.remove('visible');
      }, 5000);
  }
}

customElements.define('notification-popup', NotificationComponent);
