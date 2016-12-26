
$(document).ready(function(){
    // Desktop
    // Drop down list and castum scroll bar

    $(".submenu-sidebar").hide();

    $("#dropdown").click(function(){

        $(".submenu-sidebar").slideToggle('fast');
        $('.textarea-scrollbar').scrollbar({
            duration: 200
        });
        $('#rotate').toggleClass("fa-rotate-90");
    });

   // Mobile

    $(".sidebar-right").hide();
    $(".sidebar-left").hide();

    $("#dropdown-mob").click(function(){

        $(".sidebar-right").slideToggle('fast');
        $(".sidebar-left").slideToggle('fast');

        $('#rotate-katalog').toggleClass("fa-rotate-180");
    });

});