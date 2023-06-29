import './_libs';
import './_include';
import './_swiper';
import './_project';
import './_utils';

export const mapFunction = () => {
    function init() {
        const center = [55.681474860423, 36.771407883605974];

        const map = new ymaps.Map('map', {
            center,
            zoom: 13,
        });

        const map2 = new ymaps.Map('map-2', {
            center,
            zoom: 13,
        });

        const map3 = new ymaps.Map('map-3', {
            center,
            zoom: 13,
        });

        const map4 = new ymaps.Map('map-4', {
            center,
            zoom: 13,
        });

        const map5 = new ymaps.Map('map-5', {
            center,
            zoom: 13,
        });

        const map6 = new ymaps.Map('map-6', {
            center,
            zoom: 13,
        });
    }
    ymaps.ready(init);
};

mapFunction();

