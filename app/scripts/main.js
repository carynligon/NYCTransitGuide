import header from './header';

// const container = document.getElementById('container');
//
// while (container.firstChild) {
//   container.removeChild(container.firstChild);
// }

document.addEventListener('DOMContentLoaded', renderContent);

function renderContent() {
  console.dir(document.getElementById('container'));
  document.getElementById('container').innerHTML = header;
}
