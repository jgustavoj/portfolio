import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { About } from "../component/about";
import { Footer } from "../component/footer";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="container mt-5 mb-5">
			<About />
			<Footer />
		</div>
	);
};
