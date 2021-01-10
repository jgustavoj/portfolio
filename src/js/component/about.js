import React from "react";
import { Link } from "react-router-dom";
import resize from "../../img/resize.jpg";

export const About = () => {
	return (
		<>
			<div className="content row" id="about">
				<div className="col-8" id="intro">
					<p style={{ fontSize: "4.8vw" }}>
						Hello, <br />
						My name is Gustavo, <br />
						some people call me Gus, <br />
						others “Goose” and I’m a <u>Full Stack Developer.</u>
					</p>
				</div>

				{/* animated fade in arrow in between these 2 divs going towards the icons */}

				<div className="col" style={{ /*color: "darkBlue",*/ fontSize: "1.1vw", marginTop: "30px" }}>
					<i className="fab fa-linkedin-in fa-2x" />
					<i className="fab fa-github fa-2x" />
					<i className="fab fa-twitter fa-2x" />
				</div>
			</div>
			<div className="">
				{/* this image needs to be wide  */}
				<img src={resize} className="img-fluid" alt="about" />{" "}
			</div>
			<div className="mt-5">
				<span style={{ fontSize: "3vw" }}>So, a little bit about me...</span>
				<p style={{ fontSize: "1.6vw" }}>
					{
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et dolore magna aliqua."
					}
				</p>
			</div>
		</>
	);
};
