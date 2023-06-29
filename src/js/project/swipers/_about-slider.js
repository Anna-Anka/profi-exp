import '../../_include';

export const aboutSlider = () => {
    if (document.querySelector('.about__main')) {
        const sliderMain = document.querySelector('.slider-main');
        const sliderNav = document.querySelector('.slider-nav');

        const swiperSmall = new Swiper(sliderNav, {
            slidesPerView: 5,
            loopedSlides: 5,
            freeMode: true,
            direction: 'vertical',

            breakpoints: {
                560: {
                    spaceBetween: 4,
                },

                320: {
                    spaceBetween: 3,
                },
            },
        });

        const swiperMain = new Swiper(sliderMain, {
            loopedSlides: 4,

            thumbs: {
                swiper: swiperSmall,
            },

            breakpoints: {
                560: {
                    spaceBetween: 26,
                },

                320: {
                    spaceBetween: 20,
                },
            },
        });
    }
};
