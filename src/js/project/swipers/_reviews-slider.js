import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

export const reviewsSlider = () => {
    if (document.querySelector('.reviews__swiper')) {
        return new Swiper('.reviews__swiper', {
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
