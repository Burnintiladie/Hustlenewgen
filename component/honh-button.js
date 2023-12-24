class HonhButton extends HTMLElement 
{
    constructor() 
    {
        super();

        this.innerHTML = `

        <!--Google Icon-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        <!--Honhnii heseg -->
        <style>
        .honh-btn{
            height: 2.36rem;
            width: 2.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--main-bg-color);
            color: white;
            border: 2px solid white;
            border-radius: 5px;
        
        }
        </style>

        <!--Honhnii tovchluur-->
        <button class="honh-btn" id="honh-btn" onclick="honhdrop()">
             <span class="material-symbols-outlined">notifications</span>
        </button>
        `;
    }
}

window.customElements.define('honh-btn', HonhButton);