(function ($) {
  "use strict";
  $("#ticker").eocNewsticker({
    speed: 20,
    timeout: 2,
    divider: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
  });

  $(".number").counterUp({
    delay: 10,
    time: 2000,
  });

  $(".carousel3").owlCarousel({
    autoHeight: false,
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

  $(".carousel4").owlCarousel({
    autoHeight: false,
    autoplay: true,
    items: 1,
    loop: true,
    pagination: false,
    navigationText: false,
    autoHeight: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      600: {
        items: 2,
        loop: $(".carousel4 .owl-item").length > 1 ? true : false,
      },
      1000: {
        items: 4,
        loop: $(".carousel4 .owl-item").length > 2 ? true : false,
      },
    },
  });

  $(".carousel2").owlCarousel({
    autoHeight: false,
    autoplay: true,
    items: 1,
    loop: true,
    pagination: false,
    navigationText: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      800: {
        items: 2,
        loop: $(".carousel2 .owl-item").length > 1 ? true : false,
      },
      1000: {
        items: 2,
        loop: $(".carousel2 .owl-item").length > 2 ? true : false,
      },
    },
  });

  // Portfolio isotope and filter
  var portfolioIsotope = $(".isotope.portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "masonry",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");
    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  if ($("#about").text().trim().length == 0) $("#about").remove();
  if ($("#pg_more").text().trim().length == 0) $("#pg_more").remove();
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.innerWidth <= 768;

  const popoverTriggerList = [].slice.call(
    document.querySelectorAll(
      '[data-bs-toggle="popover"], [data-toggle="popover"]',
    ),
  );
  const popoverList = popoverTriggerList.map(function (el) {
    let instance = bootstrap.Popover.getInstance(el);
    if (!instance) {
      const content =
        el.getAttribute("data-bs-content") ||
        el.getAttribute("data-content") ||
        el.getAttribute("title");
      if (content) {
        instance = new bootstrap.Popover(el, {
          trigger: isMobile ? "manual" : "hover",
          html: true,
          content: content,
          delay: { show: 0, hide: 2000 },
          container: "body",
          placement: "top",
        });
      }
    }
    return instance;
  });

  if (isMobile) {
    const observerOptions = { root: null, threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const instance = bootstrap.Popover.getInstance(entry.target);
        if (instance) {
          if (entry.isIntersecting) {
            instance.show();
          } else {
            instance.hide();
          }
        }
      });
    }, observerOptions);
    popoverTriggerList.forEach((el) => observer.observe(el));
  }
});
