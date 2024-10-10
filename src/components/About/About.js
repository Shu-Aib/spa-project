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
       Like the cars you love! <br></br>
       At Car Lovers, We believe that a picture is worth a thousand revs!
       Our platform is designed for car enthusiasts, collectors, and anyone who simply appreciates the beauty and engineering 
       of automobiles. Whether you're a fan of classic cars, modern marvels, or the latest supercars, we provide a space where you can 
       explore, enjoy, and express your passion.
      </div>
    </div>
  );
}
