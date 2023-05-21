import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div id="header">
      <div className="header container">
        <div className="header-logo">
          <Link to="/">
            <img className="main-logo" src="./img/logo2.png" alt="Main-logo" />
          </Link>
        </div>

        <div className="header-menu">
          <ul
            className={
              hamburgerOpen
                ? "header-menu-wrapper active flex-row"
                : "header-menu-wrapper flex-row"
            }
          >
            <Link style={{ textDecoration: "none" }} to="/company" onClick={toggleHamburger}>
              <li className="menu-item">COMPANY</li>
            </Link>

            <Link style={{ textDecoration: "none" }} to="/artist" onClick={toggleHamburger}>
              <li className="menu-item">ARTISTS</li>
            </Link>

            <Link style={{ textDecoration: "none" }} to="/actor" onClick={toggleHamburger}>
              <li className="menu-item">ACTORS</li>
            </Link>

            <Link style={{ textDecoration: "none" }} to="/multimedia" onClick={toggleHamburger}>
              <li className="menu-item">MULTIMEDIA</li>
            </Link>

            <Link style={{ textDecoration: "none" }} to="/news" onClick={toggleHamburger}>
              <li className="menu-item">NEWS</li>
            </Link>

            <Link style={{ textDecoration: "none" }} to="/audition" onClick={toggleHamburger}>
              <li className="menu-item">AUDITION</li>
            </Link>
          </ul>
          <div
            class={hamburgerOpen ? "hamburger active" : "hamburger"}
            onClick={toggleHamburger}
          >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
