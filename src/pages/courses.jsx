import React from "react";
import "./courses.css";
import webDesign from "../components/images/webDesign.svg";
import UIDesign from "../components/images/UIDesign.svg";
import WebMigration from "../components/images/WebMigration.svg";
import AppDev from "../components/images/AppDev.svg";
import HubSpot from "../components/images/HubSpot.svg";
import EmailMarket from "../components/images/EmailMarket.svg";
import getInTouch from "../components/images/getInTouch.svg";

const cardList = [
  {
    title: "Web Design / Developmentr",
    content:
      "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    icon: webDesign,
  },
  {
    title: "UI/UX Design",
    content:
      "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    icon: UIDesign,
  },
  {
    title: "Website Migration",
    content:
      "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    icon: WebMigration,
  },
  {
    title: "App Development",
    content:
      "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    icon: AppDev,
  },
  {
    title: "HubSpot Integration",
    content:
      "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    icon: HubSpot,
  },
  {
    title: "Email Marketing",
    content:
      "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    icon: EmailMarket,
  },
];
const courses = () => {
  return (
    <div>
      <div className="bannerCourses">
        <h1 className="titleCourses">Courses</h1>
        <h2 className="subtitleCourses">Home / Courses</h2>
      </div>

      <div>
        <div className="route">\ Courses \</div>
        <div className="learn">Learn!</div>

        <div className="cards">
          {cardList.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img className="h-15 pb-2" src={item.icon} alt={item.title} />
                <div className="py-4 text-center">
                  <div className="font-bold text-xl mb-6 text-slate-100">
                    {item.title}
                  </div>
                  <p className="text-slate-100 text-base">{item.content}</p>
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

export default courses;
