import { burger } from './templates/_burger';

burger();

import '../../node_modules/swiper/swiper-bundle.min.js';

import SimpleBar from 'simplebar';
import mixitup from 'mixitup';

let mixer = mixitup('.expertises__items', {
    load: { filter: '.engineering' }
});

import GraphModal from 'graph-modal';
const modal = new GraphModal('modal');

import AOS from 'aos';
AOS.init({
    disable: 'phone'
});

import { headerSticky } from './templates/_header-sticky';

headerSticky();