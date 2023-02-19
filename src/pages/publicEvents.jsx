import React from "react";
import './publicEvents.css';
import { withRouter } from "react-router-dom";
const publicEvents = () => {
    const handleSubmit = (event) => {
		event.preventDefault();
		//console.log("button has been pressed");
        window.location = "/contact";
    }

  return (  
    <div>
        <div class = "header">
           <h4 id = "phead" style ={{color:"#FF3E54"}}>Public Events</h4>
                
        </div>


        <div class = "work">
            <h4 style={{color: "#0E1F51", textAlign:"center"}} > Our Work </h4>
            
            <div class="displayWork">
                
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

export default publicEvents;
