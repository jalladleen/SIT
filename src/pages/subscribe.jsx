import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import "./subscribe.css";


 
const Subscribe = () => {
 const form = useRef();
 const [isMessageVisible, setIsMessageVisible] = useState(false);
 
 const sendEmail = (e) => {
	e.preventDefault(); // prevents the page from reloading when you hit “Send”

  
  // Leen's info (Team lead)
	// emailjs.sendForm('service_kkjoutp', 'template_umqkdbm', form.current, 'glmdBWlmeEKsfodH4')


  //Client info to be used
  emailjs.sendForm('service_vukme39', 'template_hqwuu0s', form.current, 'W8jFq11Su6rJ4GRtl')
  
	  .then(() => {
		  setIsMessageVisible(true);
		  form.current.reset();
	  }, () => {
		  // show the user an error
	  });
  };
  
  useEffect(() => {
    document.title = "SIT | Subscribe";
  }, []);
 
 return (
   <div className="form-container">
     {isMessageVisible ?
       <div className="success-message">
         <p>Message sent!</p>
         <button onClick={() => setIsMessageVisible(false)}>Close</button>
       </div> :
       null
     }
<form ref={form} onSubmit={sendEmail}>
  <label>First Name *</label>
  <input type="text" name="user_fname" required />

  <label>Last Name *</label>
  <input type="text" name="user_lname" required />

  <label>Email *</label>
  <input type="email" name="user_email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />

  <label>Phone *</label>
  <input type="tel" name="user_phone" required />

  <label>Subject *</label>
  <input type="text" name="user_subject" defaultValue="New Subscriber!" required />

  <label>Message *</label>
  <textarea name="message" defaultValue="I want to Subscribe!" required />
  <input type="submit" value="Send" />
</form>

   </div>
 );
};
 
export default Subscribe;
