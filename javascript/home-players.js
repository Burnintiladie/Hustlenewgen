class League {
    constructor(league) 
    {
        this.teamname = league.teamname;
        this.logo = league.logo;
        this.link = league.link;
        this.rosters = league.rosters;
    }

    Render() 
    {
        return `
            <li class="drop">
                <a href="${this.link}"><img src="${this.logo}" alt="${this.teamname}"></a>
                <div class="drop-player">
                    ${this.RenderRosters()}
                </div>
            </li>`;
    }

    RenderRosters() 
    {
        let rostersHTML = "";
        for (const roster of this.rosters) 
        {
            rostersHTML += `
                <section class="column">
                    <h3>${roster.position}</h3>
                        ${this.RenderPlayers(roster.players)}
                </section>`;
        }
        return rostersHTML;
    }

    RenderPlayers(players) 
    {
        return players.map(player => `
            <a href="${player.playerlink}">
                <span>${player.number}</span>
                ${player.playername}
            </a>`).join('');
    }
}


class App
{
    constructor(targetid)
    {
        this.target = targetid;
    }
    init()
    {
        const teams = [
            {
                teamname: "Erdenet Miners",
                logo: "assets/miners.png",
                link: "TeamLookup.html",
                rosters: [
                    {
                        position: "Point Guard",
                        players: [
                            {
                                number: "04",
                                playername: "Ганцолмон Ган-Эрдэнэ",
                                playerlink: "Player.html"
                            },
                            {
                                number: 17,
                                playername: "Ганболд Баттөр",
                                playerlink: "Player.html"
                            },
                            {
                                number: 44,
                                playername: "Ганцолмон Болор-Эрдэнэ",
                                playerlink: "Player.html"
                            },
    
                        ]
                    },
                    {
                        position: "Shooting Guard",
                        players: [
                            {
                                number: "01",
                                playername: "Ариунболд Тэмүүжин",
                                playerlink: "Player.html"
                            },
                            {
                                number: 12,
                                playername: "Энхбаатар Мөнхбаяр",
                                playerlink: "Player.html"
                            },
                            {
                                number: 27,
                                playername: "Энхбат Дорж-Арилд",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Small Forward",
                        players: [
                            {
                                number: "03",
                                playername: "Pendarvis Williams",
                                playerlink: "Player.html"
                            },
                            {
                                number: 11,
                                playername: "Намжилдорж Золжаргал",
                                playerlink: "Player.html"
                            },
                            {
                                number: 35,
                                playername: "Анхбаяр Бямбадорж",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Power Forward",
                        players: [
                            {
                                number: 14,
                                playername: "Тунгалаг Санчир",
                                playerlink: "Player.html"
                            },
                            {
                                number: 10,
                                playername: "Очиржанцан Одмагнай",
                                playerlink: "Player.html"
                            },
                            {
                                number: 25,
                                playername: "Пүрэвжав Болортулга",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Center",
                        players: [
                            {
                                number: 13,
                                playername: "Онолбаатар Энхбаатар",
                                playerlink: "Player.html"
                            },
                            {
                                number: 33,
                                playername: "Оюунболд Очирбат",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                ]
            },
            {
                teamname: "BCH Garid",
                logo: "assets/garid.png",
                link: "TeamLookup.html",
                rosters: [
                    {
                        position: "Point Guard",
                        players: [
                            {
                                number: 22,
                                playername: "Мөнхжаргал Тэлмэн",
                                playerlink: "Player.html"
                            },
                            {
                                number: 25,
                                playername: "Аззаяа Батхуяг",
                                playerlink: "Player.html"
                                
                            },
                            {
                                number: 25,
                                playername: "Батмөнх Төгөлдөр",
                                playerlink: "Player.html"
                            },
    
                        ]
                    },
                    {
                        position: "Shooting Guard",
                        players: [
                            {
                                number: 99,
                                playername: "Devoe Joseph",
                                playerlink: "Player.html"
                            },
                            {
                                number: 17,
                                playername: "Хүрэлтогоо Мөнхтөр",
                                playerlink: "Player.html"
                            },
                            {
                                number: "00",
                                playername: "Бат-Эрдэнэ Болдбаатар",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Small Forward",
                        players: [
                            {
                                number: "06",
                                playername: "Очирбат Эрдэнэцогт",
                                playerlink: "Player.html"
                            },
                            {
                                number: 25,
                                playername: "Даваадорж Дөлгөөнмөрөн",
                                playerlink: "Player.html"
                            },
                            {
                                number: 24,
                                playername: "Доржсүрэн Рэнцэнтогтох",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Power Forward",
                        players: [
                            {
                                number: "08",
                                playername: "Энхбат Дөлгөөн",
                                playerlink: "Player.html"
                            },
                            {
                                number: 12,
                                playername: "Батаа Мөнхболд",
                                playerlink: "Player.html"
                            },
                            {
                                number: 13,
                                playername: "Оюунцэцэг Ууганбаяр",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Center",
                        players: [
                            {
                                number: 11,
                                playername: "Цогт Отгонжаргал",
                                playerlink: "Player.html"
                            },
                            {
                                number: 23,
                                playername: "Miliosevic Nemanja",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                ]
            },
            {
                teamname: "Bishrelt Metall",
                logo: "assets/metal.png",
                link: "TeamLookup.html",
                rosters: [
                    {
                        position: "Point Guard",
                        players: [
                            {
                                number: "04",
                                playername: "Түмэнбаяр Ууганбаяр",
                                playerlink: "Player.html"
                            },
                            {
                                number: "08",
                                playername: "Энхцогт Дөлгөөн",
                                playerlink: "Player.html"
                            },
                            {
                                number: "01",
                                playername: "Энхбат Тожилдорж",
                                playerlink: "Player.html"
                            },
    
                        ]
                    },
                    {
                        position: "Shooting Guard",
                        players: [
                            {
                                number: 12,
                                playername: "Зоригтбаатар Энхтөр",
                                playerlink: "Player.html"
                            },
                            {
                                number: "09",
                                playername: "Мөнхбат Идэрсайхан",
                                playerlink: "Player.html"
                            },
                            {
                                number: "02",
                                playername: "Отгонбаяр Сайнбаяр",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Small Forward",
                        players: [
                            {
                                number: "00",
                                playername: "Jahlil Tripp",
                                playerlink: "Player.html"
                            },
                            {
                                number: "03",
                                playername: "Амар Энхбаясгалан",
                                playerlink: "Player.html"
                            },
                            {
                                number: "06",
                                playername: "Батзориг Сүхбат",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Power Forward",
                        players: [
                            {
                                number: 18,
                                playername: "Насанбат Мөнхчөдөр",
                                playerlink: "Player.html"
                            },
                            {
                                number: 35,
                                playername: "Гантулга Цэлмэг",
                                playerlink: "Player.html"
                            },
                            {
                                number: 24,
                                playername: "Лхагважав Цэдэвсүрэн",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Center",
                        players: [
                            {
                                number: 20,
                                playername: "Даваасамбуу Дэлгэрням",
                                playerlink: "Player.html"
                            },
                            {
                                number: 11,
                                playername: "Даваасүрэн Адъяасүрэн",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                ]
            },
            {
                teamname: "IHC Apes",
                logo: "assets/ihc.png",
                link: "TeamLookup.html",
                rosters: [
                    {
                        position: "Point Guard",
                        players: [
                            {
                                number: "06",
                                playername: "Мягмарсүрэн Өлзий-Орших",
                                playerlink: "Player.html"
                            },
                            {
                                number: 24,
                                playername: "Баярсайхан Энхсайхан",
                                playerlink: "Player.html"
                            },
                            {
                                number: 27,
                                playername: "Бат-Отгон Билгүүн",
                                playerlink: "Player.html"
                            },
    
                        ]
                    },
                    {
                        position: "Shooting Guard",
                        players: [
                            {
                                number: 13,
                                playername: "Цогтбаатар Сэргэлэнбаатар",
                                playerlink: "Player.html"
                            },
                            {
                                number: 15,
                                playername: "Туул Мэндбаяр",
                                playerlink: "Player.html"
                            },
                            {
                                number: "09",
                                playername: "Цагаанбаатар Санчир",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Small Forward",
                        players: [
                            {
                                number: 10,
                                playername: "Anthony Smith",
                                playerlink: "Player.html"
                            },
                            {
                                number: 19,
                                playername: "Нарангэрэл Батбаяр",
                                playerlink: "Player.html"
                            },
                            {
                                number: "08",
                                playername: "Нэмэхбаяр Эрдэмтөгс",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Power Forward",
                        players: [
                            {
                                number: 21,
                                playername: "Сүхбаатар Эрдэнэдалай",
                                playerlink: "Player.html"
                            },
                            {
                                number: 77,
                                playername: "Батаа Тулуй",
                                playerlink: "Player.html"
                            },
                            {
                                number: 34,
                                playername: "Нямдорж Ганбаатар",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Center",
                        players: [
                            {
                                number: 23,
                                playername: "Alexander Mitrovic",
                                playerlink: "Player.html"
                            },
                            {
                                number: 14,
                                playername: "Энхтайван Цэрэнбаатар",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                ]
            },
            {
                teamname: "Xac Broncos",
                logo: "assets/huleguud.png",
                link: "TeamLookup.html",
                rosters: [
                    {
                        position: "Point Guard",
                        players: [
                            {
                                number: "04",
                                playername: "Отгонбаатар Сэргэлэн",
                                playerlink: "Player.html"
                            },
                            {
                                number: "01",
                                playername: "Эрхэмбаяр Эрмүүнзаяа",
                                playerlink: "Player.html"
                            },
                            {
                                number: 77,
                                playername: "Ганбаатар Насанжаргал",
                                playerlink: "Player.html"
                            },
    
                        ]
                    },
                    {
                        position: "Shooting Guard",
                        players: [
                            {
                                number: 20,
                                playername: "Элбэг Түшиг",
                                playerlink: "Player.html"
                            },
                            {
                                number: "03",
                                playername: "Баатар-Эрдэнэ Барсболд",
                                playerlink: "Player.html"
                            },
                            {
                                number: 12,
                                playername: "Даваадорж Мөнхтүвшин",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Small Forward",
                        players: [
                            {
                                number: "05",
                                playername: "Ариунболд Ананд",
                                playerlink: "Player.html"
                            },
                            {
                                number: "00",
                                playername: "Чулуунбаатар Ихбаяр",
                                playerlink: "Player.html"
                            },
                            {
                                number: 13,
                                playername: "Мөнх-Очир Цэнгүүн",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Power Forward",
                        players: [
                            {
                                number: 10,
                                playername: "Баттүвшин Билгүүн",
                                playerlink: "Player.html"
                            },
                            {
                                number: 14,
                                playername: "Ганга Билгүүн",
                                playerlink: "Player.html"
                            },
                            {
                                number: 11,
                                playername: "Чингис Тэмүүлэн",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Center",
                        players: [
                            {
                                number: 15,
                                playername: "Nicola Tadic",
                                playerlink: "Player.html"
                            },
                            {
                                number: "07",
                                playername: "Алтангэрэл Азбаяр",
                                playerlink: "Player.html"
                            },
                            {
                                number: 25,
                                playername: "Сандагдорж Биндэрьяа",
                                playerlink: "Player.html"
                            }
                        ]
                    },
                ]
            },
            {
                teamname: "Ulaanbaatar TLG",
                logo: "assets/daichid.png",
                link: "TeamLookup.html",
                rosters: [
                    {
                        position: "Point Guard",
                        players: [
                            {
                                number: "06",
                                playername: "Баасанжав Ган-Эрдэнэ",
                                playerlink: "Player.html"
                            },
                            {
                                number: "07",
                                playername: "Батболд Дархантөгс",
                                playerlink: "Player.html"
                            },
                            {
                                number: 14,
                                playername: "Сүхбаатар Тулга",
                                playerlink: "Player.html"
                            },
    
                        ]
                    },
                    {
                        position: "Shooting Guard",
                        players: [
                            {
                                number: "01",
                                playername: "Гансүх Билгүүн",
                                playerlink: "Player.html"
                            },
                            {
                                number: 12,
                                playername: "Anthony Harris",
                                playerlink: "Player.html"
                            },
                            {
                                number: "08",
                                playername: "Оюунболд Цэлмэг",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Small Forward",
                        players: [
                            {
                                number: 24,
                                playername: "Marcus Hammonds",
                                playerlink: "Player.html"
                            },
                            {
                                number: "09",
                                playername: "Энхтайван Цэвэлдорж",
                                playerlink: "Player.html"
                            },
                            {
                                number: "05",
                                playername: "Баатарсүрэн Батлхагва",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Power Forward",
                        players: [
                            {
                                number: 13,
                                playername: "Эрдэнэцогт Ирмүүн",
                                playerlink: "Player.html"
                            },
                            {
                                number: 11,
                                playername: "Санчигдан Өрнүүнбилэг",
                                playerlink: "Player.html"
                            },
                            {
                                number: "05",
                                playername: "Эрдэнэбат Хосбаяр",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Center",
                        players: [
                            {
                                number: 21,
                                playername: "Ганбат Мандахбаяр",
                                playerlink: "Player.html"
                            },
                            {
                                number: 33,
                                playername: "Зургаажин Энх-Учрал",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                ]
            },
            {
                teamname: "Zavkhan Brothers",
                logo: "assets/brothers.png",
                link: "TeamLookup.html",
                rosters: [
                    {
                        position: "Point Guard",
                        players: [
                            {
                                number: "00",
                                playername: "Мөнхтөр Баасандорж",
                                playerlink: "Player.html"
                            },
                            {
                                number: "05",
                                playername: "Энхбаяр Мөнхтулга",
                                playerlink: "Player.html"
                            },
                            {
                                number: "09",
                                playername: "Баасанцэрэн Төгөлдөр",
                                playerlink: "Player.html"
                            },
    
                        ]
                    },
                    {
                        position: "Shooting Guard",
                        players: [
                            {
                                number: "03",
                                playername: "Алтанчимэг Ган-Эрдэнэ",
                                playerlink: "Player.html"
                            },
                            {
                                number: 26,
                                playername: "Батбаяр Энх-Амгалан",
                                playerlink: "Player.html"
                            },
                            {
                                number: "08",
                                playername: "Сугар Мөнхбаатар",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Small Forward",
                        players: [
                            {
                                number: "09",
                                playername: "Лхагва Авирмэд",
                                playerlink: "Player.html"
                            },
                            {
                                number: 12,
                                playername: "Балт Барсболд",
                                playerlink: "Player.html"
                            },
                            {
                                number: 10,
                                playername: "Пүрэвсүрэн Дашдорж",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Power Forward",
                        players: [
                            {
                                number: 24,
                                playername: "Цэрмаа Батзаяа",
                                playerlink: "Player.html"
                            },
                            {
                                number: 13,
                                playername: "Ууганбаяр Чингүүн",
                                playerlink: "Player.html"
                            },
                            {
                                number: "01",
                                playername: "Батхүү Тэмүүжин",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Center",
                        players: [
                            {
                                number: 34,
                                playername: "Benson Keith",
                                playerlink: "Player.html"
                            },
                            {
                                number: 17,
                                playername: "Эрдэнэхуяг Агваанданзан",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                ]
            },
            {
                teamname: "Nalaikh Bison",
                logo: "assets/bison.png",
                link: "TeamLookup.html",
                rosters: [
                    {
                        position: "Point Guard",
                        players: [
                            {
                                number: "08",
                                playername: "Элбэг Тулга",
                                playerlink: "Player.html"
                            },
                            {
                                number: "06",
                                playername: "Brandon Brown",
                                playerlink: "Player.html"
                            },
                            {
                                number: 11,
                                playername: "Хүрэлбаатар Оргил",
                                playerlink: "Player.html"
                            },
    
                        ]
                    },
                    {
                        position: "Shooting Guard",
                        players: [
                            {
                                number: 23,
                                playername: "Баянзул Бат-Эрдэнэ",
                                playerlink: "Player.html"
                            },
                            {
                                number: "02",
                                playername: "Шинэбилэг Мөнх-Эрдэнэ",
                                playerlink: "Player.html"
                            },
                            {
                                number: "03",
                                playername: "Жаргал Жамсрандорж",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Small Forward",
                        players: [
                            {
                                number: 10,
                                playername: "Ганболд Лхагвацэнд",
                                playerlink: "Player.html"
                            },
                            {
                                number: "00",
                                playername: "Эрдэнэтогтох Пүрэвдорж",
                                playerlink: "Player.html"
                            },
                            {
                                number: 88,
                                playername: "Ариунбаатар Сүхбат",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Power Forward",
                        players: [
                            {
                                number: "09",
                                playername: "Antonio Hester",
                                playerlink: "Player.html"
                            },
                            {
                                number: 13,
                                playername: "Сундуй Гарьд",
                                playerlink: "Player.html"
                            },
                            {
                                number: "04",
                                playername: "Баярцогт Даваасайхан",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                    {
                        position: "Center",
                        players: [
                            {
                                number: "01",
                                playername: "Өсөхбаяр Мөнхбаяр",
                                playerlink: "Player.html"
                            },
                            {
                                number: 99,
                                playername: "Сайнбаяр Дугар-Эрдэнэ",
                                playerlink: "Player.html"
                            },
                        ]
                    },
                ]
            },
        ]

        const targetElement = document.getElementById(this.target);
        for (const team of teams) 
        {
            const league = new League(team);
            targetElement.innerHTML += league.Render();
        }
    }
}