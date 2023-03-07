import React from "react";
import Background from "./public Events.png";
import aboutPic from "../components/images/AboutPic.svg";
import './home.css';
import Contact from "./contact";

const Home = () => {
  const handleFindOutClick = () => {
    const offeringsSection = document.getElementById("offerings-section");
    offeringsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
  <div
    class="hero-header"
    style={{
      width: "100%",
      height: "600px",
      backgroundImage: "url(" + Background + ")",
    }}
  >
    <div class="circles">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
      <div class="circle5"></div>
      <div class="circle6"></div>


      <div class="header">
        <p style={{ color: "#FF3E54", fontWeight: 'bold', marginLeft:"140px", fontSize:"30px", marginBottom:"30px", marginTop:"50px"}}>\We Are Here\</p>
        <h1 style={{marginLeft:"60px", marginTop:"30px"}}>Helping local seniors</h1>
        <h1 style={{marginLeft:"60px"}}>
          our community with their
          <br></br> technology needs
        </h1>
       <button class="btn btn-primary" onClick={handleFindOutClick} 
        style={{ background: '#FF3E54', borderBlockColor:'#FF3E54', textAlign: 'center', fontSize:'20px', marginLeft:"180px", marginTop:"30px" }}>
          View More
        </button>
      </div>
    </div>
  </div>
      <div
        id="offerings-section"
        style={{ width: "800px", margin: "0 auto", color: "#FF3E54" }}
      >
        <center><h3 style={{marginTop:"-70px"}}>\ Some of our offerings \</h3></center>
      </div>
      <div class="py-5">
    <div class="container">
      <div class="row hidden-md-up">
        <div class="col-md-4">
          <div class="card">
            <div class="card-block">
              <h4 class="card-title" style={{color:"rgb(14,31,81)"}}>Learn Mircosoft Office Apps</h4>
              <h6 class="card-subtitle text-muted"></h6>
              <p class="card-text">Learn the basics of the Microsoft suite including :</p>
              <ul>
                                <li>word</li>
                                <li> Excel,</li>
                                <li>Powerpoint</li>
                            </ul>
  
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-block">
              <h4 class="card-title" style={{color:"rgb(14,31,81)"}}>Setting up a New Phone</h4>
              <h6 class="card-subtitle text-muted"></h6>
              <p class="card-text"><p>Setting up a new cell phone and <br></br> 
                        learning a new software can be <br></br> 
                        confusing. e can help with that!
                        </p></p>

            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-block">
              <h4 class="card-title" style={{color:"rgb(14,31,81)"}}>Questions about Security</h4>
              <h6 class="card-subtitle text-muted"></h6>
              <p class="card-text">Cyber-security can be very scary to <br></br> 
                            learn and we can Help indicate what to <br></br> 
                            worry about what is harmless</p>

            </div>
          </div>
        </div>
      </div><br/>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-block">
              <h4 class="card-title" style={{color:"rgb(14,31,81)"}}>Sending Emails</h4>
              <h6 class="card-subtitle text-muted"></h6>
              <p class="card-text p-y-1">Learn how to set up a new mail app. filter through inboxes</p>

            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-block">
              <h4 class="card-title" style={{color:"rgb(14,31,81)"}}>Advice on Purchasing new devices</h4>
              <h6 class="card-subtitle text-muted"></h6>
              <p class="card-text p-y-1">With the complex technology market.<br></br>
                        knowing what to buy can be stressful.
                        <br></br> 
                        Let our volunteers guide you!</p>

            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-block">
              <h4 class="card-title" style={{color:"rgb(14,31,81)"}}>Friendly Conversation</h4>
              <h6 class="card-subtitle text-muted"></h6>
              <p class="card-text p-y-1">Our volunteers are always happy to<br></br> 
                        help and provide
                        a warm attitude at</p>

            </div>
          </div>
        </div>
      </div>
    </div>

   

    <div className="middle">
  <img style={{ float: "left", marginLeft: "30px"}} src={aboutPic} alt="about"></img>
  <div style={{ margin: "30px 30px 30px 40px", padding: "20px", backgroundColor: "#f1f1f1" }}>
    <div className="AboutUs">\ Partnerships \</div>
    <span className="textTitle">Seniors Home in London? </span>
    <br />
    <span className="textTitle">We'd Like to work with you!</span>
    <br />
    <p className="text">
      we are currently partnered with local London Seniors Home, and are<br />
      looking to expand our reach! We want to help as many seniors as possible.<br />
      so we would like to partner with as many senior homes as possible. We are<br />
      also looking to partner with similar clubs within Western and from other <br />
      school to maximzze our reach. To get in touch with us, send us an email 
      at <a href="mailto:seniorsinit.club@westernusc.ca">seniorsinit.club@westernusc.ca</a>

    </p>
    <button type="button" class="btn btn-danger">Partnerships</button><br /><br />
    <button type="button" class="btn btn-danger">Volunteer</button>
  </div>
</div>

    {/* <Contact></Contact> */}
    </div>
    </div>
    





);
};

export default Home;