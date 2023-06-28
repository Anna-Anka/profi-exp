import { disableScroll } from '../utils/_disable-scroll';
import { enableScroll } from '../utils/_enable-scroll';

export const burger = () => {
    const burger = document?.querySelector('[data-burger]');
    const menu = document?.querySelector('[data-menu]');
    const menuLinks = document?.querySelectorAll('[data-menu-link]');
    const overlay = document?.querySelector('[data-menu-overlay]');
    const header = document?.querySelector('.header');

    const checkClass = () => {
        if (burger?.classList.contains('burger-button--active')) {
            burger?.setAttribute('aria-expanded', 'true');
            burger?.setAttribute('aria-label', 'закрыть меню');
            disableScroll();
        } else {
            burger?.setAttribute('aria-expanded', 'false');
            burger?.setAttribute('aria-label', 'открыть меню');
            enableScroll();
        }
    }

    burger?.addEventListener('click', (e) => {
        burger?.classList.toggle('burger-button--active');
        menu?.classList.toggle('burger-menu--active');
        overlay?.classList.toggle('overlay--active');
        header?.classList.toggle('header--active');
        checkClass();
    });

    overlay?.addEventListener('click', () => {
        burger.classList.remove('burger-button--active');
        menu.classList.remove('burger-menu--active');
        overlay.classList.remove('overlay--active');
        header.classList.remove('header--active');
        checkClass();
    });

    menuLinks?.forEach(el => {
        el.addEventListener('click', () => {
            burger?.classList.remove('burger-button--active');
            menu.classList.remove('burger-menu--active');
            overlay.classList.remove('overlay--active');
            header.classList.remove('header--active');
            enableScroll();
        });
    });
}

