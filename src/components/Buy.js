import React from 'react';
import './Buy.css';
import Footer from './Footer';
import Nav from './Nav';

const Buy = () => {
  return (
    <>
    <Nav />
      <div className="buy-container">
        <h1>Payment Details</h1>
        <form>
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Card Holder</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input type="text" />
          </div>
          <button type="submit" className="buy-now-button">
            Submit Payment
          </button>
        </form>
        
      </div>
      <Footer/>
    </>
  );
};

export default Buy;
