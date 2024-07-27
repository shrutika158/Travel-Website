import REACTIMAGES from './assets/package-1.jpg';
import REACTIMAGESS from './assets/package-2.jpg';
import REACTIMAGESSS from './assets/package-3.jpg';
import REACTIMAGESSSS from './assets/package-4.jpg';
import REACTIMAGESSSSS from './assets/package-5.jpg';
import REACTIMAGESSSSSS from './assets/package-6.jpg';

import './package.css';

function Hotel() {
  return (
    <div className="App">
      <section className="section__container popular__container">
      <h2 className="section__header"> Our Popular Packages</h2>
      <div className="popular__grid">
        <div className="popular__card">
          <img src={REACTIMAGES} alt="popular hotel" width="90%" height="70%"/>
          <div className="popular__content">
            <div className="popular__card__header">
              {/* <h4>The Plaza Hotel</h4>
              <h4>$499</h4> */}
            </div>
            <button class=" btn-outline-success" type="submit"><a href="/hotelbookinginfo">BOOK</a></button>
            {/* <p>New York City, USA</p> */}
          </div>
        </div>
        <div className="popular__card">
          <img src={REACTIMAGESS} alt="popular hotel" width="90%" height="70%" />
          <div className="popular__content">
            <div className="popular__card__header">
              {/* <h4>Ritz Paris</h4>
              <h4>$549</h4> */}
            </div>
            <button class=" btn-outline-success" type="submit"><a href="/hotelbookinginfo">BOOK</a></button>
            {/* <p>Paris, France</p> */}
          </div>
        </div>
        <div className="popular__card">
          <img src={REACTIMAGESSS} alt="popular hotel" width="90%" height="70%"/>
          <div className="popular__content">
            <div className="popular__card__header">
              {/* <h4>The Peninsula</h4>
              <h4>$599</h4> */}
            </div>
            <button class=" btn-outline-success" type="submit"><a href="/hotelbookinginfo">BOOK</a></button>.
            {/* <p>Hong Kong</p> */}
          </div>
        </div>
        <div className="popular__card">
          <img src={REACTIMAGESSSS} alt="popular hotel" width="90%" height="70%"/>
          <div classNam="popular__content">
            <div className="popular__card__header">
              {/* <h4>Atlantis The Palm</h4>
              <h4>$449</h4> */}
            </div>
            <button class=" btn-outline-success" type="submit"><a href="/hotelbookinginfo">BOOK</a></button>
            {/* <p>Dubai, United Arab Emirates</p> */}
          </div>
        </div>
        <div className="popular__card">
          <img src={REACTIMAGESSSSS} alt="popular hotel" width="90%" height="70%"/>
          <div className="popular__content">
            <div className="popular__card__header">
              {/* <h4>The Ritz-Carlton</h4>
              <h4>$649</h4> */}
            </div>
            <button class=" btn-outline-success" type="submit"><a href="/hotelbookinginfo">BOOK</a></button>
            {/* <p>Tokyo, Japan</p> */}
          </div>
        </div>
        <div className="popular__card">
          <img src={REACTIMAGESSSSSS} alt="popular hotel" width="90%" height="70%"/>
          <div className="popular__content">
            <div className="popular__card__header">
              {/* <h4>Marina Bay Sands</h4>
              <h4>$549</h4> */}
            </div>
            <button class=" btn-outline-success" type="submit"><a href="/hotelbookinginfo">BOOK</a></button>
            {/* <p>Singapore</p> */}
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

export default Hotel;
