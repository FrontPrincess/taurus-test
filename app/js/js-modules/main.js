//= js-assets/functions

$(document).ready(function() {

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
    	arrows: false
    });

    showMore('.work-item', '#loadMore');

    $('.site-header').on('click', '.toggle-btn', function(event) {
        event.preventDefault();
        $(this).parents().find('.mobile-menu').toggleClass('active');
    });

    var clickOutsideArgs = {
        elementRemoveClass: $('.mobile-menu'),
        elementToHide: $('.mobile-menu'),
        elementToPreserve: $('.mobile-menu'),
    }

    clickOutside(clickOutsideArgs);
});