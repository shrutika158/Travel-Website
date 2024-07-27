import React from 'react';
import axios from 'axios';
import {useState} from 'react';


// import React from 'react';


import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
 
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
 
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/users/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
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
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
        
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
            
            <form onSubmit={handleSubmit}> 
              <h2 className="fw-bold mb-2 text-center">Log in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"
                 name="email"
                onChange={handleChange}
                 value={data.email}
 />
              
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"
              name="password"
               onChange={handleChange}
              value={data.password}
              />

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn class="login-btn" size='lg' type="submit">
                Login
              </MDBBtn>
              <br></br>
              <p>Admin Login Here!</p>
              
              
              </form>

              {/* <hr className="my-4" />

              <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                <MDBIcon fab icon="google" className="mx-2"/>
                Sign in with google
              </MDBBtn>

              <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Sign in with facebook
              </MDBBtn> */}

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>
      

    </MDBContainer>
  );
}

export default App;