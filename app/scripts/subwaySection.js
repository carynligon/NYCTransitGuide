import subway from './svg/icon-subways';

const subwaySection = (`
  <section class="subway-section" id="subways">
    ${subway}
    <h4>Subways</h4>
    <h3 role="heading">Subways</h3>
    <div class="subway-content">
    <figure>
      <img src="/assets/images/nyc-transit-map.png"/>
      <figcaption>
        <p>New York City Subway Station</p>
        <p>New York City, New York</p>
      </figcaption>
    </figure>
    The Subway is the most popular mode of transportation in New York City. There are tons of access points and stops to get you around town if you’re in a hurry. Using the subway can seem stressful but it shouldn’t be intimidating. If you aren’t sure what train to take you can look at a subway map that is on the wall in every subway station.<br><br>

    There are two types of trains, “local” which means they stop at every stop on their route and “express” which will skip stops in order to get you to a set destination faster. If you mix these up you could end up on the other side of town so be sure to check the train before getting on.<br><br>

    Many people will refer to the trains by the color of the line, this is a bad idea. Once you travel outside of Manhattan the trains with the same color will split up and you will end up in the wrong place. When looking for a route pay attention to the number or letter.<br><br>

    In some places on the map you will see a little black link connecting two stations, these are underground tunnels for pedestrians to make it easier to transfer trains. This makes it faster than going up the street level and walking over to the next station you need.<br><br>

    You will see that many of the trains with have “Uptown”, “Downtown”, or the name of a borough. When you see “Uptown” it just means that it is North from where you are currently standing. “Downtown” means that is South from where you are currently standing. The name of a borough on the train just means the last stop, if that borough is North of you then you are going North and vice versa.<br><br>

    Within the station itself, you will see signs hanging down with the number of the trains that stop at that station and the hours that it operates. To tell which train is pulling in currently look at the sign on the front and sides of the train to see what number it is and the direction it’s traveling in.

    <h5>How to Ride the Subway in New York</h5>
      <p class="how-to-intro">Once you find the correct station that you need to be at you can enter the station with a MetroCard. If you don’t have a card and need one you can purchase one from the station operators booth or a MetroCard Vending Machine.<p>
    <div class="subway-how-to-wrapper">
      <div class="subway-how-to">
        <h6>Turnstiles</h6>
          When approaching the turnstile swipe your MetroCard on the right side of the turnstile and walk through once the screen reads “Ok”. If your card does not go through try swiping the card faster. If your card is still not working then see an attendant. Do not jump over the turnstile, if you jump over you can not only hurt yourself but you can also be arrested.
      </div>

      <div class="subway-how-to">
        <h6>Entering the Train</h6>
          Once you are on the platform wait behind the yellow line for your train. When your train pulls into the station wait for the people exiting to leave first and then walk in and take a seat. If you want a better chance of finding an available seat try the first and last cars. They tend to have fewer people in them and you might be able to take a seat and rest your feet for the ride.
      </div>

      <div class="subway-how-to">
        <h6>Transfers</h6>
          Sometimes when riding the subway you might have to transfer trains or stations. At some stops, there is an underground tunnel for riders to transfer from popular stations. Using these tunnels will save you time. You get one transfer for free on your MetroCard as long as it is within 2 hours from the start of your trip.
      </div>

      <div class="subway-how-to">
        <h6>Knowing When to Get Off</h6>
          Try to have an idea of how many stops your train will have until you have to get off. When you are coming into a station the conductor will announce what station you are at however it is often hard to hear and mumbled. It’s best to keep an eye out the window when you pull in, there will be the station number on the poles inside of the station and sometimes will be tiled into the wall of the station.
      </div>
    </div>
    <div class="app-section">
        <h6>Apps to Help You Navigate the Subway</h6>
          Citymapper<br><br>

          Citymapper is a great app to have not only for the subway but for any transportation in New York City. Once you put your start and end destination in Citymapper will calculate different ways to get there while giving real-time delay updates. It will even tell you how many calories you’ll burn and the cost of your fare. This app is also available as a website.
    </div>
  </section>
  `);

  export default subwaySection;
