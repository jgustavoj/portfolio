import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<span>Gus Jimenez</span>
			<span>Home</span>
			<span>About</span>
			<span>Projects</span>
			<span>Resume</span>
			<span>Contact</span>
		</nav>
	);
};
