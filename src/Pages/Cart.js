import React, { useState } from 'react';
import '../cart.css';

export default function Cart() {
  const [showCheckout, setShowCheckout] = useState(false);   //stare pentru a gestiona vizibilitatea ferestrei pop-up de finalizare a achizitiei
  const [formSubmitted, setFormSubmitted] = useState(false); //stare sa vedem daca formularul a fost trimis
  const [cardNumber, setCardNumber] = useState(''); //stare pt a stoca datele cardului introdus 
  const [expiryDate, setExpiryDate] = useState(''); //stare pt a stoca data de expirare a cardului
  const [cvv, setCvv] = useState(''); //stare pt cvv

  const handleCheckout = () => {
    setShowCheckout(true); //seteaza starea pe true atunci cand se apasa butonul ,,Finalizare achizitie''
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const cardNumberValue = event.target.cardNumber.value; //obtine valoarea introdusa pt numar
    const expiryDateValue = event.target.expiryDate.value; // pt data de expirare
    const cvvValue = event.target.cvv.value; //pt cvv
    console.log('Card details submitted:', cardNumberValue, expiryDateValue, cvvValue);
  
    setCardNumber(cardNumberValue); //actualizeaza starea cardNumber
    setExpiryDate(expiryDateValue); //actualizeaza starea expirtDate
    setCvv(cvvValue); //cvv
    setFormSubmitted(true); //seteaza ca formularul a fost trimis
  };

  const handleClosePopup = () => {
    setFormSubmitted(false); //seteaza starea formSubmitted pe false cand se inchide fereastra pop-up
  };

  return (
    <div>
      <h1 class="title">Your Cart</h1>
      {/* <div className="cart">
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
                </div> */}
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








