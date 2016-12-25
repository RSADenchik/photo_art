
$(document).ready(function(){

    // Drop down list and castum scroll bar

    $(".submenu-sidebar").hide();

    $("#dropdown").click(function(){

        $(".submenu-sidebar").slideToggle('fast');
        $('.textarea-scrollbar').scrollbar({
            duration: 200
        });
        $('#rotate').toggleClass("fa-rotate-90");
    });

    // $(function () {
    //
    //     var location = window.location.href;
    //     var cur_url = '/' + location.split('/').pop();
    //
    //     $('.breadcrumbs-item').each(function() {
    //         var link = $(this).find('a').attr('href');
    //
    //         if(cur_url == link) $(this).addClass('current');
    //     });
    //
    // });


});