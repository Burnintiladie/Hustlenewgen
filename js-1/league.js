class AppSub
{
    constructor(targetid)
    {
        this.target = targetid;
    }
    init()
    {
        const newsData = {
            "news": [
                {
                    "image": "assets/news1.png",
                    "title": "Сагсан бөмбөгийн шигшээ баг эцсийн мөчид ялагдлаа",
                    "description": "Азийн наадмын сагсан бөмбөгийн хэсгийн тоглолтууд үргэлжилж манай шигшээ хоёр дахь тоглолтоо Хонгконгын эсрэг тоглож эцсийн мөчид хожигдол амслаа. Хоёрдугаар үед эсрэг багийн төвийн тоглогч болон хурдан довтолгоог хамгаалж чадалгүй дуусав."
                },
                {
                    "image": "assets/sanchir.jpg",
                    "title": "Дээд лигийн үнэ цэнтэй тоглогчоор Т.Санчир тодорлоо",
                    "description": "Эрэгтэй Дээд лигийн улирлын шилдэг дасгалжуулагч Эрдэнэт Майнерс багийн ахлах дасгалжуулагч Грек эрхэм Фрагиас Василиус, шилдэг зургаа дахь тоглогч М Гарьд багийн довтлогч Д.Дөлгөөнмөрөн, шилдэг шинэ тоглогч Налайх Бизон багийн холбогч Э.Тулга, улирлын шилдэг хамгаалан тоглогч Хасын Хүлэгүүд багийн хамгаалагч Т.Мэндбаяр нар тус тус нэрлэгдлээ."
                },
                {
                    "image": "assets/bilguun.jpg",
                    "title": "Б.Билгүүн: Тамирчид нэг лигт тоглох хүртэл би Хүлэгүүд багийн бүрэлдэхүүнд тоглохгүй",
                    "description": "Мөн Хасын Хүлэгүүд багийн тоглогч Б.Билгүүн \"Манайд баг лигт орох нь хэвээрээ боловч тамирчид нэг байр суурьтай байх ёстой. Тамирчид нэг лигтээ тоглохоор бэлтгэлээ хийж байсан ч тулсан үед ийм шийдвэр гарч байгаа нь харамсалтай байна. Тамирчид нэг лигт тоглох хүртэл би Хүлэгүүд багийн бүрэлдэхүүнд тоглохгүй\" хэмээн мэдэгдлээ."
                },
                {
                    "image": "assets/MGL.jpeg",
                    "title": "Сагсан бөмбөгийн тамирчдын холбоо сүүлийн үед үүсээд байгаа асуудлын талаар мэдэгдэл хийлээ",
                    "description": "Монголын Үндэсний дээд лиг, багуудын эздийн холбоо нарын хооронд үүссэн үл ойлголцлын улмаас Үндэсний дээд лигт өмнөх улиралд оролцож байсан зургаан баг энэ улирлын Дээд лигт оролцоход хүндрэлтэй нөхцөл байдал тулгарсан билээ."
                }
            ]
        };
        const targetElement = document.querySelector(`.${this.target}`);
        for (let i = 0; i < newsData.news.length; i++) {
            const newsArticle = newsData.news[i];
            const articleHTML = `
                <article class="medee">
                    <img src="${newsArticle.image}" alt="news${i + 1}" class="zurag">
                    <div class="title">
                        <h5>${newsArticle.title}</h5>
                        <p class="desc">${newsArticle.description}</p>
                    </div>
                </article>
            `;
            targetElement.innerHTML += articleHTML;
        }
    }
};


// for (var i = 0; i < newsData.news.length; i++) {
//     var newsArticle = newsData.news[i];
//     var articleHTML = `
//         <article class="medee">
//             <img src="${newsArticle.image}" alt="news${i + 1}" class="zurag">
//             <div class="title">
//                 <h5>${newsArticle.title}</h5>
//                 <p class="desc">${newsArticle.description}</p>
//             </div>
//         </article>
//     `;
//     newsList.innerHTML += articleHTML;
// }

document.addEventListener('DOMContentLoaded', function () {
    const app = new App('news');
    app.init();
});