$(document).ready( function () {
    var md = new MobileDetect(window.navigator.userAgent);

    if (!md.mobile() && (!md.tablet()) ) {


        // YANDEX MAP

        ymaps.ready(function () {

            // Создание экземпляра карты и его привязка к контейнеру с
            // заданным id ("map")
            var myMap = new ymaps.Map('map', {
                // При инициализации карты, обязательно нужно указать
                // ее центр и коэффициент масштабирования
                center: [55.724643, 37.584604], // Москва
                zoom: 17
            });

            // Создание метки
            var myPlacemark = new ymaps.Placemark([55.724643, 37.584604], {

                    hintContent: 'Производство картин',
                    address: 'ул.Фрунзенская наб. д. 30 пав. 3А место 12',
                    websayt: ''
                },
                {
                    // пареметры метки
                    iconLayout: 'default#image',
                    iconImageHref: 'img/mapMark.png',
                    draggable: true,
                    iconImageSize: [76, 102],
                    iconImageOffset: [-38, -102],
                    hideIconOnBalloonOpen: false,

                    //параметры описания

                    balloonContentSize: [444, 382],
                    balloonLayout: "default#imageWithContent",
                    balloonImageHref: 'img/ballon.png',
                    balloonImageOffset: [-614, -254],
                    balloonImageSize: [444, 382],
                    balloonShadow: false

                });


            // Добавление метки на карту
            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
            myPlacemark.balloon.open();
        });


    }
    else

    {
        // YANDEX MAP mobile
        ymaps.ready(function () {

            // Создание экземпляра карты и его привязка к контейнеру с
            // заданным id ("map")
            var myMap = new ymaps.Map('map', {
                // При инициализации карты, обязательно нужно указать
                // ее центр и коэффициент масштабирования
                center: [55.724775, 37.584604], // Москва
                zoom: 16
            });

            // Создание метки
            var myPlacemark = new ymaps.Placemark([55.724643, 37.584604], {

                    hintContent: 'Производство картин',
                    address: 'ул.Фрунзенская наб. д. 30 пав. 3А место 12',
                    websayt: ''
                },
                {
                    // пареметры метки
                    iconLayout: 'default#image',
                    preset: 'islands#redIcon',
                    iconImageHref: 'img/mapMark.png',

                    draggable: true,
                    iconImageSize: [76, 102],
                    iconImageOffset: [-38, -102],
                    hideIconOnBalloonOpen: false,

                    //параметры описания

                    balloonContentSize: [300, 200],
                    balloonLayout: "default#imageWithContent",
                    balloonImageHref: 'img/ballon.png',
                    balloonImageOffset: [-176, -360],
                    balloonImageSize: [300, 200],
                    balloonShadow: false
                });


            // Добавление метки на карту
            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
            myMap.behaviors.disable('drag');
            myPlacemark.balloon.open();
        });
    }

    // Yandex map-in popup

    ymaps.ready(function () {

        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map")
        var myMap = new ymaps.Map('map-pre-pay-pop', {
            // При инициализации карты, обязательно нужно указать
            // ее центр и коэффициент масштабирования
            center: [55.724643, 37.584604], // Москва
            zoom: 16
        });
        var myPlacemarkPop = new ymaps.Placemark([55.724643, 37.584604],
            {
                hintContent: 'Производство картин',
                address: 'ул.Фрунзенская наб. д. 30 пав. 3А место 12',
                websayt: ''

            },
            {
                preset: 'islands#redIcon'
            });

        myMap.geoObjects.add(myPlacemarkPop);
        myMap.behaviors.disable('drag');
        myMap.behaviors.disable('scrollZoom')

    });

    ymaps.ready(function () {

        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map")
        var myMap = new ymaps.Map('map-pay-pop', {
            // При инициализации карты, обязательно нужно указать
            // ее центр и коэффициент масштабирования
            center: [55.724643, 37.584604], // Москва
            zoom: 16
        });

        var myPlacemarkPop = new ymaps.Placemark([55.724643, 37.584604],
            {
                hintContent: 'Производство картин',
                address: 'ул.Фрунзенская наб. д. 30 пав. 3А место 12',
                websayt: ''

            },
            {
                preset: 'islands#redIcon'
            });

        myMap.geoObjects.add(myPlacemarkPop);
        myMap.behaviors.disable('drag');
        myMap.behaviors.disable('scrollZoom')

    });
});