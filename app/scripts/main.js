import $ from 'jquery';
import header from './header';
import categories from './categories';
import airportSection from './airportSection';
import cabSection from './cabSection';
import subwaySection from './subwaySection';
import legal from './legalSection';

const container = document.getElementById('container');

document.addEventListener('DOMContentLoaded', renderContent);

function renderContent() {
  $('#container').append(header);
  $('#container').append(categories);
  $('#container').append(airportSection);
  $('#container').append(cabSection);
  $('#container').append(subwaySection);
  $('#container').append(legal);
}
