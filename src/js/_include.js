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

import { pageNavigation } from './templates/_pageNavigation';
pageNavigation();

// export const smoothScroll = () => {
//     const menuLinks = document.querySelectorAll('a[data-goto]')

//     if (menuLinks.length > 0) {

//         menuLinks.forEach(menuLink => {
//             menuLink.addEventListener('click', onMenuLinkClick);
//         })

//         function onMenuLinkClick(e) {
//             const menuLink = e.target
//             if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//                 const gotoBlock = document.querySelector(menuLink.dataset.goto)
//                 const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight

//                 window.scrollTo({
//                     top: gotoBlockValue,
//                     behavior: "smooth"
//                 })
//                 e.preventDefault()
//             }
//         }
//     }
// }

// smoothScroll()
