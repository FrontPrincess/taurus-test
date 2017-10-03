//= js-assets/functions

$(document).ready(function() {
	$(window).on('scroll', function(event) {
		var skillsBlock = $('#skillsBlock');

		if(skillsBlock.length) {
			if($(this).scrollTop >= skillsBlock.offset().top) {

			$('.skills-item').each(function(index, el) {

				var dataSkill = $(this).data('skill');

				$(el).find('.percentage').text(dataSkill);
				$(el).find('.item-bar__indicator').animate({
					width: dataSkill + '%'
				}, 1000);	
			});
		}
		}
	});
});



