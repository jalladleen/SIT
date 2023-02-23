import React from "react";
import "./about.css";
import aboutPic from "../components/images/AboutPic.svg";
import helpIcon from "../components/images/helpIcon.svg";
import getInTouch from "../components/images/getInTouch.svg";
import CEO from "../components/images/LeaderCEO.svg";
import CTO from "../components/images/LeaderCTO.svg";
import CFO from "../components/images/LeaderCFO.svg";
import COO from "../components/images/LeaderCOO.svg";


const helpStyle = {
	ready: {
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontHeight: 700,
		fontSize: '18px',
		lineHeight: '16px',
		color: '#000000',
	},
	link: {
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontHeight: 700,
		fontSize: '16px',
		lineHeight: '16px',
		color: '#FF3E54',
	}
	
}
const LeadersList = [
	{
	  name: "Larry F. Burnett",
	  position:
		"CEO",
	  icon: CEO,
	},
	{
	  name: "Meghan J. Webb",
	  position:
		"CTO",
	  icon: CTO,
	},
	{
	  name: "Yvonne J. Cullum",
	  position:
		"CFO",
	  icon: CFO,
	},
	{
	  name: "Diana H. Williams",
	  position:
		"COO",
	  icon: COO,
	},
	{
		name: "Larry F. Burnett",
		position:
		  "CEO",
		icon: CEO,
	  },
	  {
		name: "Meghan J. Webb",
		position:
		  "CTO",
		icon: CTO,
	  },
	  {
		name: "Yvonne J. Cullum",
		position:
		  "CFO",
		icon: CFO,
	  },
	  {
		name: "Diana H. Williams",
		position:
		  "COO",
		icon: COO,
	  },
  ];
const about = () => {
  return (
    <div>
      <div className="bannerAbout">
        <h1 className="titleAbout">About</h1>
        <h2 className="subtitleAbout">Home / About</h2>
      </div>
      <div className="middle">
        <img style={{marginLeft:'50px'}} src={aboutPic} alt="about"></img>
        <div style={{ margin: "30px" }}>
          <div className="AboutUs">\ About us \</div>
          <span className="textTitle">Volunteer-based, </span>
          <br />
          <span className="textTitle">Community Philanthropy,</span>
          <br />
          <span className="textTitle">Western U Club</span>
          <p className="text">
            Seniors in I.T is a dynamic student-run volunteer organization at
            the University of Western Ontario. We strive to provide senior
            citizens with the knowledge and skills to operate in this new
            technology-based world by giving them a fundamental understanding of
            technology so that they are able to achieve a variety of personal
            aspirations. We Prioritize the goal of strengthening the
            relationship between the organization and the community in various
            ways such as offering virtual and in person sessions in hopes to
            share our own knowledge with technology with those in our community
          </p>
          <div style={{background:"white", borderRadius: "10px"}}>
            <img className="helpIcon" src={helpIcon} alt="help"></img>
            <span style={helpStyle.ready}>
              Ready to Help:{" "}  
            </span>
			<a style={helpStyle.link} href="mailto: abc@example.com">
                seniorsinit.club@westernusc.ca
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="team">\ Team \</div>
        <div className="Ourleaders">Our Leaders!</div>

		<div className="leaders">
          {LeadersList.map((item, index) => {
            return (
              <div className="leader" key={index}>
                <img className="h-15 pb-2" src={item.icon} alt={item.name} />
                <div className="py-4 text-center">
                  <div className="font-bold text-xl mb-6 text-slate-100">
                    {item.name}
                  </div>
                  <p className="text-slate-100 text-base">{item.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

	  <div className="getInTouch">
        <img src={getInTouch} alt="getInTouch"></img>
        <div className="text-on-image">
          <p className="quote">
            “Some of the History of Our Company is that we are Catching up
            through Video”
          </p>
          <button className="button">Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default about;
