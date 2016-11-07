# NYC Transit Guide - The Zebra

#### [View Live](http://nyc-transit-guide.surge.sh/)

#### Process
- Built HTML out modularly in separate JS files
- Created an SCSS file for each JS file and added styles section by section
- Create JS files for each SVG in order to export them, ex:

```javascript
import airplane from './svg/icon-airplane';

const airportSection = (`
  <section class="airport-section" id="airports">
    ${airplane}
```

- Added functionality to the carousel image feature under the "Airports section", ex:

```javascript
const carouselImages = ['assets/images/carousel-hangars.png','assets/images/carousel-terminal.png'];

function switchImage () {
  let currImage = document.querySelector('figure').firstElementChild.src;
  // check to see which image is being displayed and display the other
  if (currImage.split('-').indexOf('terminal.png') !== -1) {
    document.querySelector('figure').firstElementChild.setAttribute('src', carouselImages[0]);
  } else {
    document.querySelector('figure').firstElementChild.setAttribute('src', carouselImages[1]);
  }
}
```

- Added responsive styling
  - Started small and worked outwards, making sure each section looked correct at any size

#### Technologies Used:
- HTML
- SCSS
- JavaScript
- JQuery
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [TIY SPA Scaffold](https://github.com/TIY-Austin-Front-End-Engineering/spa-scaffold)

#### Future ideas
- Add a "back to top" button that will appear on page after scrolling past the header and will smoothly scroll to the top when clicked.
  - To do this, I would set up an event listener for scrolling and toggle the display of the button whenever the scrollTop is greater than the height of the header.
- Improve the mobile navigation menu
  - I would consider doing this with a dropdown menu that toggles its display on clicks
- Add smooth transitions to the image carousel
  - I would transition the images by adjusting their position on the x-axis and adding a delay to that transition as the next images moves in.

#### Instructions:
- Create local repository
- run
```git clone https://github.com/carynligon/NYCTransitGuide.git .```
from the new repository
- To install the necessary modules, run
```npm install```
- After installation, to start up the server, run ```npm start```
- The server will be hosting on localhost:8080
