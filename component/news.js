class News extends HTMLElement
{
    /*Baiguulagch*/
    constructor()
    {
        super();

        this.myRoot = this.attachShadow({ mode : "closed" });

        this.image = this.getAttribute("image");
        this.title = this.getAttribute("title");
        this.desc = this.getAttribute("desc");
        this.darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        this.#Render();
    }

    #Render()
    {
        this.myRoot.innerHTML = `
        <style>

        :host {
            --background-color-light: #ffffff;
            --text-color-light: #000000;
            --background-color-dark: #1a1a1a;
            --text-color-dark: #ffffff;
          }

        /* 1 medeenii heseg */
        .medee{
           font-family: var(--font);
           margin: 1.25rem;
           background-color: var(--background-color-light);
           color: var(--text-color-light);
           border-radius: 5px;  
           height: 24rem;
           overflow: hidden;

        /* Medeenii zurag */
        & img{
           object-fit: cover;
           height: 60%;
           width: 100%;
           }
        }

        /* Medeenii text heseg */
        .title{
           background-color: white;
           padding: 0rem 1.25rem;
           margin: 0rem;

           /* Garchignii doodoh zuraas */
           & h5::after{
              display: block;
              content: "";
              height: 2px;
              width: 100%;
              border-radius: 3px;
              background: var(--main-bg-color);
              margin-top: 1.25rem;
              margin-bottom: -1.25rem;
           }
        }

        /* Medeenii zuragnii hover */
        .medee:hover .zurag{
           height: 30%;
           transition-duration: 0.6s;
           transition-timing-function: ease-in;
        }

        /* Medeenii title hover */
        .medee:hover .title{
           height: 70%;
           border-radius: 5px;
        }

        /* Medeenii delgerengui heseg */
        .desc{
           padding-top: 0.6rem;
           display: none;
           color: #666C74;
           font-size: 10px;
           text-align: justify;
        }

        /* Medeenii delgerengui hesgiin hover */
        .medee:hover .desc{
           display: block;
        }
        </style>

        <!--Neg medeenii heseg-->
        <article class="medee">

                <!--Medeenii zurag-->
                <img src="${this.image}" alt="news1" class="zurag">

                <div class="title">
                    <h5>${this.title}</h5>

                    <!--Medeenii delgerengui-->
                    <p class="desc">${this.desc}</p>
                </div>
        </article>`;
    }
    

    //Attribute butsaalt
    static get observedAttributes()
    {
        return ["image", "title", "desc"];
    }

    //Attribute soligdolt
    attributeChangedCallback(name, oldVal, newVal)
    {
        switch(name)
        {
            case "image":
                this.image = newVal;
                this.#Render();
                break;
            
            // case "title":
            //     this.title = newVal;
            //     this.#Render();
            //     break;
            
            case "desc":
                this.desc = newVal;
                this.#Render();
                break;

            default:
                break;
        }
    }
} 
window.customElements.define('recent-news',News);