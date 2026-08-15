(function ($) {
  "use strict";
  // Initiate the wowjs
  new WOW().init();
  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Fixed Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".fixed-top .container").addClass("shadow-sm");
    } else {
      $(".fixed-top .container").removeClass("shadow-sm");
    }
  });

  // Donation
  $(".progress").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" },
  );

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 5,
    time: 2000,
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    dotsData: true,
  });

  // Event carousel
  $(".event-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: false,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".carousel3").owlCarousel({
    autoplay: true,
    items: 1,
    loop: true,
    pagination: false,
    navigationText: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      600: {
        items: 2,
        loop: $(".carousel3 .owl-item").length > 1 ? true : false,
      },
      1000: {
        items: 3,
        loop: $(".carousel3 .owl-item").length > 2 ? true : false,
      },
    },
  });

  $(".partners").owlCarousel({
    loop: !0,
    items: 5,
    margin: 110,
    autoplay: !0,
    response: !0,
    responsive: {
      300: { items: 3, margin: 0 },
      500: { items: 4 },
      700: { items: 6 },
      800: { items: 6, margin: 40 },
      1e3: { items: 6 },
    },
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);
