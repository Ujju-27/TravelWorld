import React, { useState, useContext } from "react";
import "../../styles/booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { AuthContext } from "../../context/AuthContext.js";
import { BASE_URL } from "../../utils/config.js";
import {loadStripe} from '@stripe/stripe-js';

const Booking = ({ tour, avgRating,}) => {
  const { price, reviews = [],title, photo } = tour;
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    tourphoto: photo,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

 
  const serviceCharge = 30;
  const totalCharge = Number(price) * Number(booking.guestSize) + Number(serviceCharge);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
        const stripe = await loadStripe("pk_test_51PeJp6GXKmzJp2YP7esTtAGNyt1qnXFR57YZo6owjdVBNF4INYG8c25aD2FKmF04YlVJOnC0zZjohBUVuiIdnmz500rWyXij4u");
        if(!user || user === undefined || user=== null){
            return alert('Please Sign in.');
        }
        const res = await fetch(`${BASE_URL}/create-checkout-session`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials:'include',
            body: JSON.stringify({booking, totalCharge}),
        });
        
        const session = await res.json();
        const result = stripe.redirectToCheckout({
          sessionId: session.id
        });
        if(result.error){
            console.log(result.error);
        }
      } catch (err) {
        alert(err.message);
      }
  };


  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          $ {price}
          <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-item-center gap-1">
          <i className="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews.length})
        </span>
      </div>

      {/*-------------------Booking Form---------------- */}
      <div className="booking__form">
        <h5>Required Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Enter your Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Enter your Phone No."
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest Size"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      <div className="booking__bottom">
        <h4>Total Payout:</h4>
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5>Room Rent (Person): </h5>
            <span>$ {price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge: </h5>
            <span>$ {serviceCharge}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total Charges:</h5>
            <span>$ {totalCharge}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
