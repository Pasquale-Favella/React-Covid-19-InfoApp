import React from "react";

const NavBar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a className="navbar-brand" href="/">
        Covid-19
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href=" http://www.protezionecivile.gov.it/attivita-rischi/rischio-sanitario/emergenze/coronavirus"
            >
              Info
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" https://www.who.int/">
              Dona
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default NavBar;
