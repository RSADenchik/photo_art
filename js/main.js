
     /*
     *  Bootstrap showing popup after popup fix
     */
    function show_popup (button, modal_close, modal_show) {

        button.on('click', function(){
            modal_close.modal('hide');
            modal_show.modal('show');
            setTimeout(function(){
                $('body').addClass('modal-open');
            }, 400);
        });
    }

$(document).ready(function() {

    var md = new MobileDetect(window.navigator.userAgent);

    if (!md.mobile() && (!md.tablet()) ) {


        // YANDEX MAP
        ymaps.ready(inity);
        function inity() {
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

                    //параметры описания

                    balloonContentSize: [356, 294],
                    balloonLayout: "default#imageWithContent",
                    balloonImageHref: 'img/ballon.png',
                    balloonImageOffset: [-838, -250],
                    balloonImageSize: [356, 294],
                    balloonShadow: false
                });

            // Добавление метки на карту
            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
        }

    }
    else

        {
        // YANDEX MAP mobile
        ymaps.ready(init);
        function init() {

            // Создание экземпляра карты и его привязка к контейнеру с
            // заданным id ("map")
            var myMap = new ymaps.Map('map', {
                // При инициализации карты, обязательно нужно указать
                // ее центр и коэффициент масштабирования
                center: [55.724775, 37.584604], // Москва
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

                    //параметры описания

                    balloonContentSize: [356, 294],
                    balloonLayout: "default#imageWithContent",
                    balloonImageHref: 'img/ballon.png',
                    balloonImageOffset: [-160, -350],
                    balloonImageSize: [300, 294],
                    balloonShadow: false
                });

            // Добавление метки на карту
            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
            myMap.behaviors.disable('drag');
        }
    }

    // ease scroll on header link

    $('.list-item-link').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 3000, 'easeInCubic');
        }
        return false;
    });


    // Phone mask
    $("#phone").mask("+7(999) 999-9999");


    // Calendar initialize

    addEventListener('DOMContentLoaded', function () {
        pickmeup('.single', {
            flat : true
        });
    });

    //Zoomer

    var img = $('.perfect-img');

    img.elevateZoom({
            responsive: false,
            zoomWindowWidth: '100%',
            zoomType: "lens",
            lensShape: "round",
            lensSize: 120,
            zoom: 4

    });

    //Remove
    $('.zoomContainer').remove();
    img.removeData('elevateZoom');
    img.removeData('zoomImage');

    //Re-create
    img.elevateZoom({
        responsive: true,
        zoomWindowWidth: '100%',
        zoomType: "lens",
        lensShape: "round",
        lensSize: 120,
    });

    var img1 = $('.prop-img');

    //Create
    img1.elevateZoom({
        responsive: false,
        zoomWindowWidth: 100,
        zoomType: "lens",
        lensShape: "round",
        lensSize: 120,
        scrollZoom: true
    });

    //Remove
        $('.zoomContainer').remove();
        img1.removeData('elevateZoom');
        img1.removeData('zoomImage');

    //Re-create
        img1.elevateZoom({
            responsive: false,
            zoomWindowWidth: 100,
            zoomType: "lens",
            lensShape: "round",
            lensSize: 120,
            scrollZoom: true,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500
        });


    //  Fancybox gallery image


        $('.fancybox').fancybox({
            padding: 15,
            openEasing: 'easeInQuad',
            closeEasing: 'easeOutQuad',
            minWidth: '33%',
            maxHeight: '500px',
            openSpeed: 'slow',
            closeSpeed: 'slow',
            nextSpeed: 'normal',
            prevSpeed: 'normal'
        });



    // Button Bootstrap

        $("#btn-prev").click(function () {
            $("#gallery").carousel("prev");
        });

        // Go to the next item carousel
        $("#btn-next").click(function () {
            $("#gallery").carousel("next");
        });

        // Multislider bootstrap

        $('.multi-item-carousel').carousel({
            interval: false
        });


        $('.container-flex .item').each(function () {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            if (!md.mobile() && (!md.tablet()) ) {

                for (var g = 0; g < 10; g++) {
                    next = next.next();
                    if (!next.length) {
                        next = $(this).siblings(':first');
                    }

                    next.children(':first-child').clone().appendTo($(this));
                }
            }
            else {
                for (var i = 0; i < 2; i++) {
                    next = next.next();
                    if (!next.length) {
                        next = $(this).siblings(':first');
                    }

                    next.children(':first-child').clone().appendTo($(this));
                }
            }

        });


    // Show for mobile




                // for (var i = 0; i < 10; i++) {
                //     next = next.next();
                //     if (!next.length) {
                //         next = $(this).siblings(':first');
                //     }
                //
                //     next.children(':first-child').clone().appendTo($(this));
                // }



            // Show for desktop




    // Function hide and show popups

    show_popup($('#btn-email'), $('#pop-email'), $('#pop-phone'));
    show_popup($('#btn-phone'), $('#pop-phone'), $('#pop-size'));
    show_popup($('#btn-size'), $('#pop-size'), $('#pop-type-option'));
    show_popup($('#btn-type-option'), $('#pop-type-option'), $('#pop-krekelur'));
    show_popup($('#btn-krek'), $('#pop-krekelur'), $('#pop-baget'));
    show_popup($('#btn-baget'), $('#pop-baget'), $('#pop-package'));
    show_popup($('#btn-package'), $('#pop-package'), $('#pop-date'));
    show_popup($('#btn-date'), $('#pop-date'), $('#pop-stock'));
    show_popup($('#btn-stock-prepay'), $('#pop-stock'), $('#pop-prepay'));
    show_popup($('#btn-stock-pay'), $('#pop-stock'), $('#pop-pay'));


    $('.modal').on('show.bs.modal', function () {
        if ($(document).height() > $(window).height()) {
            // no-scroll
            $('body').addClass("modal-open-noscroll");
        }
        else {
            $('body').removeClass("modal-open-noscroll");
        }
    });
    $('.modal').on('hide.bs.modal', function () {
        $('body').removeClass("modal-open-noscroll");
    });

});
