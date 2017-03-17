$(function () {

    $('.menuToggle').on('click', function () {
        $('.navigationWrapper__listContainer').slideToggle(250, function () {
            if ($(this).css('display') == 'none') { console.log($(this).css('display'));
                $(this).removeAttr('style');
            }
        });
    });

});