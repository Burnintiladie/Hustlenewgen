class EmailButton extends HTMLElement 
{
    constructor() 
    {
        super();

        this.innerHTML = `

        <!--Google Icon-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        <style>
        /* email button */
        .notbut{
         height: 2.36rem;
         /* padding-top: 5px; */
         border: 2px solid white;
         border-radius: 5px;
         background-color: var(--main-bg-color);
         color: white;
         font-family: var(--font);
         font-size: 15px;
         display: flex;
         align-items: center;

         & span{
            margin-right: 3px;
         }
        }
        </style>

        <!-- Email button -->
        <button class="notbut" onclick="emaildrop()" id="notbtn">
            <span class="material-symbols-outlined">email</span>
            Notify
        </button>
        `;
    }
}

window.customElements.define('email-btn', EmailButton);