$(function () {

    $('.menuToggle').on('click', function () {
        $('.navigationWrapper__listContainer').slideToggle(250, function () {
            if ($(this).css('display') == 'none') {
                $(this).removeAttr('style');
            }
        });
    });

    $( '.bigBack' ).on('click', function() {
        $('.navigationWrapper__listContainer').slideUp(250);
    })

});