class ListComp extends HTMLElement {
    constructor() {
        super();
        //shadowroot
        this.attachShadow({ mode: 'open' });
        //shadowrootiin htmliig css tei oruulaw
        this.shadowRoot.innerHTML = `
            <style> 
                .product-list {
                    display: flex;
                    flex-direction: ${this.getAttribute("direction")}; 
                    gap: 2ch;
                    flex-wrap: wrap;
                }

                .product-list > comp-email {
                    flex: 1 1;
                }
            </style>
            <div class="product-list">
                <slot></slot>
            </div>
            <comp-notification></comp-notification>
        `;
    }
}
//custom element zarlana
window.customElements.define('comp-list', ListComp);