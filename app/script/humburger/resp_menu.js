$(function () {

    $('.menuToggle').on('click', function () {
        $('.navigationWrapper__listContainer').slideToggle(250, function () {
            if ($(this).css('display') == 'none') {
                $(this).removeAttr('style');
            }
        });
        $('.navigationWrapper__listContainer').attr('id', 'pop-up');
    });

    $( '.bigBack' ).on('click', function() {
        $('#pop-up').slideUp(250);
    })

});