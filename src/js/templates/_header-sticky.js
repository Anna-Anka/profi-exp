import { throttle } from '../utils/_throttle';

export const headerSticky = () => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    let headerHeight = header.offsetHeight;
    let lastScrollTop = 0;
    hero.style.paddingTop = `${headerHeight}px`;
    let height = `${headerHeight}px`;
    document.documentElement.style.setProperty('--my-variable', height);

    const updateHeightHeader = () => {
        headerHeight = header.offsetHeight;

        height = `${headerHeight}px`;
        document.documentElement.style.setProperty('--my-variable', height);
    };

    const updateHeightHeaderTrottle = throttle(updateHeightHeader);

    window.addEventListener('resize', updateHeightHeaderTrottle);

    const addedClass = () => {
        let scrollDistance = window.scrollY;
        if (scrollDistance > lastScrollTop) {
            header.classList.remove('header--fixed');
            hero.classList.remove('hero--active');
            header.classList.add('header--hide');
        } else {
            header.classList.add('header--fixed');
            hero.classList.add('hero--active');
            header.classList.remove('header--hide');
        }

        if (scrollDistance === 0) {
            header.classList.remove('header--fixed');
            hero.classList.remove('hero--active');
            header.classList.remove('header--hide');
        }

        lastScrollTop = scrollDistance;
    };

    const addedClassTrottle = throttle(addedClass);

    window.addEventListener('scroll', addedClassTrottle);
};