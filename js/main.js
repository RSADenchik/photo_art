
     /*
     *  Bootstrap showing popup after popup fix
     */
    function show_popup (button, modal_close, modal_show) {

        button.on('click', function(){
            $(modal_close).modal('hide'); // add jQuery to fix error with underfind
            $(modal_show).modal('show');
            setTimeout(function(){
                $('body').addClass('modal-open');
            }, 600);
        });
    }

     $(document).ready(function() {

    var md = new MobileDetect(window.navigator.userAgent);


    // ease scroll on header link

    $('.list-item-link').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 3000, 'easeInCubic');
        }
        return false;
    });



         //watch for change on the

     var fileInput = $( "#file-img" ); // input type=file

         fileInput.change(function() {

        var input_img = this.files[0];

        if ( input_img != 0 ) {

            console.log("photo file has been chosen");
            console.log(input_img.name);
            console.log(input_img.size);

            $('#pop-email').modal('show');
            setTimeout(function () {
                $('body').addClass('modal-open');
            }, 500);
        }

        else {
            input_img.length = 0;
        }

            fileInput.val("");
    });







    // под каждый radio button выводим суму, заголовок и изображение положеного размера размера

 var radioPick = $('.radio-size'); // Radio buttons
 var drawSize = $('.size'); // Выводит выбраный размер изображения

 var beginPriceOutput = $('#startPrice'); // Выводит начальную сумму в popup-size
 var typePriceOutput = $('#typePrice'); // Выводит сумму в popup-type

 var picType = $('.pic-type');  // Тип картины
 var picPrice = $('.price-type'); // Цена которая выводиться из массива выше за выбраный тип картины
 //
 var picOil = $('#picOil'); // Картина маслом
 var priceOil = $('#priceOil'); // Цена на картину маслом ( исключение для размера 30 x 40)
 //
 //
 var picSimple = $('#picSimple'); // Картина, простая печать
 var priceSimple = $('#priceSimple'); // Цена на простую печать ( Для всех размеров = 0 )

        // По изменению радио кнопок

         radioPick.change(function() {

             if ($(this).is(":checked")) {

                 // Выводить изображения

                 var width = $(this).data("width");
                 var height = $(this).data("height");
                 $(".output-img").attr("width", width).attr("height", height);

                 // Выводит выбраный размер

                 var size = $(this).data("size"); // Берет размеры с data атрибута
                 drawSize.html(size); // Выводим размер над фотографией


                 var startPrice = $(this).data("start-price");  // Берем из дата атрибута стартовую цену и записываем в переменную
                 beginPriceOutput.html(startPrice);  // Выводим переменную со стартовой ценной в size-popup
                 typePriceOutput.html(startPrice);  // Выводим переменную со стартовой ценной в type-popup

                 console.log("Start price"); // Выводим сообщение о стартовой цене в консоль
                 console.log(startPrice);  // выводим значение стартовой цены в консоль

                 var typePrice = $(this).data("type-price"); // Берем из дата атрибута цену за картину и записываем в переменную
                 
                 picPrice.html(typePrice);
                 priceSimple.html(0);
                 priceOil.html(4490);

                 console.log("Цена за тип картины");
                 console.log(typePrice);
             }




             picType.on('click', function() {

                 if ($(this).hasClass('pic-type-active')) {
                     $(this).removeClass('pic-type-active');
                 }
                 else {
                     picType.removeClass('pic-type-active');
                     $(this).addClass('pic-type-active');
                 }


                 var currentPrice = startPrice + typePrice;

                 typePriceOutput.html(currentPrice);

                 console.log("Сумма");
                 console.log(currentPrice);


             });
         });









 // Popup-type

         $('#btn-type').on('click', function() {

            if (picOil.hasClass('pic-type-active')) {

                $('#pop-type').modal('hide');
                $('#pop-krekelur').modal('show');
                setTimeout(function(){
                    $('body').addClass('modal-open');
                }, 600);
            }

            else if (picSimple.hasClass('pic-type-active')) {

                $('#pop-type').modal('hide');
                $('#pop-type-option').modal('show');
                setTimeout(function(){
                    $('body').addClass('modal-open');
                }, 600);
             }

            else {
                $('#pop-type').modal('hide');
                $('#pop-baget').modal('show');
                setTimeout(function(){
                    $('body').addClass('modal-open');
                }, 600);
            }
         });



     //   Krekelur-popup


         $('btn-krek').on('click', function () {

             var startPrice = result.data("start-price");
             var addPrice = $(this).data("price");
             var currentPrice = startPrice + addPrice;

             console.log(startPrice);
             console.log(addPrice);

             result.html(currentPrice);
             result.attr("data-start-price", currentPrice);
         });


         // Function hide and show popups
         show_popup($('#btn-email'), $('#pop-email'), $('#pop-phone'));
         show_popup($('#btn-phone'), $('#pop-phone'), $('#pop-size'));
         show_popup($('#btn-size'), $('#pop-size'), $('#pop-type'));
         // show_popup($('#btn-type'), $('#pop-type'), $('#pop-type-option'));
         show_popup($('#btn-type-option'), $('#pop-type-option'), $('#pop-krekelur'));
         show_popup($('#btn-krek'), $('#pop-krekelur'), $('#pop-baget'));
         show_popup($('#btn-baget'), $('#pop-baget'), $('#pop-package'));
         show_popup($('#btn-package'), $('#pop-package'), $('#pop-date'));
         show_popup($('#btn-date'), $('#pop-date'), $('#pop-stock'));
         show_popup($('#btn-stock-prepay'), $('#pop-stock'), $('#pop-prepay'));
         show_popup($('#btn-stock-pay'), $('#pop-stock'), $('#pop-pay'));
         show_popup($('.option-back'), $('#pop-type-option, #pop-krekelur, #pop-baget, #pop-package, #pop-stock'), $('#pop-type'));
         show_popup($('#type-option-no'), $('#pop-type-option'), $('#pop-krekelur'));
         show_popup($('#krekelur-no'), $('#pop-krekelur'), $('#pop-baget'));
         show_popup($('#baget-no'), $('#pop-baget'), $('#pop-package'));
         show_popup($('#package-no'), $('#pop-package'), $('#pop-date'));










         // Calendar initialize

    addEventListener('DOMContentLoaded', function () {
        pickmeup('.single', {
            flat : true
        });
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
    if ( md.mobile() || ( md.tablet()) ) {

        $('.item').removeClass('display');

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



        $('.multi-item-carousel .item').each(function () {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

        });
    }
    else {

        $('.item').addClass('display');
    }


    // Fix margin-right open modal popup

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
