import React, { useState } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder for email subscription logic
    console.log(`Subscribed email: ${email}`);
    setSubscribed(true);
    window.location.href = '../pages/subscribe'; // Direct to subscribe page
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <footer class="footer">
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <div class="footer-title m-t-5 m-b-30 p-b-8">About us</div>
                  <p class="white-text">
                    it is a long established fact that a reader will be distracted by the readable content of a page when
                    look at
                  </p>
                  <div class="footer-social-links m-t-30">
                    <li>
                      <a href="https://www.facebook.com//" className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>
                      <a href="https://www.instagram.com/" className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a>
                    </li>
                  </div>
                </div>
                <div class="col-sm">
                  <div class="footer-title m-t-5 m-b-30 p-b-8">Course</div>
                  <div class="footer-links">
                    <p>Web Design/Development</p>
                    <p>App Development</p>
                    <p href="#">UI/UX Design</p>
                    <p href="#">HubSpot Integration</p>
                    <p href="#">Email Marketing</p>
                    <p href="#">Website Migration</p>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="footer-title m-t-5 m-b-20 p-b-8">Subscribe Us</div>
                  <div class="footer-links">
                    <p href="#">It is a long established fact that a reader will be distracted by the readable</p>
                    {subscribed ? (
                      <p>Thank you for subscribing!</p>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div class="form-group">
                          {/* <input
                            type="email"
                            class="form-control"
                            id="email-input"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
							style={{ marginRight: '10px', marginBottom: '10px' }}
                          /> */}
                        </div>
						{/* <button onClick={handleSubmit} type="submit" class="btn btn-primary subscribe-btn" style={{ background: '#FF3E54', borderBlockColor:'#FF3E54', textAlign: 'right'  }}> */}
            <Link to="/subscribe">
              <button class="btn btn-primary subscribe-btn" style={{ background: '#FF3E54', borderBlockColor:'#FF3E54', textAlign: 'center' }}>Subscribe</button></Link>
							{/* Subscribe
							</button> */}
                      </form>
                    )}


                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div class="footer-bottom">© 2023, All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
