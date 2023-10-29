$(document).ready(function () {
    
    $('.content ul li').on('click', function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.' + $(this).data('toggle')).fadeIn().siblings('div').hide();
        $('html, body').animate({
            scrollTop: $('.' + $(this).data('toggle')).offset().top
        });
    });
    
});