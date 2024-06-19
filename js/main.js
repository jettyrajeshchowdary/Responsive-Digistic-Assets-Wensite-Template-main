// Header :: Start
$(window).scroll(function () {
  if ($(window).scrollTop() >= 150) {
    $("header").addClass("header-sm");
  } else {
    $("header").removeClass("header-sm");
  }
  didScroll = true;
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }
  lastScrollTop = st;
}

$(".nav-menu-button").on("click", function () {
  if (!$(this).hasClass("dropdown-toggle")) {
    $("body").toggleClass("mobile-menu-open");
  }
});

// Header :: End

// Mobile Javascript
// if ($(window).width() <= 767) {
$(".nav-link").on("click", function () {
  if (!$(this).hasClass("dropdown-toggle")) {
    $("body").toggleClass("mobile-menu-open");
  }
});

//banner-carousel:: starts//

function initialBannerImageWidth() {
  let valWid = $(".banner-carousel-wrapper").width();
  let firstImgWidth = Math.floor((valWid * 57) / 100);
  let secondImgWidth = Math.floor((valWid * 43) / 100 - 25);
  $(".first-img").width(firstImgWidth);
  $(".second-img").width(secondImgWidth);
}

if ($(window).width() >= 767) {
  initialBannerImageWidth();
}
$(window).resize(function () {
  initialBannerImageWidth();
});
$(".banner-carousel.owl-carousel").owlCarousel({
  margin: 24,
  loop: true,
  autoWidth: true,
  center: false,
  slideBy: 2,
  nav: true,
  navText: [
    "<img src='images/prev-img.png'>",
    "<img src='images/next-img.png'>",
  ],
  responsive: {
    0: {
      margin: 14,
      autoWidth: false,
      items: 1.5,
      nav: false,
    },
    768: {
      margin: 26,
      nav: true,
    },
  },
});

//banner-carousel:: ends//

// Auction Carousel :: Starts
$(".auction-carousel.owl-carousel").owlCarousel({
  margin: 30,
  loop: false,
  autoWidth: true,
  navText: [
    "<img src='images/prev-img.png'>",
    "<img src='images/next-img.png'>",
  ],
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 1.5,
      margin: 14,
    },
    768: {
      nav: false,
      items: 2.5,
    },
    991: {
      nav: true,
    },
  },
});
// Auction Carousel :: Ends

// team-member-section :: Starts
$(".team-member").on("click", function () {
  $(this).toggleClass("open");
  $(this).parent("li").siblings("li").find(".team-member").removeClass("open");
});
// team-member-section :: Ends

//investors section:starts//
$(document).ready(function () {
  if ($(".investors-grid").length > 0) {
    investorCarousel();
  }
});

const investorCarousel = function () {
  $(".investors-grid").owlCarousel({
    items: 4,
    loop: false,
    margin: 66,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoWidth: true,
    navText: [
      "<img src='images/prev-img.png'>",
      "<img src='images/next-img.png'>",
    ],
    responsive: {
      0: {
        center: true,
        margin: 14,
        item: 1,
        nav: false,
        autoplay: true,
      },
      768: {
        nav: true,
        items: 3,
      },
    },
    onInitialized: function () {
      const currentSlider = $(".investors-grid");
      !currentSlider.find(".owl-next").hasClass("disabled")
        ? currentSlider.addClass("next-items-available")
        : currentSlider.removeClass("next-items-available");

      // (!currentSlider.find('.owl-prev').hasClass('disabled'))
      // ? currentSlider.addClass('prev-items-available')
      // : currentSlider.removeClass('prev-items-available');
    },
    onTranslated: function () {
      const currentSlider = $(".investors-grid");
      !currentSlider.find(".owl-next").hasClass("disabled")
        ? currentSlider.addClass("next-items-available")
        : currentSlider.removeClass("next-items-available");

      // (!currentSlider.find('.owl-prev').hasClass('disabled'))
      // ? currentSlider.addClass('prev-items-available')
      // : currentSlider.removeClass('prev-items-available');
    },
  });
};

//investors section:ends//

//creators section:starts//
$(".creators-grid").owlCarousel({
  loop: false,
  autoWidth: true,
  dots: false,
  // responsiveClass: true,
  margin: 30,
  nav: true,
  navText: [
    "<img src='images/prev-img.png'>",
    "<img src='images/next-img.png'>",
  ],
  responsive: {
    0: {
      margin: 14,
      loop: true,
      autoWidth: false,
      items: 1.5,
      nav: false,
      // autoplay: true,
    },
    768: {
      nav: true,
    },
  },
});

//creators section:ends//

// Mobile Code:starts//
if ($(window).width() <= 991) {
  $(".roadmap-list li").on("click", function () {
    $(this).toggleClass("open");
    $(this).siblings("li").find(".roadmap-images").slideUp();
    $(this).find(".roadmap-images").slideToggle().css("display", "flex");
  });
}

//faq::starts
$(".faq-tab-links.owl-carousel").owlCarousel({
  margin: 40,
  loop: false,
  items: 5,
  nav: false,
  dots: false,
  responsive: {
    0: {
      autoWidth: true,
    },
    768: {},
  },
});

if ($(window).width() <= 767) {
  // Footer :: Starts
  $(".footer-links h5").on("click", function () {
    $(this).siblings("ul").slideToggle();
    $(this).toggleClass("open");
  });
  // Footer :: Ends
}
// Mobile Code :ends//

//faq section:starts//
$(".faq-tab-links li").on("click", function (e) {
  const currentClick = $(this).text().toLowerCase();
  $(this).addClass("active");
  $(this).siblings("li").removeClass("active");
  $(this)
    .parents(".owl-item")
    .siblings(".owl-item")
    .find("li")
    .removeClass("active");
  $(".faq-tab-content > div").hide();
  $(`.${currentClick}-content`).show();
});

//faq section:ends//

//about-nft-banner//
function aboutBannerImageWidth() {
  let valWid = $(".about-nft.banner-carousel-wrapper").width();
  let firstImgWidth = Math.floor((valWid * 55) / 100);
  let secondImgWidth = Math.floor((valWid * 45) / 100);
  $(".first-img").width(firstImgWidth);
  $(".second-img").width(secondImgWidth);
}

if ($(window).width() >= 767) {
  aboutBannerImageWidth();
}
$(window).resize(function () {
  aboutBannerImageWidth();
});

//about section FAQs :: Starts
$(".accordian-title").on("click", function () {
  $(this).toggleClass("open");
  $(this).siblings(".accordian-content").slideToggle();
});
// about-section FAQs :: Ends
