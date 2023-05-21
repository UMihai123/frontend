import React, { useState } from 'react';
import '../cart.css';

export default function Cart() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const cardNumberValue = event.target.cardNumber.value;
    const expiryDateValue = event.target.expiryDate.value;
    const cvvValue = event.target.cvv.value;
    console.log('Card details submitted:', cardNumberValue, expiryDateValue, cvvValue);
  
    setCardNumber(cardNumberValue);
    setExpiryDate(expiryDateValue);
    setCvv(cvvValue);
    setFormSubmitted(true);
  };

  const handleClosePopup = () => {
    setFormSubmitted(false);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="cart">
      <div className="product">
            <div className="product-info">
                <h2>Product 1</h2>
                <h3>Price: 30</h3>
                <p>Quantity: 1</p>
                <button className="remove">Remove</button>
            </div>
        </div>

        <div className="product">
            <div className="product-info">
                <h2>Product 2</h2>
                <h3>Price: 25</h3>
                <p>Quantity: 1</p>
                <button className="remove">Remove</button>
            </div>
        </div>
                <div className="product">
                    <div className="product-info">
                        <h2>Product 3</h2>
                        <h3>Price: 15</h3>
                        <p>Quantity: 1</p>
                        <button className="remove">Remove</button>
                    </div>
                </div>
                </div>
                <div className="checkout-container">
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
        {showCheckout && (
          <div className="checkout-popup">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <label>
                  Card Number:
                  <input type="text" name="cardNumber" required />
                </label>
                <label>
                  Expiry Date:
                  <input type="text" name="expiryDate" required />
                </label>
                <label>
                  CVV:
                  <input type="text" name="cvv" required />
                </label>
                <button type="submit">Submit</button>
              </form>
            ) : (
              <div className="popup">
                <div className="popup-content">
                  <h2>Data ta a fost procesată:</h2>
                  <p>Card Number: {cardNumber}</p>
                  <p>Expiry Date: {expiryDate}</p>
                  <p>CVV: {cvv}</p>
                  <button onClick={handleClosePopup}>Close</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}








