import $ from "jquery"

$( document ).ready(function() {

    var ShangChiData = [
        {
            "title": 'ШАН-ЧИ "ЛЕГЕНДА ДЕСЯТИ КОЛЕЦ"',
            "desc": "Гонконгский боевик плюс драма: блокбастер про нового супергероя Marvel теперь в подписке на Кинопоиске",
            "cast": "Симу Лю, Тони Люн Чу Вай, Аквафина",
            "director": "Дестин Дэниел Креттон",
            "logo": "https://avatars.mds.yandex.net/get-bunker/128809/f7e8bc8f72cbd418e356445fa88e86f97ad2721f/800x124",
            "vid": "https://widgets.kinopoisk.ru/discovery/trailer/180241?noAd=1&embedId=94631716-1b6e-4ee0-a1d2-c1763a222c99&hidden=*&muted=1&loop=1&autoplay=1&from=&extraTrailers=&onlyPlayer=1"
        }
    ];

    var atCinema = [
        {
            "title": "Келинка Сабина 3",
            "desc": "2020, комедия",
            "rate": "-",
            "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/aa394cbd-3fd3-4381-aba0-e980f456beb9/140x210",
        },
        {
            "title": "Анчартед: На картах не закончится",
            "desc": "2020, боевик",
            "rate": "7.1",
            "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/3ddc0946-5e53-4f7a-b355-cd42c2280f9e/140x210",
        },
        {
            "title": "Смерть на Ниле",
            "desc": "2020, детектив",
            "rate": "6.6",
            "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a8bcc32e-9f30-4bc2-b30c-cf9cd0409dad/140x210",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },        
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },        
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },       
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },
        {
            "title": "",
            "desc": "",
            "rate": "",
            "img": "",
        },                                     
    ];

    console.log(ShangChiData);
    console.log(atCinema);

    // $.each(atCinema, function (index, value) {
    //     $('.atCinemaNow .movieDisp').append(
    //         "<div class='movieSlot mSlot-" + index + "'>" +
    //         "<img>" +
    //         "<div class='info'>" +
    //             "<h1></h1>" +
    //             "<small></small>" +
    //             "<p class='desc'></p>" +
    //             "<div class='scores'>" +
    //                 "<p class='meta'></p>" +
    //                 "<p class='user'></p>" +
    //             "</div>" +
    //         "</div>" +
    //         "</div>");
    //     $('.atCinemaNow .singleBlock-' + index + ' h1').append(value.id + ". " + value.title);
    //     $('.atCinemaNow .singleBlock-' + index + ' img').attr('src', value.img);
    //     $('.atCinemaNow .singleBlock-' + index + ' .desc').append(value.desc);
    //     $('.atCinemaNow .singleBlock-' + index + ' small').append(value.date);

    //     $('.search-block').append(
    //         "<div class='single searchID-" + index + " justify-content-start align-items-center'>" +
    //             "<div class='res-slot'>" +
    //                 "<p class='rate'><span></span></p>" +
    //             "</div>" +
    //             "<div class='res-slot'>" +
    //                 "<p class='title'></p>" +
    //                 "<p class='date'></p>" +            
    //             "</div>" +               
    //         "</div>");

    //         $('.search-block .searchID-' + index + ' .rate span').append(value.meta_s);
    //         $('.search-block .searchID-' + index + ' .title').append(value.title.toLowerCase());
    //         $('.search-block .searchID-' + index + ' .date').append(value.date);

    // });    

    // var Quest = [
    //     {
    //         "q": "Кто купит сенсею Гориллу?",
    //         "a": "Томила",
    //         "b": "Расул",
    //         "c": "Карина",
    //         "answer": 3,
    //     },
    //     {
    //         "q": "Сходит ли сенсей сегодня на Бэтмена?",
    //         "a": "Да",
    //         "b": "Нет",
    //         "c": "Зависит от обстоятельств",
    //         "answer": 1,
    //     },
    //     {
    //         "q": "Что делать, когда студент просит о помощи?",
    //         "a": "Помочь",
    //         "b": "Проигнорировать",
    //         "c": "Договориться",
    //         "answer": 2,
    //     },
    //     {
    //         "q": "Важно ли сенсею, что все студенты присутствовали на уроке?",
    //         "a": "Да",
    //         "b": "Нет",
    //         "c": "Все кроме Расула",
    //         "answer": 3,
    //     },                        
    // ];

    // console.log(Quest);

    // $.each(Quest, function (index, value) {
    //     $('.testy .quiz').append(
    //         "<div class='prompt questID-" + index + " ml-6 mt-6'>" +
    //             "<ol>" + 
    //                 "<p class='pl-5 text-xl font-bold'>" + value.q + "</p>" +

    //                 "<li>" +
    //                 "<input type='radio' name='promptQ-" + index + "' id='QChoice1' value='A'>" +
    //                 "<label class='pl-2 text-xl' for='QChoice1'>" + value.a + "</label>" +
    //                 "</li>" +

    //                 "<li>" +
    //                 "<input type='radio' name='promptQ-" + index + "' id='QChoice2' value='B'>" +
    //                 "<label class='pl-2 text-xl' for='QChoice2'>" + value.b + "</label>" +
    //                 "</li>" +

    //                 "<li>" +
    //                 "<input type='radio' name='promptQ-" + index + "' id='QChoice3' value='C'>" +
    //                 "<label class='pl-2 text-xl' for='QChoice3'>" + value.c + "</label>" +
    //                 "</li>" +                   

    //             "</ol>" +            
    //         "</div>");

    // }); 

    // if ($('div:not(:has(:radio:checked))').length) {
    //     alert("At least one group is blank");
    // }

    // var Inps = [];
    // console.log(Inps);

    // $('.submit').on('click', function() {
    //     Inps = [
    //         $('.fm1').val(),
    //         $('.fm2').val(),
    //         $('.fm3').val(),
    //         $('.fm4').val(),
    //         $('.fm5').val()
    //     ];
    //     alert(Inps); 
    // });

});