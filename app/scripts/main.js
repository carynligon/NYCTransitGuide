import $ from 'jquery';
import header from './header';
import categories from './categories';

const container = document.getElementById('container');
//
// while (container.firstChild) {
//   container.removeChild(container.firstChild);
// }

document.addEventListener('DOMContentLoaded', renderContent);

function renderContent() {
  $('#container').append(header);
  $('#container').append(categories);
  // container.innerHTML = header;
  // document.getElementById('container').appendChild(categories);
}
