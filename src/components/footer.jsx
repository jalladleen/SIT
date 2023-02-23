import React, { useState } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(`Subscribed email: ${email}`);

    try {
      await axios.post('/api/subscribe', {
        email,
      });
      setSubscribed(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

const Footer =()=> {
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
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    look at
                  </p>
                  <div class="footer-social-links m-t-30">
                    <li>
                      <a href="https://www.facebook.com//" className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>
                      <a href="https://www.twitter.com/" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
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
                    <a href="#">Web Design/Development</a>
                    <a href="#">App Development</a>
                    <a href="#">UI/UX Design</a>
                    <a href="#">HubSpot Integration</a>
                    <a href="#">Email Marketing</a>
                    <a href="#">Website Migration</a>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="footer-title m-t-5 m-b-20 p-b-8">Subscribe Us</div>
                  <div class="footer-links">
                    <a href="#">it is a long established fact that a reader will be distracted by the readable</a>
                    {subscribed ? (
                      <p>Thank you for subscribing!</p>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            id="email-input"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
							style={{ marginRight: '10px', marginBottom: '10px' }}
                          />
                        </div>
						<button type="submit" class="btn btn-primary subscribe-btn" style={{ background: '#FF3E54', borderBlockColor:'#FF3E54', textAlign: 'right'  }}>
							Subscribe
							</button>
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
}}
export default Footer;
