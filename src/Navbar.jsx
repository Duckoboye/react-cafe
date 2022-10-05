import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="nav">
			<Link to="/" className="www-title">
				Fränt Café™
			</Link>
			<ul>
				<NavLink to="/menu" className="nav-item">
					Menu
				</NavLink>
				<NavLink to="/about" className="nav-item">
					About
				</NavLink>
				<NavLink to="/contact" className="nav-item">
					Contact
				</NavLink>
			</ul>
		</nav>
	);
};

export default Navbar;
