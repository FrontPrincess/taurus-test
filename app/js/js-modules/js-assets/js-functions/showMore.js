function showMore(item, btn) {
    $(item + ':gt(7)').addClass('hidden');
    $(btn).show();
    $(btn).on('click', function(event) {
        event.preventDefault();
        $(item + ':gt(7)').removeClass('hidden');
        $(this).hide();
    });
}