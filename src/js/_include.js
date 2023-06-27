import { burger } from './templates/_burger';

burger();

import '../../node_modules/swiper/swiper-bundle.min.js';

import SimpleBar from 'simplebar';
import mixitup from 'mixitup';

let mixer = mixitup('.expertises__items', {
    load: { filter: '.engineering'}
});