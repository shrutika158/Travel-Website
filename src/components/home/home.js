import './home.css';
import CLIENTIMAGES from './images/client-1.jpg';
import CLIENTIMAGESS from './images/client-2.jpg';
import CLIENTIMAGESSS from './images/client-3.jpg';

import hotel1 from './hotelimg/hotel-1.png';
import hotel2 from './hotelimg/hotel-2.png';
import hotel3 from './hotelimg/hotel-3.png';
import hotel4 from './hotelimg/hotel-4.png';
import hotel5 from './hotelimg/hotel-5.png';
import hotel6 from './hotelimg/hotel-6.png';
import hotel7 from './hotelimg/hotel-7.png';
import hotel8 from './hotelimg/hotel-8.png';
import hotel9 from  './hotelimg/hotel-9.png';
import hotel10 from './hotelimg/hotel-10.png';
import hotel11 from './hotelimg/hotel-11.png';
import hotel12 from './hotelimg/hotel-12.png';
import hotel13 from './hotelimg/hotel-13.png';


import image from './hill-stations-scaled.jpg';

function Home() {
  return (
    <div className="App">
        <div className="heading">
        <h1>Travel Expert</h1>
        <p>"Create Ever-Lasting Memories With Us"</p>


    </div>
    <div className="container">
        <section className="about">
            <div className="about-image">
                <img src={image} alt='image'></img>
                </div>
                <div className="about-section">
                    <h1>We are
                        Travel Expert</h1>
                        <p>Travel Expert is India's leading online travel booking brand providing range of choice for hotels, flights, trains, bus and cars for travelers. Our core value differentiator is the most trusted user experience, be it in terms of quickest search and booking, fastest payments, settlement or refund processes. Through Stays, our customers enjoy standardised stay experience at certified hotel properties. With industry first virtual travel booking currency Cash and travel social network, Cash+ Rewards - Travel Expert is the number one choice for new India on the move.</p>
                        
                        
                </div>
        </section>
    </div>
    <div class="logos">
      <h1>Our Partners</h1>
      <hr></hr>
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={hotel1} class="card-img-top" height="120" width="100" />
          </div>
          <div class="slide">
            <img src={hotel2} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={hotel3} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={hotel4} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={hotel5} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={hotel6} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={hotel7} class="card-img-top" alt="..." height="120" width="100" />
          </div>


          <div class="slide">
            <img src={hotel8} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={hotel9} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={hotel10} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={hotel11} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={hotel12} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={hotel13} class="card-img-top" alt="..." height="120" width="100" />
          </div>


        </div>
      </div>
        </div>
        <hr></hr>
      {/* <footer>
      <div className='footer'>
        <div className='footer-first'>
          <h3><img  height="80%" width="80%"    src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVMO1WoGvt0RVq0g1dFDVS5ZAwADOCDkUplb-OfX4MTL2TWJf6Ypd4GW8oJlyPLK6rQ&usqp=CAU"></img></h3>
        </div>
        <div className='footer-second'>
          <ul>
           
            <li>Instgram:</li>
            <li>travel_expert</li>
           
          </ul>
        </div>
        <div className='footer-third'>
          <ul>
            <li>Gmail:</li>
            <li>travelexpert@gmail.com</li>
          </ul>
        </div>
        <div className='footer-fourth'></div>
        <ul>
          <li>Copyright &#169; 2023 All Rights Reserved By Travel Expert</li>
        </ul>
      </div>
    
    </footer>   */}
     <section className="client">
      <div className="section__container client__container">
        <h2 className="section__header-cust"> Our Customer Feedback</h2>
        <div className="client__grid">
          <div className="client__card">
            <img src={CLIENTIMAGES } alt="client" />
            <p>
              The booking process was seamless, and the confirmation was
              instant. I highly recommend WDM&Co for hassle-free hotel bookings.
            </p>
          </div>
          <div className="client__card">
            <img src={ CLIENTIMAGESS} alt="client" />
            <p>
              The website provided detailed information about hotel, including
              amenities, photos, which helped me make an informed decision.
            </p>
          </div>
          <div className="client__card">
            <img src={CLIENTIMAGESSS} alt="client" />
            <p>
              I was able to book a room within minutes, and the hotel exceeded
              my expectations. I appreciate WDM&Co's efficiency and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>


    

    
    <footer className='text-center'>
        <p>Copyright &#169; 2023 All Rights Reserved By Travel Expert</p>
        
      </footer>
    
    </div>
  );
}

export default Home;
