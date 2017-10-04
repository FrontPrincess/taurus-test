/*FUNCTIONS*/
//youtube script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        videoId: 'nn2h3_aH3vo',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

var p = document.getElementById ("player");
$(p).hide();

onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $('.start-video').fadeIn('normal');
    }
}

$(document).on('click', '.start-video', function () {
    $(this).hide();
    $("#player").show();
    $("#thumbnail_container").hide();
    player.playVideo();
});
// smoothScroll

$(".header-item__link").on("click", function(event) {
  var href = $(this).attr("href");

  if (href.length) {
    if (href.charAt(0) === "#") {
      event.preventDefault();
      var elementScrollTo = $(href);

      if (elementScrollTo.length) {
        $("html, body").animate(
          {
            scrollTop: elementScrollTo.offset().top - $("#header").outerHeight()
          },
          1000
        );
      }
    }
  }
});

// END: smoothScroll
function showMore(item, btn) {
    $(item + ':gt(7)').addClass('hidden');
    $(btn).show();
    $(btn).on('click', function(event) {
        event.preventDefault();
        $(item + ':gt(7)').removeClass('hidden');
        $(this).hide();
    });
}
// clickOutside
function clickOutside(args) {
    // argsCheck
    function argsCheck() {
        if (args.elementRemoveClass) {
            args.elementRemoveClass.removeClass('active');
        } else if (args.fadeOut) {
            args.elementToHide.fadeOut();
        }
    }
    // END:argsCheck

    $('body').on('mouseup touchstart', function(event) {
        if (!args.elementToPreserve.is(event.target) && args.elementToHide.has(event.target).length === 0) {
            argsCheck();
        }
    });
    $(document).on('keyup', function(event) {
        if (event.keyCode == 27) {
            argsCheck();
        }
    });
}
// END:clickOutside
/*END:FUNCTIONS*/

$(document).ready(function() {
    $('.site-header').on('click', '.toggle-btn', function(event) {
        event.preventDefault();
        $(this).parents().find('.mobile-menu').toggleClass('active');
    });

    $('.header-item').on('click', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

    var clickOutsideArgs = {
        elementRemoveClass: $('.mobile-menu'),
        elementToHide: $('.mobile-menu'),
        elementToPreserve: $('.mobile-menu'),
    }

    clickOutside(clickOutsideArgs);
    
    var isSkillAnimated = false;

    function ratingAnimation() {
        var skillsBlock = $('#skillsBlock');

        if (skillsBlock.length) {

            if ($(window).scrollTop() >= (skillsBlock.offset().top - $('#header').outerHeight())) {

                $('.skills-item').each(function(index, el) {

                    var dataSkill = $(this).data('skill');

                    $(el).find('.percentage').text(dataSkill);
                    $(el).find('.item-bar__indicator').css({
                        'width': 0
                    });
                    $(el).find('.item-bar__indicator').animate({
                        width: dataSkill + '%'
                    }, 1000);
                    isSkillAnimated = true;
                });
            }
        }
    }

    ratingAnimation();
    $(window).on('scroll', function(event) {
        if (!isSkillAnimated) {
            ratingAnimation();
        }
    });

    $('.testimonials-list').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoSpeed: 2000
    });

    showMore('.work-item', '#loadMore');

});