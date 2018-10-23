import React from "react";
import "./navbar.css"

const Navbar = () => (
    <div>
        <nav className="navbar">
            <a className="navbar-brand" href="/">
             <h1> Clicky Game</h1>
            </a>
            <h1> Click an image to begin!</h1>
            <div>
            <h2> Current Score: <span> 4 </span></h2>
            <h2> Top Score: <span> 8 </span></h2>
            </div>
        </nav>
    </div>
)

export default Navbar;