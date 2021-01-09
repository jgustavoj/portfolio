import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
	return (
		<>
			<div className="row mt-5" id="about">
				<div className="col-sm" id="intro">
					<h1>
						Hello, <br />
						My name is Gustavo, <br />
						some people call me Gus, <br />
						others “Goose” and I’m a Full Stack Developer.
					</h1>
				</div>
				<div className="col-sm">
					<i className="fab fa-linkedin-in fa-2x" />
					<i className="fab fa-github fa-2x" />
					<i className="fab fa-twitter fa-2x" />
				</div>
			</div>
		</>
	);
};
