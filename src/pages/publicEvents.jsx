import React, { useState, useEffect } from "react";
import "./publicEvents.css";



const ButtonGroup = () => {
    const handleSubmit = (event) => {
		event.preventDefault();
		//console.log("button has been pressed");
        window.location = "/contact";
    }

    useEffect(() => {
      document.title = "SIT | Public Events";
    }, []);

    return (  
      <div>
      <div className="bannerpublicE">
        <h1 className="titlepublicE">Public Events</h1>
        <h2 className="subtitlepublicE">Home / Public Events</h2>
      </div>
  
  
          <div class = "work">
              <b><h6 style ={{color:"#FF3E54",textAlign: "center", paddingTop:"40px", fontWeight: 'bold', 
                  fontSize: "24px",
                  lineHeight: "20px"
            
            }} >\ Public Events \</h6></b>
              <strong>
              <h4 style={{color: "#0E1F51", textAlign:"center", font: "Raleway", 
                  fontWeight: "700",
                  fontSize: "40px",
                  lineHeight: "40px",
                  /* identical to box height, or 100% */
                  marginTop: "10px"}} > Our Work </h4>
              </strong>
              <div class="displayWork">
              <Slider />  
              </div>
          </div>
        
     <div class="box">
  
          <br></br>
          <br></br>
          <br></br>
          <div class = "txt">
              
          <br></br>
              <h3 style={{   color: "white", textAlign:"center" }} >Want to get Involved?</h3>
              <div style={{textAlign: "center"}}>
                  <button onClick={handleSubmit} style={{   color: "white" , backgroundColor: "#ff304d" }} type="submit">Volunteer</button>
                  <button onClick={handleSubmit} style={{   color: "white" , backgroundColor: "#ff304d"  }} type="submit">Partner</button>
              </div>
          </div>
     </div>
     
        <br></br>
        <br></br>
        <br></br>
        <br></br>
  
        <br></br>
       
      </div>
    )
      
   
  };

// export default publicEvents;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slides] = useState([
    { month: "January", label: "Stay tuned for upcoming events and exciting announcements!" },
    { month: "February", label: "This is February" },
    { month: "March", label: "This is March" },
    { month: "April", label: "This is April" },
    { month: "May", label: "This is May" },
    { month: "June", label: "This is June" },
    { month: "July", label: "This is July" },
    { month: "August", label: "This is August" },
    { month: "September", label: "This is September" },
    { month: "October", label: "This is October" },
    { month: "November", label: "This is November" },
    { month: "December", label: "This is December" },
  ]);

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % slides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider-bar">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider-button ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleSlideClick(index)}
          >
            {slide.month}
          </div>
        ))}
      </div>
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${activeIndex === index ? "active" : ""}`}
          >
            {slide.label || slide.month}
          </div>
        ))}
        {/* <div className="prev-button" onClick={handlePrevClick}>
          {"<"}
        </div>
        <div className="next-button" onClick={handleNextClick}>
          {">"}
        </div> */}



<button class="prev-button" onClick={handlePrevClick}>
  <svg class="arrow-icon" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" transform="rotate(180, 12, 12)"/>
  </svg>
</button>

        <button class="next-button" onClick={handleNextClick}>
          <svg class="arrow-icon" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>

          </svg>
        </button>
 
      </div>
    </div>
  );
};


// function ButtonGroup() {
//   return (
//     <div className="button-container">
//       <div className="button-group">
//         <button>Button 1</button>
//         <button>Button 2</button>
//       </div>
//     </div>
//   );
// }


function PublicEvents() {
  return (
    <div className="container">
      <ButtonGroup />
      {/* <Slider /> */}
    </div>
  );
}

export default PublicEvents;