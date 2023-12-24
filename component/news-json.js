//Linkee huvisagchid hadgalj avna.
const apii = "https://api.jsonbin.io/v3/b/658530141f5677401f11bee8";

//Recent news gesen class
class RNews
{
    //Baiguulagch
    constructor(news)
    {
        this.image = news.image;
        this.title = news.title;
        this.desc = news.desc;
    }

    Render()
    {
        //Attributes and Component
        //<recent-news></recent-news>
        return`
        <recent-news image="${this.image}" title="${this.title}" desc="${this.desc}"></recent-news>`;
    }
}

//News-iin app class
class Napp
{

    //Baiguulagch
    constructor(targetid)
    { 
        this.target = targetid;
    }

    init()
    {
        //fetchleed json oo avah
        fetch(apii).then(response => response.json()).then(data => {
            //news-d datanii record buyu json-g hadgalah
            let news = data.record;
            let select = document.getElementById(this.target);

            //delgetsleh davtalt
            for(let j=0; j < news.length; j++)
            {
                const tnews = new RNews(news[j]);
                select.insertAdjacentHTML('beforeend', tnews.Render());
            }
        })
    }
}



//News hesgiin json

// const news =[
//     { 
//         "image" : "assets/news1.png",
//         "title" : "Сагсан бөмбөгийн шигшээ баг эцсийн мөчид ялагдлаа",
//         "desc" : "Азийн наадмын сагсан бөмбөгийн хэсгийн тоглолтууд үргэлжилж манай шигшээ хоёр дахь тоглолтоо Хонгконгын эсрэг тоглож эцсийн мөчид хожигдол амслаа. Хоёрдугаар үед эсрэг багийн төвийн тоглогч болон хурдан довтолгоог хамгаалж чадалгүй дуусав."
//     },
//     { 
//         "image" : "assets/sanchir.jpg",
//         "title" : "Дээд лигийн үнэ цэнтэй тоглогчоор Т.Санчир тодорлоо",
//         "desc" : "Эрэгтэй Дээд лигийн улирлын шилдэг дасгалжуулагч Эрдэнэт Майнерс багийн ахлах дасгалжуулагч Грек эрхэм Фрагиас Василиус, шилдэг зургаа дахь тоглогч М Гарьд багийн довтлогч Д.Дөлгөөнмөрөн, шилдэг шинэ тоглогч Налайх Бизон багийн холбогч Э.Тулга, улирлын шилдэг хамгаалан тоглогч Хасын Хүлэгүүд багийн хамгаалагч Т.Мэндбаяр нар тус тус нэрлэгдлээ."
//     },
//     { 
//         "image" : "assets/bilguun.jpg",
//         "title" : "Б.Билгүүн: Тамирчид нэг лигт тоглох хүртэл би Хүлэгүүд багийн бүрэлдэхүүнд тоглохгүй",
//         "desc" : "Мөн Хасын Хүлэгүүд багийн тоглогч Б.Билгүүн 'Манайд баг лигт орох нь хэвээрээ боловч тамирчид нэг байр суурьтай байх ёстой. Тамирчид нэг лигтээ тоглохоор бэлтгэлээ хийж байсан ч тулсан үед ийм шийдвэр гарч байгаа нь харамсалтай байна. Тамирчид нэг лигт тоглох хүртэл би Хүлэгүүд багийн бүрэлдэхүүнд тоглохгүй' хэмээн мэдэгдлээ."
//     },
//     { 
//         "image" : "assets/MGL.jpeg",
//         "title" : "Сагсан бөмбөгийн тамирчдын холбоо сүүлийн үед үүсээд байгаа асуудлын талаар мэдэгдэл хийлээ",
//         "desc" : "Монголын Үндэсний дээд лиг, багуудын эздийн холбоо нарын хооронд үүссэн үл ойлголцлын улмаас Үндэсний дээд лигт өмнөх улиралд оролцож байсан зургаан баг энэ улирлын Дээд лигт оролцоход хүндрэлтэй нөхцөл байдал тулгарсан билээ."
//     }
// ]