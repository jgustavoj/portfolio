import React from "react";
import { Link } from "react-router-dom";
import resize from "../../img/resize.jpg";

export const About = () => {
	return (
		<>
			<div className="content-fluid row mt-5" id="about">
				<div className="col-8" id="intro">
					<span style={{ fontSize: "4.8vw" }}>
						Hello, <br />
						My name is Gustavo, <br />
						some people call me Gus, <br />
						others “Goose” and I’m a Full Stack Developer.
					</span>
				</div>
				<div className="col" style={{ color: "darkBlue", fontSize: "1.1vw" }}>
					<i className="fab fa-linkedin-in fa-2x" />
					<i className="fab fa-github fa-2x" />
					<i className="fab fa-twitter fa-2x" />
				</div>
			</div>

			{/* <div className="container">
				<div className="row justify-content-center">
					<div className="col-6 col-md-2">1 of 3</div>
					<div className="col-6 col-md">
						<img src={image} className="img-fluid" alt="about" />{" "}
					</div>
					<div className="col-6 col-md-2">3 of 3</div>
				</div>
			</div> */}
			<div className="">
				{/* this image needs to be wide  */}
				<img src={resize} className="img-fluid" alt="about" />{" "}
			</div>
		</>
	);
};
