import React from "react";
import { Link } from "react-router";

const FooterMenu = () => {
  return (
    <div className="footer_menu">
      <div>
        <h2>فرش های دست بافت</h2>
        <ul>
          <li>
            <Link to="/">لوکس</Link>
          </li>
          <li>
            <Link to="/">قدیمی</Link>
          </li>
          <li>
            <Link to="/">مدرن</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>فرش های ماشینی</h2>
        <ul>
          <li>
            <Link to="/">لوکس</Link>
          </li>
          <li>
            <Link to="/">قدیمی</Link>
          </li>
          <li>
            <Link to="/">مدرن</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>سایر فرش ها</h2>
        <ul>
          <li>
            <Link to="/">لوکس</Link>
          </li>
          <li>
            <Link to="/">قدیمی</Link>
          </li>
          <li>
            <Link to="/">مدرن</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterMenu;
