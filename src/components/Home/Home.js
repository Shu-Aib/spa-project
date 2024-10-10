import Navbar from "./Navbar.js";
import { Link, Outlet } from "react-router-dom";

export default function Home() {

  return (
    <div>
      <Navbar/>
      <header>
        <ul className="sub-navbar">
          <Link to={"/bmw"} className="sub-headings"><li>BMW</li></Link>
          <Link to={"/audi"} className="sub-headings"><li>AUDI</li></Link>
        </ul>
      </header>
      <Outlet/>
    </div>
  );
}
