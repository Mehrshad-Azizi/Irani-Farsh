import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <ul id="navbar">
      <li>
        <NavLink to="/">صفحه اصلی</NavLink>
      </li>
      <li>
        <NavLink to="/blog">وبلاگ</NavLink>
      </li>
      <li>
        <NavLink to="/contact">تماس با ما</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">درباره ما</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
