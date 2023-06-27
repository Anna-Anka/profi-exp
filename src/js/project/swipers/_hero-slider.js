import '../../_include';

// import Swiper from 'swiper';

export const heroSlider = () => {
    if (document.querySelector('.hero__swiper')) {
        return new Swiper('.hero__swiper', {
            loop: true,
            speed: 800,
            slidesPerGroup: 1,
            slidesPerView: 1,

            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
                stopOnlastSlide: false,
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
};
