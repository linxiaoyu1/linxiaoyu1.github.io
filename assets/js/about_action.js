function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var about_section_top = $(".about-section").offset().top;
    var header_height = $(".about-header-section").outerHeight();
    $(".about-section").css({ "margin-top": header_height });
    $(".about-header").css({ height: header_height - scroll_top });
  }
  parallax_height();
  $(window).scroll(function() {
    parallax_height();
  });
  $(window).resize(function() {
    parallax_height();
  });