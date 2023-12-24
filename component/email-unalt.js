class EmailUnalt extends HTMLElement 
{
    constructor() 
    {
        super();

        this.innerHTML = `

        <!--Google Icon-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        <style>
        /* email button daranguut unah form heseg */
        .email{
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

            /* email bichih input heseg */
            & input{
            width: 12rem;
            height: 1.3rem;
            padding: 2px 4px;
            border: 1px solid var(--main-bg-color) ;
            }

            /* email-iin submit button */
            & button{
            height: 1.5rem;
            background-color: #050c1c;
            color: white;
            font-family: var(--font);
            border: none;
            border-radius: 3px; 
            }
        }
        </style>

        <!-- Email button deer daranguut unaj ireh heseg -->
        <div class="email" id="email-drop">
            <comp-email>
                <input slot="email-input" type="email" placeholder="Enter your email">
                <button slot="submit-button" role="button">Submit</button>
            </comp-email>
        </div>

        `;
    }
}

window.customElements.define('email-unalt', EmailUnalt);