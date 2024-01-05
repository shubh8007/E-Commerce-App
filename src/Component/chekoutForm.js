import React, { useState } from 'react';

const CheckoutForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');

  const handleSubmit = () => {
    // Validate and submit the form
    onSubmit({ name, address, paymentDetails });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

        <label>Payment Details:</label>
        <input
          type="text"
          value={paymentDetails}
          onChange={(e) => setPaymentDetails(e.target.value)}
        />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
