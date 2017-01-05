
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





    //watch for change on the
    $( "#file-img" ).change(function() {

        var input_img = this.files[0];

        var output_img = $('#output_img');

        var imageCompressor = new ImageCompressor;

        var compressorSettings = {
            toWidth : 100,
            toHeight : 100,
            mode : 'strict',
            quality : 0.6
        };

        imageCompressor.run(input_img, compressorSettings, output_img);


        var reader = new FileReader();
        reader.onload = function(event){

            the_url = event.target.result;
            $('#output-block').html("<img id='output_img' class='output-img' src='"+the_url+"' width='190px' height='110px' />");
        };



        if ( input_img != 0 ) {


            // renderImage(input_img);

            console.log("photo file has been chosen");
            //grab the first image in the fileList
            //in this example we are only loading one file.
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


        //when the file is read it triggers the onload event above.
        reader.readAsDataURL(input_img);
    });



    // Popup-size


    // под каждый radio button выводим суму, заголовок и изображение положеного размера размера
    var sizeTitle = $('.size');
    var price = $('.price');
    var output = $('#output-block');


    $(".radio-size").change(function() {

        if ($("#radio-1").is(":checked")) {

            sizeTitle.text('30 х 40 см');
            price.text(2013);

            $('#output-block').html("<img class='output-img' src='"+the_url+"' width='150px' height='90px' />");

        }
        if ($("#radio-2").is(":checked")) {
            sizeTitle.text('40 х 60 см');
            price.text(2014);
            $('#output-block').html("<img class='output-img' src='"+the_url+"' width='170px' height='100px' />");
        }
        if ($("#radio-3").is(":checked")) {
            sizeTitle.text('50 х 70 см — Хит!');
            price.text(3090);
            $('#output-block').html("<img class='output-img' src='"+the_url+"' width='190px' height='110px' />");
        }
        if ($("#radio-4").is(":checked")) {
            sizeTitle.text('60 х 80 см');
            price.text(2016);
            $('#output-block').html("<img class='output-img' src='"+the_url+"' width='200px' height='120px' />");
        }
        if ($("#radio-5").is(":checked")) {
            sizeTitle.text('75 х 105 см');
            price.text(2017);
            $('#output-block').html("<img class='output-img' src='"+the_url+"' width='240px' height='150px' />");
        }
        if ($("#radio-6").is(":checked")) {
            sizeTitle.text('90 х 110 см');
            price.text(2018);
            $('#output-block').html("<img class='output-img' src='"+the_url+"' width='260px' height='180px' />");
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
