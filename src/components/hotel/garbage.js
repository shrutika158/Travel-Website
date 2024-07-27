import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';


const Hotelbookinginfo = () => {
  const [booking, setProduct] = useState({
    fullName: '',
    emailAddress: '',
    people: '',
    time: '',
    date: '',
    phoneNumber: ''

    
  });

  const navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the product data to the backend using Axios POST request
    axios
      .post('http://127.0.0.1:4000/users/packagebooking', booking)
      .then((response) => {
        console.log('Product added successfully:', response.data);

        toast.success('Product added successfully!', {
            onClose: () => {
              // Redirect to the product listing component
              navigate('/productlist');
            },
          });

        // You can perform additional actions after successful product addition
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        toast.error('Error adding product. Please try again.');
      });
  };



  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name:</label>
          <input
            type="text"
            className="form-control"
            name="fullname"
            value={booking.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Description:</label>
          <input
            type="text"
            className="form-control"
            name="productDescription"
            value={product.productDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity:</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default Hotelbookinginfo;

