import '../../_include';

export const aboutSlider = () => {
    if (document.querySelector('.about__main')) {
        const sliderMain = document.querySelector('.slider-main');
        const sliderNav = document.querySelector('.slider-nav');

        const swiperSmall = new Swiper(sliderNav, {
            slidesPerView: 5,
            // spaceBetween: 3,
            loopedSlides: 5,
            freeMode: true,
            direction: 'vertical',

            breakpoints: {
                560: {
                    spaceBetween: 3,
                },

                375: {
                    spaceBetween: 2,
                },
            },
        });

        const swiperMain = new Swiper(sliderMain, {
            // spaceBetween: 26,
            loopedSlides: 4,

            thumbs: {
                swiper: swiperSmall,
            },

            breakpoints: {
                560: {
                    spaceBetween: 26,
                },

                375: {
                    spaceBetween: 20,
                },
            },
        });
    }
};
