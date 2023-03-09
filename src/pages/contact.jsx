import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    document.title = "SIT | Contact";
  }, []);

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    // const { user_name, user_email, message } = form.current.elements;
    // const templateParams = {
    //   "from_name": user_name.value,
    //   "subject": "New Message from " + user_name.value,
    //   "message_html": message.value,
    //   "reply_to": user_email.value // use user_email instead of your email
    // };

    emailjs.sendForm('service_kkjoutp', 'template_umqkdbm', form.current, 'glmdBWlmeEKsfodH4')
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
        <div className='container' style={{ display: "flex", width: "1300px" }}>
          <div className="form-container" >
            {isMessageVisible ?
              <div className="success-message">
                <p>Message sent!</p>
                <button onClick={() => setIsMessageVisible(false)}>Close</button>
              </div> :
              null
            }
            <form ref={form} onSubmit={sendEmail} >
              <input type="text" name="user_fname" placeholder="First Name" style={{ background: "#f7f7f7" }} required />

              <input type="text" name="user_lname" placeHolder="Last Name" style={{ background: "#f7f7f7" }} required />

              <input type="email" name="user_email" placeHolder="Email" style={{ background: "#f7f7f7" }} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />

              <input type="tel" name="user_phone" placeHolder="Phone" style={{ background: "#f7f7f7" }} required />

              <input type="text" name="user_subject" placeHolder="Subject" style={{ background: "#f7f7f7" }} required />

              <textarea name="message" placeHolder="Your Message" style={{ background: "#f7f7f7" }} required />
              <input type="submit" value="Send Now" style={{ width: "150px", padding: "15px" }} />
            </form>
          </div>
          <div className="info">
            <div>
              <h3>send Email</h3>
              <h6>enter email here</h6>
              <br></br>

              <h3>Follow us</h3>

              <div className="socials">
                <button style={{ color: "white", backgroundColor: "#ff304d" }} type="submit"></button>
                <button style={{ color: "white", backgroundColor: "#ff304d" }} type="submit"></button>
                <button style={{ color: "white", backgroundColor: "#ff304d" }} type="submit"></button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div >
  );
};

export default Contact;