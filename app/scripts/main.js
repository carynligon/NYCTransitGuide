import $ from 'jquery';
import smoothScroll from 'smooth-scroll';
import header from './header';
import categories from './categories';
import airportSection from './airportSection';
import cabSection from './cabSection';
import subwaySection from './subwaySection';
import legal from './legalSection';

smoothScroll.init();

const container = document.getElementById('container');
const carouselImages = ['assets/images/carousel-hangars.png','assets/images/carousel-terminal.png'];

document.addEventListener('DOMContentLoaded', renderContent);

function switchImage () {
  let currImage = document.querySelector('figure').firstElementChild.src;
  if (currImage.split('-').indexOf('terminal.png') !== -1) {
    document.querySelector('figure').firstElementChild.setAttribute('src', carouselImages[0]);
  } else {
    document.querySelector('figure').firstElementChild.setAttribute('src', carouselImages[1]);
  }
}

function switchImageClick (e) {
  if (e.which === 13) {
    switchImage();
  }
}

function renderContent() {
  $('#container').append(header);
  $('#container').append(categories);
  $('#container').append(airportSection);
  $('#container').append(cabSection);
  $('#container').append(subwaySection);
  $('#container').append(legal);
  document.getElementById('left-arrow').addEventListener('click', switchImage);
  document.getElementById('right-arrow').addEventListener('click', switchImage);
  document.getElementById('left-arrow').addEventListener('keyup', switchImageClick);
  document.getElementById('right-arrow').addEventListener('keyup', switchImageClick)
}
