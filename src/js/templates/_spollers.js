import { _slideUp, _slideDown, _slideToggle } from '../utility/_animation'
import { dataMediaQueries } from '../utility/_dataMediaQueries'

/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.

Например: 
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/

export function spollers() {
    const spollersArray = document.querySelectorAll('[data-spollers]');
    if (spollersArray.length > 0) {
        // Получение обычных слойлеров
        const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
            return !item.dataset.spollers.split(",")[0];
        });
        // Инициализация обычных слойлеров
        if (spollersRegular.length) {
            initSpollers(spollersRegular);
        }
        // Получение слойлеров с медиа запросами
        let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
        if (mdQueriesArray && mdQueriesArray.length) {
            mdQueriesArray.forEach(mdQueriesItem => {
                // Событие
                mdQueriesItem.matchMedia.addEventListener("change", function () {
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
                initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
        }

        // Инициализация
        function initSpollers(spollersArray, matchMedia = false) {
            spollersArray.forEach(spollersBlock => {
                spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                if (matchMedia.matches || !matchMedia) {
                    initSpollerButton(spollersBlock);
                    initSpollerTitle(spollersBlock);
                    spollersBlock.addEventListener("click", setSpollerAction);
                } else {
                    initSpollerButton(spollersBlock, false);
                    initSpollerTitle(spollersBlock, false);
                    spollersBlock.removeEventListener("click", setSpollerAction);
                }
            });
        }
        // Работа с контентом
        function initSpollerButton(spollersBlock, hideSpollerBody = true) {
            let spollerButtons = spollersBlock.querySelectorAll('[data-spoller-button]');
            if (spollerButtons.length) {
                spollerButtons = Array.from(spollerButtons).filter(item => item.closest('[data-spollers]') === spollersBlock);
                spollerButtons.forEach(spollerButton => {
                    if (hideSpollerBody) {
                        spollerButton.removeAttribute('style');
                        if (!spollerButton.classList.contains('spollers__button--active')) {
                            spollerButton.nextElementSibling.hidden = true;
                        }
                    } else {
                        spollerButton.style.display = 'none';
                        spollerButton.nextElementSibling.hidden = false;
                    }
                });
            }
        }

        function initSpollerTitle(spollersBlock, hideSpollerBody = true) {
            let spollerTitles = spollersBlock.querySelectorAll('[data-spoller-title]');
            if (spollerTitles.length) {
                spollerTitles = Array.from(spollerTitles).filter(item => item.closest('[data-spollers]') === spollersBlock);
                spollerTitles.forEach(spollerTitle => {
                    if (hideSpollerBody) {
                        spollerTitle.style.display = 'none';
                    } else {
                        spollerTitle.removeAttribute('style');
                    }
                });
            }
        }

        function setSpollerAction(e) {
            const el = e.target;
            if (el.closest('[data-spoller-button]')) {
                const spollerButton = el.closest('[data-spoller-button]');
                const spollersBlock = spollerButton.closest('[data-spollers]');
                const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
                if (!spollersBlock.querySelectorAll('._slide').length) {
                    if (oneSpoller && !spollerButton.classList.contains('spollers__button--active')) {
                        hideSpollersBody(spollersBlock);
                    }
                    spollerButton.classList.toggle('spollers__button--active');
                    _slideToggle(spollerButton.nextElementSibling, 500);
                }
                e.preventDefault();
            }
        }

        function hideSpollersBody(spollersBlock) {
            const spollerActiveTitle = spollersBlock.querySelector('[data-spoller-button].spollers__button--active');
            if (spollerActiveTitle) {
                spollerActiveTitle.classList.remove('spollers__button--active');
                _slideUp(spollerActiveTitle.nextElementSibling, 500);
            }
        }
    }
}

// Уникализация массива
export function uniqArray(array) {
    return array.filter(function (item, index, self) {
        return self.indexOf(item) === index;
    });
}

