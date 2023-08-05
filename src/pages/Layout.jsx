import { Outlet, Link } from "react-router-dom";
import "./myStyle.css";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="dropdown">
            <a href="/" className="dropbtn">
              <img src="menu.png"></img>
            </a>
            <div className="dropdown-content">
              <a href="/">Home</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>
              <a href="/about">About</a>
            </div>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
