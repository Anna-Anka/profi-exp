import { throttle } from '../utils/_throttle';

export const headerSticky = () => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    let headerHeight = header.offsetHeight;
    let lastScrollTop = 0;
    let height = `${headerHeight}px`;

    const updateHeightHeader = () => {
        headerHeight = header.offsetHeight;
        height = `${headerHeight}px`;
    };

    const updateHeightHeaderTrottle = throttle(updateHeightHeader);

    window.addEventListener('resize', updateHeightHeaderTrottle);

    let clickToOpenModal = false
    let clickToCloseModal = false
    let isAlreadyCloseModal = false
    let counter = 0;

    const allCards = document.querySelectorAll('product-card')
    allCards.forEach(card => {
        const button = card.querySelector('[data-graph-path]');
        button.addEventListener('click', () => clickToOpenModal = true)
    })

    const modal = document.querySelector('.graph-modal')
    modal.addEventListener('click', () => clickToCloseModal = true)

    const addedClass = () => {
        const scrollDistance = window.scrollY;
        console.log(scrollDistance, lastScrollTop)

        if (clickToOpenModal) {
            header.classList.remove('header--fixed');
            hero.style.paddingTop = `0`;
            header.classList.remove('header--hide');

            document.addEventListener('click', () => {
                header.classList.remove('header--fixed');
                hero.style.paddingTop = height;
                header.classList.add('header--hide');
            })
            clickToOpenModal = false
            return
        }

        if (clickToCloseModal) {
            header.classList.remove('header--fixed');
            header.classList.remove('header--hide');
            hero.style.paddingTop = `0`;

            if (scrollDistance > lastScrollTop) {
                header.classList.remove('header--fixed');
                header.classList.remove('header--hide');
                hero.style.paddingTop = `0`;

                if (scrollDistance !== 1 && lastScrollTop !== 0) {
                    header.classList.remove('header--hide');
                }
            } else {
                console.log('aaa')
            }

            clickToCloseModal = false
            isAlreadyCloseModal = true
            return
        }

        if (counter === 0) {
            if (scrollDistance !== 0 && lastScrollTop === 0) {
                console.log('1')
                header.classList.add('header--fixed');
                hero.style.paddingTop = height;
                header.classList.remove('header--hide');
            }
        } else {
            if (scrollDistance > lastScrollTop) {
                header.classList.remove('header--fixed');
                hero.style.paddingTop = height;
                header.classList.add('header--hide');

                if (scrollDistance !== 1 && lastScrollTop !== 0) {
                    header.classList.add('header--hide');
                }

                if (isAlreadyCloseModal) {
                    header.classList.add('header--hide');
                    hero.style.paddingTop = height;
                    isAlreadyCloseModal = false
                    return
                }
            } else {
                header.classList.add('header--fixed');
                hero.style.paddingTop = height;
                header.classList.remove('header--hide');
            }

            if (scrollDistance === 0) {
                header.classList.remove('header--fixed');
                hero.style.paddingTop = `0`;
                header.classList.remove('header--hide');
            }
        }

        lastScrollTop = scrollDistance;
        counter++;
    };

    const addedClassTrottle = throttle(addedClass);

    window.addEventListener('scroll', addedClassTrottle);
};