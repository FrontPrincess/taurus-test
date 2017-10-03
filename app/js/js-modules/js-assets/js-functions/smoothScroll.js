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