
// slide
var windowWith = $(window).width();
$('.slide').mousemove(function(event){
    var moveX =(($(window).width()/2) - event.pageX )* 0.1;
    var moveY =(($(window).height()/2) - event.pageY )* 0.1;
    
    $('.caption_slide1').css('margin-left', moveX + 'px');
    $('.caption_slide1').css('margin-top', moveY + 'px');
    $('.caption_slide2').css('margin-left', moveX + 'px');
    $('.caption_slide2').css('margin-top', moveY + 'px');
    $('.caption_slide3').css('margin-left', moveX + 'px');
    $('.caption_slide3').css('margin-top', moveY + 'px');
    $('.carousel-caption').css('margin-left', moveX + 'px');
    $('.carousel-caption').css('margin-top', moveY + 'px');
});
$('.slide').mousemove(function(event){
    var moveX =(($(window).width()/2) - event.pageX )* 0.01;
    var moveY =(($(window).height()/2) - event.pageY )* 0.01;
    $('.carousel-caption').css('margin-left', moveX + 'px');
    $('.carousel-caption').css('margin-top', moveY + 'px');
});
// slide
// backtop
$(document).ready(function() {
    $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
    $('#toTopBtn').fadeIn();
    } else {
    $('#toTopBtn').fadeOut();
    }
    });
    
    $('#toTopBtn').click(function() {
    $("html, body").animate({
    scrollTop: 0
    }, 1000);
    return false;
    });
    });
// backtop


