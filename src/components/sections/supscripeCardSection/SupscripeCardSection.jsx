import React from 'react';
import './SupscripeCardSection.css'; // Import the CSS file

function SupscripeCardSection() {
  return (
    <div className='subscription-form'>
      <div className="card p-2">
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <p>Get weekly updates</p>
        <p>Fill in your details to join the party!</p>
        <input type="text" placeholder="Your name" className="input-field" />
        <input type="email" placeholder="Email address" className="input-field" />
        <div>

        <button type="submit" className="submit-btn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default SupscripeCardSection;
