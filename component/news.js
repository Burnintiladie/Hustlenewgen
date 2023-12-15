class News extends HTMLElement
{
    constructor()
    {
        super();
        
        this.innerHTML = `
        <article class="medee">
                <img src="assets/news1.png" alt="news1" class="zurag">
                <div class="title">
                    <h5>Сагсан бөмбөгийн шигшээ баг эцсийн мөчид ялагдлаа</h5>
                    <p class="desc">Азийн наадмын сагсан бөмбөгийн хэсгийн тоглолтууд үргэлжилж манай шигшээ хоёр дахь
                        тоглолтоо Хонгконгын эсрэг тоглож эцсийн мөчид хожигдол амслаа.
                        Хоёрдугаар үед эсрэг багийн төвийн тоглогч болон хурдан довтолгоог хамгаалж чадалгүй дуусав.
                    </p>
                </div>
        </article>
        `;
    }
} 

window.customElements.define('recent-news',News);