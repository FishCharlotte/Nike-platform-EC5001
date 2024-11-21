import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><Link to="/store">Find A Store</Link></li>
            <li><Link to="/member">Become A Member</Link></li>
            <li><Link to="/education">Education Discounts</Link></li>
            <li><Link to="/feedback">Send Us Feedback</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><Link to="/help">Get Help</Link></li>
            <li><Link to="/order-status">Order Status</Link></li>
            <li><Link to="/delivery">Delivery</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/payment">Payment Options</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Nike</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/investors">Investors</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
          </ul>
        </div>

        <div className="footer-section location">
          <div className="location-selector">
            <span>🌍</span>
            <span>Hong Kong | Hong Kong</span>
          </div>
          <p className="copyright">© 2024 Nike, Inc. All rights reserved</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <Link to="/guides">Guides</Link>
          <Link to="/terms">Terms of Sale</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/privacy">Nike Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 