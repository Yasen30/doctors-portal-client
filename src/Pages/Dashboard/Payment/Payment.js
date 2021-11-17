import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Form from "./Form";

const stripePromise = loadStripe(
  "pk_test_51Jvkj6FkcxhOaq5HgaV9EVYBhC1EMZgKKEzjKBX61uJWQ3UJyDPQonWazo8pBE81bfhkTT8aRo0WnebbGfXxU2eB00yRxiw1NL"
);

const Payment = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${id}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [id]);
  return (
    <div>
      <h2>
        Please Pay for: {appointment.name} for {appointment.servicesName}
      </h2>
      <h4>Pay: ${appointment.price}</h4>
      <Elements stripe={stripePromise}>
        <Form data={appointment}></Form>
      </Elements>
    </div>
  );
};
export default Payment;
