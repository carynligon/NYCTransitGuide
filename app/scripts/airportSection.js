import airplane from './svg/icon-airplane';
import leftArrow from './svg/icon-caret-left';
import rightArrow from './svg/icon-caret-right';

const airportSection = (`
  <section class="airport-section" id="airports">
    ${airplane}
    <h4>Airports</h4>
    <h3>Airports</h3>
    <div class="airport-content">
    ${leftArrow}
    <figure>
      <img src="/assets/images/carousel-terminal.png"/>
      <figcaption>
        <p>John F. Kennedy International Airport (JFK)</p>
        <p>New York City, New York</p>
      </figcaption>
    </figure>
    ${rightArrow}
    There are three major Airports in the New York City area, two of which are in New York and one close by in New Jersey.<br><br>

    If you are coming to New York from out of the country you will most likely be flying into John F. Kennedy International Airport (JFK) which lies South of the city near Queens. For easy access after your flight to the city itself, you can take the AirTrain. The Airtrain will take travelers straight from the airport to the city and close to main subway and train lines to get you to your destination once inside Manhattan.<br><br>

    The second airport located in New York is the La Guardia Airport (LGA). Most domestic flights will end here rather than JFK. LGA is also located in Queens but is much closer to the city itself. There are multiple bus and subway routes that can get you to the city and of course iconic New York cabs waiting to take you to your destination.<br><br>

    The 3rd and final airport is located in New Jersey, Newark Liberty International Airport (EWR) is used for both international and domestic flights. With its location outside of New York it is less crowded but a little out of the way. In an effort to make EWR more accessible for tourists and travelers you can now take a NJ AirTrain into Manhattan from the airport.
    </div>
  </section>
  `);

  export default airportSection;
