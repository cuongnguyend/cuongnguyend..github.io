// slide
var windowWith = $(window).width();
$('.slide').mousemove(function(event) {
    var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
    var moveY = (($(window).height() / 2) - event.pageY) * 0.1;

    $('.caption_slide1').css('margin-left', moveX + 'px');
    $('.caption_slide1').css('margin-top', moveY + 'px');
    $('.caption_slide2').css('margin-left', moveX + 'px');
    $('.caption_slide2').css('margin-top', moveY + 'px');
    $('.caption_slide3').css('margin-left', moveX + 'px');
    $('.caption_slide3').css('margin-top', moveY + 'px');
    $('.carousel-caption').css('margin-left', moveX + 'px');
    $('.carousel-caption').css('margin-top', moveY + 'px');
});
$('.slide').mousemove(function(event) {
    var moveX = (($(window).width() / 2) - event.pageX) * 0.01;
    var moveY = (($(window).height() / 2) - event.pageY) * 0.01;
    $('.carousel-caption').css('margin-left', moveX + 'px');
    $('.carousel-caption').css('margin-top', moveY + 'px');
});

// if ($(".caption_slide1").css("marginTop") !='0px' ){
//   $('.line_auto').css('animation')=('none');
// }
// else $('.line_auto').css('animation')=('example 5s infinite');
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

// sticky navbar
$(document).ready(function() {
    // Custom 
    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        } else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };


    $('[data-toggle="sticky-onscroll"]').each(function() {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper');
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});



// tablink in_menupage

function tab(event, type_menu) {
    var i, x, tablinks;
    x = $(".tabcontent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablink = $(".tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", " ");
    }
    document.getElementById(type_menu).style.display = "block";
    event.currentTarget.className += " active";
}
// tablink in_menupage