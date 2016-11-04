import $ from 'jquery';
import header from './header';
import categories from './categories';
import airportSection from './airportSection';
import cabSection from './cabSection';
import subwaySection from './subwaySection';

const container = document.getElementById('container');
//
// while (container.firstChild) {
//   container.removeChild(container.firstChild);
// }

document.addEventListener('DOMContentLoaded', renderContent);

function renderContent() {
  $('#container').append(header);
  $('#container').append(categories);
  $('#container').append(airportSection);
  $('#container').append(cabSection);
  $('#container').append(subwaySection);
  // container.innerHTML = header;
  // document.getElementById('container').appendChild(categories);
}
