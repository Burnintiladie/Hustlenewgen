class HonhUnalt extends HTMLElement 
{
    constructor() 
    {
        super();

        this.innerHTML = `

        <!--Google Icon-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        <style>
        .honh-sec{
            display: none;
            background-color: white;
            position: absolute;
            z-index: 1;
            width: 22rem;
            height: 1.5rem;
            padding: 1.5rem;
            border-radius: 5px;
            margin-top: 0.2rem;
            margin-right: 4rem;
            right: 0;
            font-size: 13px;
            justify-content: center;
            align-items: center;
        }
        </style>

        <!--Honhon deer daranguut garch ireh heseg -->
        <div class="honh-sec" id="honh-drop">
            <comp-notification></comp-notification>
        </div>
        `;
    }
}

window.customElements.define('honh-unalt', HonhUnalt);