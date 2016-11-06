import airplane from './svg/icon-airplane';
import bus from './svg/icon-bus';
import car from './svg/icon-car';
import subway from './svg/icon-subways';
import taxi from './svg/icon-taxi';
import train from './svg/icon-trains';

const categories = (`
  <section class="category-navigation">
    <h3>NYC Transportation Categories</h3>
    <ul role="navigation">
      <a data-scroll href="#airports">
        <li>
          ${airplane}
          <h4>Airports</h4>
        </li>
      </a>
      <a data-scroll href="#cabs">
        <li>
          ${taxi}
          <h4>Cabs</h4>
        </li>
      </a>
      <a data-scroll href="#subways">
        <li>
          ${subway}
          <h4>Subways</h4>
        </li>
      </a>
      <a href="#">
        <li>
          ${bus}
          <h4>Bus</h4>
        </li>
      </a>
      <a href="#">
        <li>
          ${car}
          <h4>Cars</h4>
        </li>
      </a>
    </ul>
  </section>
  `);

export default categories;
