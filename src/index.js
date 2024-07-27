import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/main'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import UserLogin from './components/user/userlogin';
import Aboutus from './components/aboutus/aboutus';
import UserRegister from './components/user/userregister';
import Home from './components/home/home';
import Query from './components/query/query';
import Submit from './components/query/submit';
import Hotels from './components/hotels/hotels';
import Package from './components/hotel/package';
import Hotelsbooking from './components/hotels/hotelsbooking';
import Hotelbookinginfo from './components/hotel/hotelbookinginfo';





const root = ReactDOM.createRoot(document.getElementById('root'));
const adminuser = localStorage.getItem("token");
root.render(
  // <React.StrictMode>
  //   <Header/>
    
  //   {/* <About/>
  //   <App /> */}
  // </React.StrictMode>

<Router>  

    <Header/>
  

    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<Home />} />
      
      <Route path="aboutus" element={<Aboutus subtitle="About page subtitle"/>} />
      <Route path="userlogin" element={<UserLogin />} />
      <Route path="userregister" element={<UserRegister />} />
      <Route path="query" element={<Query />} />
      <Route path="submit" element={<Submit />} />
      <Route path="package" element={<Package />} /> 
      {/* <Route path="package" element={userregister ? <Package /> : <UserRegister />} /> */}
      <Route path="hotels" element={<Hotels />} />
      <Route path="hotelbookinginfo" element={<Hotelbookinginfo />} />
      <Route path="hotelsbooking" element={<Hotelsbooking />} />

      
      
      
      
      
    




    </Routes>
  </Router>
  




);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
