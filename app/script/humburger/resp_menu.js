$(function () {

    $('.menuToggle').on('click', function () {
        $('.navigationWrapper__listContainer').slideToggle(250, function () {
            $(this).attr('id', 'pop-up');
            if ($(this).css('display') == 'none') {
                $(this).removeAttr('style');
            }
        })
    });

    $( '.bigBack' ).on('click', function() {
        $('#pop-up').slideUp(250, function() {
            if ($(this).css('display') == 'none') {
                $(this).removeAttr('style');
            }
        });

    })

});