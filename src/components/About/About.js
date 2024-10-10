import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div>
      <header className="about-header">
        <div className="about-header__content">
        <h1>ABOUT</h1>
        <p>
          <Link to={"/"} className="about-nav__headings">Home</Link> / <Link to={"/user/yusri nelson"} className="about-nav__headings">Profile</Link>
        </p>
        <Outlet />
        </div>
      </header>
      <div className="about-content">
       like the cars you love!
      </div>
    </div>
  );
}
