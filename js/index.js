


$('.travel-item').hover(function () {
    $(this)
        .css({
            width: '75%'
        })
        .siblings()
        .removeAttr('style')

});