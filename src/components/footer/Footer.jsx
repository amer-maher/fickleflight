import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        {/* Left Column */}
        <div className="col-6 footer-description">
          <img src="" alt="88" className="footer-logo" />
          <p>
            Fickle Flight is your one-stop travel portal. We offer hassle-free flight and hotel bookings.
            We also have all your flight needs in our online shop.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-6">
          <div className="row">
            <div className="col-4">
              <h4>Company</h4>
              <ul>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/how-we-work">How We Work</a></li>
              </ul>
            </div>
            <div className="col-4">
              <h4>Support</h4>
              <ul>
                <li><a href="/account">Account</a></li>
                <li><a href="/support-center">Support Center</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/accessibility">Accessibility</a></li>
              </ul>
            </div>
            <div className="col-4">
              <h4>More</h4>
              <ul>
                <li><a href="/covid-advisory">Covid Advisory</a></li>
                <li><a href="/airline-fees">Airline Fees</a></li>
                <li><a href="/tips">Tips</a></li>
                <li><a href="/quarantine-rules">Quarantine Rules</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
