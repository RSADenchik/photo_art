$(document).ready(function() {

    // YANDEX MAP
    ymaps.ready(init);
    function init () {
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
            balloonContent: '<div style = "margin-top: 30px; margin-left: 20px;" ><b>Оперный театр</b><br/>ул. Белинского, 59</div>'

        },
            {
                // пареметры метки
                iconLayout: 'default#image',
                iconImageHref: 'img/mapMark.png',
                draggable: true,
                iconImageSize: [76, 102],
                iconImageOffset: [-38, -102],

                //параметры описания

                balloonContentSize: [130, 130],
                balloonLayout: "default#imageWithContent",
                balloonImageHref: 'newbaloon.png',
                balloonImageOffset: [-5, -60],
                balloonImageSize: [150, 150],
                balloonShadow: false
        });

        // Добавление метки на карту
        myMap.geoObjects.add(myPlacemark);

    }

    // moda dialog center
    // $(function() {
    //     function reposition() {
    //         var modal = $(this),
    //             dialog = modal.find('.modal-dialog');
    //         modal.css('display', 'block');
    //
    //         // Dividing by two centers the modal exactly, but dividing by three
    //         // or four works better for larger screens.
    //         dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    //     }
    //     // Reposition when a modal is shown
    //     $('.modal').on('show.bs.modal', reposition);
    //     // Reposition when the window is resized
    //     $(window).on('resize', function() {
    //         $('.modal:visible').each(reposition);
    //     });
    // });

});
