let slideNow = 1;
let slideCount = $('#slidewrapper').children().length;
console.log(slideCount);
let slideInterval = 3000;
let navBtnId = 0;
let translateWidth = 0;

// slider one
$(document).ready(function() {
    let switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
// slider one end

//slider three
jQuery(document).ready(function()
{
    $.simpleSlideshow({
        container : '.custom-slider', // Селектор контейнера с элементами
        item : 'div', // Селектор элемента
        delay : 3000, // Задержка между сменой элементов в миллисекундах
        speed : 1000, // Скорость анимации элементов в миллисекундах
    });
});


;(function($)
{
    $.simpleSlideshow = function(options)
    {
        var plugin = this;

        plugin.settings = $.extend({ container : 'ul.slideshow', item : 'li', delay : 1000, speed : 500 }, options || {});

        plugin.setSlideshow = function()
        {
            $(plugin.settings.container).each(function(i, box)
            {
                $(' > ' + plugin.settings.item + ':gt(0)', $(box)).hide();

                setInterval(function()
                    {
                        $(' > ' + plugin.settings.item + ':first', $(box))
                            .fadeOut(plugin.settings.speed)
                            .next()
                            .fadeIn(plugin.settings.speed)
                            .end()
                            .appendTo($(box));
                    },
                    plugin.settings.delay);
            });
        };

        plugin.setSlideshow();
    }
})(jQuery);
//slider three end

// phone mask
$(function(){
    $("#modal-tel-mask").mask("+38(999) 999-9999");
});

$(function(){
    $("#input-12").mask("+38(999) 999-9999");
});