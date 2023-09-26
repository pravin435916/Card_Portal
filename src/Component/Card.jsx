import React from "react";
import "./home.css";
function Card({user,date}) {
  return (
    <>
    <div className="card" id="card">
      <div className="nav-card">
      <span>QR</span>
      <span>VISA</span>
      </div>
      <div className="number">
        <span>9867 6767 7831 4231</span>
      </div>
      <div className="foot-card">
        <div className="holder">
          <span>Card Holder</span>
          <span>{user}</span>
        </div>
        <div className="date">
          <span>Expires</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
    </>
  );
}
export default Card;

// import React, { useState } from 'react';

// function Home() {
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardHolder, setCardHolder] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');

//   return (
//     <div className="payment-card">
//       <div className="card">
//         <div className="card-header">
//           <img
//             src="visa-logo.png" // Replace with your Visa logo image
//             alt="Visa Logo"
//           />
//         </div>
//         <div className="card-number">{cardNumber}</div>
//         <div className="card-footer">
//           <div className="card-holder">{cardHolder}</div>
//           <div className="expiry-date">{expiryDate}</div>
//         </div>
//       </div>
//       <div className="cvv">{cvv}</div>
//       <form>
//         <input
//           type="text"
//           placeholder="Card Number"
//           value={cardNumber}
//           onChange={(e) => setCardNumber(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Card Holder"
//           value={cardHolder}
//           onChange={(e) => setCardHolder(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Expiry Date"
//           value={expiryDate}
//           onChange={(e) => setExpiryDate(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="CVV"
//           value={cvv}
//           onChange={(e) => setCvv(e.target.value)}
//         />
//       </form>
//     </div>
//   );
// }

// export default Home;

