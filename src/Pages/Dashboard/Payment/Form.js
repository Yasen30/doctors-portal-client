import React, { createElement, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import UseAuth from "../../../Hooks/UseAuth";
import { CircularProgress } from "@mui/material";

const Form = (props) => {
  const { price, name, _id } = props.data;
  const { user } = UseAuth();
  const stripe = useStripe();
  const elements = useElements();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const onSubmit = async (data) => {
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      setError("");
    }
    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: user?.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your payment processed successfully.");
      console.log(paymentIntent);
      setProcessing(false);
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
      };
      const url = `http://localhost:5000/appointments/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress></CircularProgress>
        ) : (
          <button type="submit" disabled={!stripe || success}>
            Pay
          </button>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </div>
  );
};

export default Form;
