class Footer extends HTMLElement
{
    /*Baiguulagch*/
    constructor()
    {
        super();

        this.myRoot = this.attachShadow({ mode: "closed" });
        this.#Render();

    }

    #Render()
    {
        this.myRoot.innerHTML = `

        <!--Google Icon-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        <!--Icon-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

         <style>
         p{
            padding: 0;
            margin: 0;
         }

         /*Footer heseg buheldee*/
         footer{
            padding: 3rem 4rem 1rem;
            background-color: var(--main-bg-color);
            color: white;
            font-family: var(--font);
            display: block;
        }
        
        /*Footeriin deed heseg*/
        .top-side{
            display: flex;
            justify-content: space-between;
        }
        
        /*Deed hesgiin zuun tal*/
        .a-side{
            display: flex;
            text-align: center;
            align-items: center;
        
            & img{
              width: 10rem;  
              height: 10rem;
              border-right: 1px solid white;
            }
        
            & p{
                width: 16rem;
                font-size: 13px;
                margin-top: 0.2rem;
            }
        
            & section{
                margin-left: 1rem;
            }

            & h3{
                margin: 0;
                padding: 0;
            }
        }
        
        /*Deed hesgiin baruun tal*/
        .b-side{
            text-align: center;
            align-self: center;
            margin-bottom: 1rem;
            margin-right: 1.35rem;
        
            & h3{
                margin-bottom: 0.8rem;
                text-shadow: 2px 2px 4px #000000;
            }
        
            & p{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 13px;
                padding: 0.1rem;
            }
        
            & span{
                margin-right: 1rem;
            }
        }
        
        /*Dood heseg*/
        .bottom-side{
            display: flex;
            justify-content: space-between;
            border-top: 0.1px solid white;
            margin-top: 3rem;
            font-family: var(--main-font);
        
            & p{
                font-size: 13px;
                align-self: center;
            }
        }
        
        /*Dood hesgiin icon*/
        .icon-section{
            font-size: 20px;
        
            & span{
                padding: 0.5rem 0.3rem;
            }
        }
        @media screen and (max-width: 425px) {

             /*Footer heseg buheldee*/
             footer{
                padding: 3rem 1rem 1rem;
            }
            /*Footeriin deed heseg*/
            .top-side{
                display: block;
            }
            
            /*Deed hesgiin zuun tal*/
            .a-side{
                margin-bottom: 2rem;
                & img{
                  width: 8rem;  
                  height: 8rem;
                }
            
                & p{
                    font-size: 11px;
                }
            }
        }
         </style>

         <footer>

         <!--Deed heseg-->
         <div class="top-side">

            <!--Zuun heseg-->
            <div class="a-side">
                <img src="assets/logo.png" alt="league logo">
                <section>
                    <h3>THE LEAGUE</h3>
                    <p>МОНГОЛЫН САГСАН БӨМБӨГИЙН ҮНДЭСНИЙ ДЭЭД ЛИГИЙН<br>АЛБАН ЁСНЫ САЙТ</p>
                </section>
            </div>

            <!--Baruun heseg-->
            <section class="b-side">
                <h3>БИДЭНТЭЙ ХОЛБОГДОХ</h3>
                <p><span class="material-symbols-outlined">phone</span>ххххх-хххх, хххх-хххх</p>
                <p><span class="material-symbols-outlined">email</span>хххх@example.com</p>
                <p><span class="material-symbols-outlined">map</span>ххххх ххх хххххх ххххх</p>
            </section>
         </div>

         <!--Dood heseg-->
         <div class="bottom-side">

            <!--Icon heseg-->
            <div class="icon-section">
                <span href="#" class="fa fa-facebook"></span>
                <span href="#" class="fa fa-twitter"></span>
                <span href="#" class="fa fa-instagram"></span>
                <span href="#" class="fa fa-dribbble"></span>
            </div>

            <!--Baruun taliin ug-->
            <p> &copy Зохиогчийн эрхээр хамгаалагдсан.</p>
         </div>
         </footer>
        `;
    }
}
window.customElements.define('cus-foot', Footer);