import React from "react";
import "../../nav.css";
import { routes } from "../../index";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo right">
          CCC
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="sass.html">Home</a>
          </li>
          <li>
            <Link to={routes.calendar}>Calendar</Link>
          </li>
          <li>
            <a href={routes.news} target="_blank">
              News
            </a>
          </li>
          <li>
            <a href={routes.register} target="_blank">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default nav;
