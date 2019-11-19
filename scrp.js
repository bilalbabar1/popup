$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.showed').show();
    });
    $('.showed').click(function(){
        $('.showed').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.showed').hide();
    });
});