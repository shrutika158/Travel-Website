import React from 'react';
import axios from 'axios';
import {useState} from 'react';


import LOGO from './art-1.png';
import './hotelbookinginfo.css';

function Hotelbookinginfo() {

  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
 
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
 
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url ="http://localhost:3000/users/packagebooking";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
            alert("Your response have been submitted");
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
  };

         
                
  return (
    <div className="App">
      <div class="form">
        <div class="form-text">
            <h1><span><img src={LOGO} alt=""/></span>Book Now <span><img src={LOGO} alt=""/></span></h1>
            <p>BOOK YOUR LAVISH PACKAGE</p>
        </div>
        <div className='image-container'>
        <div class="main-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Your full name ?</span>
                    <input type="name" 
                   name="fullName"
                   onChange={handleChange}
                   value={data.fullName}
                    />
                </div>
                <div>
                    <span>Your email address ?</span>
                    <input type="email" 
                    name="emailAddress"
                    onChange={handleChange}
                    value={data.emailAddress}
                    
                    /> 
                </div>
                <div>
                    
                    <span>How many people ?</span>
                    {/* <select name="people" id="people" required>
                        <option value=""></option>
                        <option value="1">1 People</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                    </select> */}
                    <input type="name"
                    name="people"
                    onChange={handleChange}
                    value={data.people}
                    />
                    
                </div>
                <div>
                    <span>What time ?</span>
                    <input type="text" 
                     name="time"
                     onChange={handleChange}
                     value={data.time}
                     
                    />
                </div>
                <div>
                    <span>What is the date ?</span>
                    <input type="date" 
                     name="date"
                     onChange={handleChange}
                     value={data.date}
                    />
                </div>
                <div>
                    <span>Your phone number ?</span>
                    <input type="number"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={data.phoneNumber}
                    
                    
                    />
                </div>
                <div id="submit">
                    <input type="submit" value="SUBMIT" id="submit"/>
                </div>


            </form>
            
        </div>
        <div className='imgback'>
            <img src="https://s3-eu-west-1.amazonaws.com/lincolnshire-coop/images/travel/_contentImage/Package-holidays-webpage-image.jpg"></img>
        </div>
        </div>
        
        
    </div>
    
    </div>
  );
}

export default Hotelbookinginfo;
