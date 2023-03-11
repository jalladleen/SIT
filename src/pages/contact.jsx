import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const form = useRef();
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    document.title = "SIT | Contact";
  }, []);

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”


    // Leen's Info (Team lead)
    // emailjs.sendForm('service_kkjoutp', 'template_umqkdbm', form.current, 'glmdBWlmeEKsfodH4')

    //Client info to be used
    emailjs.sendForm('service_vukme39', 'template_4o0macg', form.current, 'W8jFq11Su6rJ4GRtl')

      .then(() => {
        setIsMessageVisible(true);
        form.current.reset();
      }, () => {
        // show the user an error
      });
  };


  return (
    <div className="all-containers">
      <div className="bannerContact">
        <h1 className="titleContact">Contact</h1>
        <h2 className="subtitleContact">Home / Contact</h2>
      </div>
      <div className='bodyContact'>
        <h6 className="route"
          style={{
            color: "#FF3E54", textAlign: "center", fontWeight: 'bold',
            fontSize: "24px", paddingTop: "50px"
          }}

        >\ Get In Touch \</h6>
        <h4 className="learn" style={{ color: "#0E1F51", textAlign: "center", font: "Raleway" }}>Hey! Let's Talk</h4>
        <div className='container' style={{ display: "flex"}}>
          <div className="form-container" style={{ marginRight: "-100px"}}>
            {isMessageVisible ?
              <div className="success-message">
                <p>Message sent!</p>
                <button onClick={() => setIsMessageVisible(false)}>Close</button>
              </div> :
              null
            }
            <form ref={form} onSubmit={sendEmail}  >
              <input type="text" name="user_fname" placeholder="First Name" style={{ background: "#f7f7f7" }} required />

              <input type="text" name="user_lname" placeHolder="Last Name" style={{ background: "#f7f7f7" }} required />

              <input type="email" name="user_email" placeHolder="Email" style={{ background: "#f7f7f7" }} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />

              <input type="tel" name="user_phone" placeHolder="Phone" style={{ background: "#f7f7f7" }} required />

              <input type="text" name="user_subject" placeHolder="Subject" style={{ background: "#f7f7f7" }} required />

              <textarea name="message" placeHolder="Your Message" style={{ background: "#f7f7f7" }} required />
              <input type="submit" value="Send Now" style={{ width: "150px", padding: "15px" }} />
            </form>
          </div>
          <div className="info" >
            <div>

              <center><h3>Follow us</h3></center>
              <br />

              <div className="socials" style={{display:"flex"}}>
                <button style={{ color: "white", backgroundColor: "#ff304d" }} type="submit">
                  <a href="https://www.facebook.com//" className="facebook social"  style={{color: "white"}}>
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                </button>

                
                <button style={{ color: "white", backgroundColor: "#ff304d" }} type="submit">
                  <a href="https://www.instagram.com/" className="instagram social"  style={{color: "white"}}>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </button>

              </div>
              <br /><br />

              <h5><a href =  "mailto: seniorsinit.club@westernusc.ca">Send Email To SIT</a></h5>


            </div>

          </div>
        </div>
      </div>
    </div >
  );
};

export default Contact;