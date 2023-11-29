// const progressCircle = document.querySelector(".autoplay-progress svg");
//     const progressContent = document.querySelector(".autoplay-progress span");
//     var swiper = new Swiper(".slide-content", {
//         slidesPerView: 3,
//         spaceBetween: 25,
//         loop: true,
//         autoplay: {
//             delay: 2500,
//             disableOnInteraction: false
//         },
//         centerSlide: 'true',
//         fade: 'true',
//         gragCursor: 'true',
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//             dynamicBullets: true,
//         },
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl :".swiper-button-prev",
//         },
//         on: {
//             autoplayTimeLeft(s, time, progress) {
//               progressCircle.style.setProperty("--progress", 1 - progress);
//               progressContent.textContent = `${Math.ceil(time / 700)}s`;
//             }
//         },
//         breakpoints:{
//             0: {
//                 slidesPerView: 1,
//             },
//             520: {
//                 slidesPerView: 2,
//             },
//             950: {
//                 slidesPerView: 3,
//             },
//         },
// });

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl :".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
