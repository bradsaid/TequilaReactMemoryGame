import React from "react";

const NavBar = () => (
  <div className="container mw-100">
    <nav className="navbar navbar-expand-md navbar-dark bg-primary ">
      <a href="#" className="col-xs-4 navbar-brand">Clicky Game</a>
      <ul className=" col-xs-4 navbar-nav mx-auto">
        <li className="navbar-brand text-primary">Click an image to begin!</li>
        <li className="navbar-brand">Click an image to begin!</li>
        <li className="navbar-brand text-primary">Click an image to begin!</li>
        <li className="navbar-brand ml-3">Score:  | Top Score:</li>
      </ul>
    </nav>
  </div>
);

export default NavBar;