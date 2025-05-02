// About Page
$(document).ready(function() {
    //Open Modal
    $('.open-modal').click(function() {
        var targetModal = $(this).data("target");
        $(targetModal).show();
    })

    //Close Modal
    $('.close').click(function() {
        $(this).closest('.modal').hide();
    })
})

// Features Page
$(document).ready(function() {
    $('.accordion-header').click(function() {
        if ($(this).next('.accordion-content').is(':visible')) {
            $(this).next('.accordion-content').slideUp();
        } else {
            $('.accordion-content').slideUp();
            $(this).next('.accordion-content').slideDown();
        }
    });
})