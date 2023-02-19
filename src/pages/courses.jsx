import React from "react";
import "./courses.css"
import webDesign from "../components/images/webDesign.svg"
import UIDesign from "../components/images/UIDesign.svg"
import WebMigration from "../components/images/WebMigration.svg"
import AppDev from "../components/images/AppDev.svg"
import HubSpot from "../components/images/HubSpot.svg"
import EmailMarket from "../components/images/EmailMarket.svg"

const cardList = [
    {
      title: "Web Design / Developmentr",
      content: "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
      icon: webDesign,
    },
	{
		title: "UI/UX Design",
		content: "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
		icon: UIDesign,
	},
	{
		title: "Website Migration",
		content: "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
		icon: WebMigration,
	},
	{
		title: "App Development",
		content: "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
		icon: AppDev,
	},
	{
		title: "HubSpot Integration",
		content: "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
		icon: HubSpot,
	},
	{
		title: "Email Marketing",
		content: "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
		icon: EmailMarket,
	},

];
const courses = () => {
return (
	<div>
		<div className="banner">
			<h1 className="title">Courses</h1>
    		<h2 className="subtitle">Home / Courses</h2>
		</div>
		
		<div>
			<div>\ Courses \</div>
			<div>Learn!</div>
			<div className="cards">
				<div>
					{cardList.map((item, index) => {
					return (
						<div 
						className="flex pl-5 pr-5 pt-14 pb-5 mx-4 flex-col items-center max-w-md rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-card-gradient"
						key={index}
						>
						<img className="h-15 pb-2" src={item.icon} alt={item.title}/>
						<div className="py-4 text-center">
							<div className="font-bold text-xl mb-6 text-slate-100">{item.title}</div>
							<p className="text-slate-100 text-base">
							{item.content}
							</p>
						</div>
						</div>
					);
					})}
				</div>
        	</div>
		</div>
	</div>
);
};

export default courses;



