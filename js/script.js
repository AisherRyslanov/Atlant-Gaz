let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.87970646001769, 74.58561302879674],
        zoom: 13
    });

    DG.marker([42.87970646001769, 74.58561302879674]).addTo(map).bindPopup('Вы кто такие бя вас не звал!');
});