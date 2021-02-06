import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/react-portfolio">Girma</a>
        
        <ul className="nav navbar-nav ml-auto d-inline-block">
            <li className="nav-item d-inline-block">
                <Link to="/react-portfolio/about" className={location.pathname === "/react-portfolio/about" ? "nav-link active" : "nav-link"}>
                About
                </Link>
            </li>
            
            <li className="nav-item d-inline-block ml-2">
                <Link
                to="/react-portfolio/contact"
                className={location.pathname === "/react-portfolio/contact" ? "nav-link active" : "nav-link"}
                >
                Contact
                </Link>
            </li>
            <li className="nav-item d-inline-block ml-2">
                <Link
                to="/react-portfolio/portfolio"
                className={location.pathname === "/react-portfolio/portfolio" ? "nav-link active" : "nav-link"}
                >
                Portfolio
                </Link>
            </li>
            
        </ul>
    </nav>
  );
}

export default Navbar;
