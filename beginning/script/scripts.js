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