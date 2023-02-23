// import React, { useState } from "react";
// import "./publicEvents.css";
// ​
// const ButtonGroup = () => {
//     const handleSubmit = (event) => {
// 		event.preventDefault();
// 		//console.log("button has been pressed");
//         window.location = "/contact";
//     }
// ​
//   return (
//     <div>
//         <div class = "header">
//            <h4 id = "phead" style ={{color:"#FF3E54"}}>Public Events</h4>

//         </div>
// ​
// ​
//         <div class = "work">
//             <h4 style={{color: "#0E1F51", textAlign:"center"}} > Our Work </h4>

//             <div class="displayWork">
//             <Slider />
//             </div>
//         </div>

//    <div class="box">
// ​
//         <br></br>
//         <br></br>
//         <br></br>
//         <div class = "txt">
//         <br></br>
//             <h3 style={{   color: "white", textAlign:"center" }} >Want to get Involved?</h3>
//             <div style={{textAlign: "center"}}>
//                 <button onClick={handleSubmit} style={{   color: "white" , backgroundColor: "#ff304d" }} type="submit">Volunteer</button>
//                 <button onClick={handleSubmit} style={{   color: "white" , backgroundColor: "#ff304d"  }} type="submit">Partner</button>
//             </div>
//         </div>
//    </div>

//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
// ​
//       <br></br>

//     </div>
//   )


// };
// ​
// // export default publicEvents;
// ​
// ​
// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [slides, setSlides] = useState([
//     { month: "January", label: "This is January" },
//     { month: "February", label: "This is February" },
//     { month: "March", label: "This is March" },
//     { month: "April", label: "This is April" },
//     { month: "May", label: "This is May" },
//     { month: "June", label: "This is June" },
//     { month: "July", label: "This is July" },
//     { month: "August", label: "This is August" },
//     { month: "September", label: "This is September" },
//     { month: "October", label: "This is October" },
//     { month: "November", label: "This is November" },
//     { month: "December", label: "This is December" },
//   ]);
// ​
//   const handleSlideClick = (index) => {
//     setActiveIndex(index);
//   };
// ​
//   const handlePrevClick = () => {
//     setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
//   };
// ​
//   const handleNextClick = () => {
//     setActiveIndex((activeIndex + 1) % slides.length);
//   };
// ​
//   return (
//     <div className="slider-container">
//       <div className="slider-bar">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`slider-button ${
//               activeIndex === index ? "active" : ""
//             }`}
//             onClick={() => handleSlideClick(index)}
//           >
//             {slide.month}
//           </div>
//         ))}
//       </div>
//       <div className="slider">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`slide ${activeIndex === index ? "active" : ""}`}
//           >
//             {slide.label || slide.month}
//           </div>
//         ))}
//         <div className="prev-button" onClick={handlePrevClick}>
//           {"<"}
//         </div>
//         <div className="next-button" onClick={handleNextClick}>
//           {">"}
//         </div>
//       </div>
//     </div>
//   );
// };
// ​
// ​
// // function ButtonGroup() {
// //   return (
// //     <div className="button-container">
// //       <div className="button-group">
// //         <button>Button 1</button>
// //         <button>Button 2</button>
// //       </div>
// //     </div>
// //   );
// // }
// ​
// function PublicEvents() {
//   return (
//     <div className="container">
//       <ButtonGroup />
//       {/* <Slider /> */}
//     </div>
//   );
// }
// ​
// export default PublicEvents;
