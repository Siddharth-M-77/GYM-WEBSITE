AOS.init();
// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}
// Team lider section
$(' .review-slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    arrows: false,
    atoplauSpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// Team slide section 
$(' .team-slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    arrows: false,
    atoplauSpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// Animation with gsap
var tl = gsap.timeline()

tl = gsap.from("#logo, .nav-link, h5, h1 ", {
    y: -40,
    opacity: 0,
    stagger: 0.2
});
tl = gsap.from(".glowing-btn", {
    opacity: -10,
    scale: 2,
    duration: 3
});
// Scroll animation active

