import React from 'react';
import axios from 'axios';
import {useState} from 'react';



// import logo from './logo.svg';
 import './query.css';

function Query() {
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
 
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
 
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/users/querybooking";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
      alert("Your Query have been submitted");
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
      <div className='container'>
        <h1>Connect With Us</h1>
        <p>We would love to respond to your queries and help you succeed. </p>
          {/* <p>Feel free to get in touch with us.</p> */}
        
        <div className='contact-box'>
            <div className='contact-left'>
                <h3>SEND YOUR REQUEST</h3>
                  <form onSubmit={handleSubmit}>
                    <div className='input-row'>
                        <div className='input-group'>
                            <label>NAME</label>
                            <input type="text"
                            name="name"
                            onChange={handleChange}
                            value={data.name}
                            ></input>
                        </div>
                        <div className='input-group'>
                            <label>Hotel Name</label>
                            <input type="text"
                             name="hotelname"
                             onChange={handleChange}
                             value={data.hotelname}
                            ></input>
                        </div>
                        
                    </div>
                    <div className='input-row'>
                        <div className='input-group'>
                            <label>HOTEL ID</label>
                            <input type="text" 
                            name="hotelId"
                            onChange={handleChange}
                            value={data.hotelId}
                            ></input>
                        </div>
                        <div className='input-group'>
                            <label>BOOKING ID</label>
                            <input type="text"
                            name="bookingId"
                            onChange={handleChange}
                            value={data.bookingId}
                            ></input>
                        </div>
                        
                    </div>
                       <label>Please Write Your Query Here</label>
                       <textarea  rows="5"></textarea>
                      
                      <button className='GG' type="submit">SEND
                        
                        {/* <a href="/submit">
                            SEND</a>   */}           </button>   



                  </form>




            </div>
            <div className='contact-right'>
                <h3>REACH US</h3>
                <table>
                    <tr>
                        <td>Email:</td>
                        <td>travelexpert@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>+91 90909090</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>14, DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana 122022</td>
                    </tr>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Query;
