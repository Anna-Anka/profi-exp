import { throttle } from '../utils/_throttle';

export const headerSticky = () => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    let headerHeight = header.offsetHeight;
    let lastScrollTop = 0;
    hero.style.paddingTop = `${headerHeight}px`;

    const updateHeightHeader = () => {
        headerHeight = header.offsetHeight;
        hero.style.paddingTop = `${headerHeight}px`;
    };

    const updateHeightHeaderTrottle = throttle(updateHeightHeader);

    window.addEventListener('resize', updateHeightHeaderTrottle);

    const addedClass = () => {
        let scrollDistance = window.scrollY;
        if (scrollDistance > lastScrollTop) {
            header.classList.remove('header--fixed');
        } else {
            header.classList.add('header--fixed');
        }

        if (scrollDistance === 0) {
            header.classList.remove('header--fixed');
        }

        lastScrollTop = scrollDistance;
    };

    const addedClassTrottle = throttle(addedClass);

    window.addEventListener('scroll', addedClassTrottle);
};
