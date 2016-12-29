 // Validate email regex
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

 // Validate phone number regex
     function isNumber(number) {
         var regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
         return regex.test(number);
     }

     /*
     *  Bootstrap showing popup after popup fix
     */
    function show_popup (button, modal_close, modal_show) {

        button.on('click', function(){
            jQuery(modal_close).modal('hide'); // add jQuery to fix error with underfind
            jQuery(modal_show).modal('show');
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


    // Validation email

        $('#btn-email').on('click', function() {
            var email = $('#email');
            var send_text =  email.val();
        if( isEmail(send_text)) {
            email.removeClass('input-error');
            email.addClass('input-ok');
            $('#pop-email').modal('hide');
            $('#pop-phone').modal('show');
            setTimeout(function(){
                $('body').addClass('modal-open');
            }, 500);
        }
        else {
            email.removeClass('input-ok');
            email.addClass('input-error');
        }
    });

    // Validation phone nubmer

    // Phone mask

    var number = $('#phone');
    number.mask("+7(999) 999-9999");

    $('#btn-phone').on('click', function() {

        var send_number =  number.val();

        if( isNumber(send_number) == true) {
            number.removeClass('input-error');
            number.addClass('input-ok');
            $('#pop-phone').modal('hide');
            $('#pop-size').modal('show');
            setTimeout(function(){
                $('body').addClass('modal-open');
            }, 500);
        }

        else {
            number.removeClass('input-ok');
            number.addClass('input-error');
        }
    });


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

            for (var i = 0; i < 2; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
            }
        });
    }
    else {

        $('.item').addClass('display');
    }





    // Function hide and show popups

    show_popup($('#btn-upload'), $('#upload-block')), $('#pop-email');
    // show_popup($('#btn-email'), $('#pop-email'), $('#pop-phone'));
    // show_popup($('#btn-phone'), $('#pop-phone'), $('#pop-size'));
    show_popup($('#btn-size'), $('#pop-size'), $('#pop-type'));
    show_popup($('#btn-type'), $('#pop-type'), $('#pop-type-option'));
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
