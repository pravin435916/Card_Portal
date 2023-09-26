import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import "./make.css";
function MakeCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [card, setCard] = useState("");
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <>
        <h1 id="h1">Make Your Own Card Here</h1>
      <div className="make-card">
        <animated.div className="card-2" id="card" style={fadeIn}>
          <div className="nav-card">
            <span>QR</span>
            <span>{card}</span>
          </div>
          <div className="number">
            <span>{cardNumber}</span>
          </div>
          <div className="foot-card">
            <div className="holder">
              <span>Card Holder</span>
              <span>{cardHolder}</span>
            </div>
            <div className="date">
              <span>Expires</span>
              <span>{expiryDate}</span>
            </div>
          </div>
        </animated.div>
        <form className="form">
          <label for="cars">Choose a Card:</label>
          <select id="cards" 
          value={card }
          onChange={(e) => setCard(e.target.value)}>
            <option value='Visa'>Visa</option>
            <option value="ATM">ATM</option>
            <option value="Debit">Debit</option>
            <option value="Credit">Credit</option>
          </select>
          {/* {card && (
            <img
              src={getCardBackground()}
              alt={`${card} Card`}
            />
          )} */}
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Card Holder"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />
          <input
            type="text"
            placeholder="Expiry Date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </form>
      </div>
      <div className="generate">
        <button>Generate Card</button>
      </div>
    </>
  );
}

export default MakeCard;
