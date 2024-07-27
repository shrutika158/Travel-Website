import PHOTOS from './photos/hotel-1 (2).jpg';
import PHOTOSS from './photos/hotel-2.jpg';
import PHOTOSSS from './photos/hotel-3.jpg';
import PHOTOSSSS from './photos/hotel-4.jpg';
import PHOTOSSSSS from './photos/hotel-5.jpg';
import PHOTOSSSSSS from './photos/hotel-6.jpg';
import PHOTOSSSSSSS from './photos/hotel-7.jpg';
import PHOTOSSSSSSSS from './photos/hotel-8.jpg';
import PHOTOSSSSSSSSS from './photos/hotel-9.jpg';

import './hotels.css';

function Hotels() {
  return (
    <div className="App">
       <section className="section__container popular__container">
      <h2 className="section__header">Our Popular Hotels</h2>
      <div className="popular__grid">
        <div className="popular__card">
          <img src={PHOTOS} alt="popular hotel"width="100%" height="70%" />
          <div className="popular__contents">
            <div className="popular__card__header">
              <h4> Plaza Hotel, Shimla</h4>
              <h4>Rs.4999</h4>
            </div>
            <button class="outline-success" type="submit"><a href="/hotelsbooking">BOOK</a></button>
            {/* <p>New York City, USA</p> */}
            
          </div>
        </div>
        <div className="popular__card">
          <img src={PHOTOSS} alt="popular hotel" width="100%" height="70%"/>
          <div className="popular__contents">
            <div className="popular__card__header">
              <h4>The Ritz , Manali</h4>
              <h4>Rs.5499</h4>
            </div>
            <button class="outline-success" type="submit"><a href="/hotelsbooking">BOOK</a></button>
            {/* <p>Paris, France</p> */}
          </div>
        </div>
        <div className="popular__card">
          <img src={PHOTOSSS} alt="popular hotel" width="100%" height="70%"  />
          <div className="popular__contents">
            <div className="popular__card__header">
              <h4>The Peninsula, Goa</h4>
              <h4>Rs.5999</h4>
            </div>
            <button class="outline-success" type="submit"><a href="/hotelsbooking">BOOK</a></button>
            {/* <p>Hong Kong</p> */}
          </div>
        </div>
        <div className="popular__card">
        <img src={PHOTOSSSS} alt="popular hotel" width="100%" height="70%"/>
          <div className="popular__contents">
            <div className="popular__card__header">
              <h4>The Atlantis, Dubai </h4>
              <h4>Rs.44999</h4>
            </div>
            <button class="outline-success" type="submit"><a href="/hotelsbooking">BOOK</a></button>
            {/* <p>Dubai, United Arab Emirates</p> */}
          </div>
        </div>
        <div className="popular__card">
          <img src={PHOTOSSSSS} alt="popular hotel" width="100%" height="70%"/>
          <div className="popular__contents">
            <div className="popular__card__header">
              <h4>The Ritz-Carlton, Kerala</h4>
              <h4>Rs.64999</h4>
            </div>
            <button class="outline-success" type="submit"><a href="/hotelsbooking">BOOK</a></button>
            {/* <p>Tokyo, Japan</p> */}
          </div>
        </div>
        <div className="popular__card">
          <img src={PHOTOSSSSSS} alt="popular hotel" width="100%" height="70%" />
          <div className="popular__contents">
            <div className="popular__card__header">
              <h4>Taj Royal, Sikkim</h4>
              <h4>Rs.54990</h4>
            </div>
            <button class="outline-success" type="submit"><a href="/hotelsbooking">BOOK</a></button>
            {/* <p>Singapore</p> */}
          </div>
        </div>
      

      <div className="popular__card">
          <img src={PHOTOSSSSSSS } alt="popular hotel" width="100%" height="70%" />
          <div className="popular__contents">
            <div className="popular__card__header">
              <h4>Marina Bay Sands, Maldives</h4>
              <h4>Rs.54999</h4>
            </div>
            <button class="outline-success" type="submit"><a href="/hotelsbooking">BOOK</a></button>
            {/* <p>Singapore</p> */}
          </div>
        </div>
         

         <div className="popular__card">
          <img src={PHOTOSSSSSSSS } alt="popular hotel" width="100%" height="70%" />
          <div className="popular__contents">
            <div className="popular__card__header">
              <h4>The Sherton, Udaipur</h4>
              <h4>Rs.54978</h4>
            </div>
            <button class="outline-success" type="submit"><a href="/hotelsbooking">BOOK</a></button>
            {/* <p>Singapore</p> */}
          </div>
        </div>
         

         <div className="popular__card">
          <img src={PHOTOSSSSSSSSS } alt="popular hotel" width="100%" height="70%" />
          <div className="popular__contents">
            <div className="popular__card__header">
              <h4>Hyatt Residency, Delhi</h4>
              <h4>Rs.54998</h4>
            </div>
            <button class="outline-success" type="submit"><a href="/hotelsbooking">BOOK</a></button>
            {/* <p>Singapore</p> */}
          </div>
        </div>
         </div>


    </section>




    


    </div>
  );
}

export default Hotels;