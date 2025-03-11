import React, { useState } from "react";
import Search from "../../components/Search";
import Icon from "../../components/Icon";
import { Link } from "react-router";

const HeaderTop = () => {
  const [isHover, setIsHover] = useState({
    login: false,
    cart: false,
  });
  const loginIconColor = isHover.login ? "#ffffff" : "#cb1b1b";
  const cartIconColor = isHover.cart ? "#ffffff" : "#cb1b1b";

  function handleMouseEnter(event) {
    setIsHover((prevValue) => ({ ...prevValue, [event]: true }));
  }

  function handleMouseLeave(event) {
    setIsHover((prevValue) => ({ ...prevValue, [event]: false }));
  }

  return (
    <div className="header_top">
      <div>
        <h2 className="header_logo">ایرانی فرش</h2>
        <Search />
      </div>

      <div className="header_btns">
        <Link
          to="/"
          className="button cart_link"
          onMouseEnter={() => handleMouseEnter("cart")}
          onMouseLeave={() => handleMouseLeave("cart")}
        >
          <Icon
            fill={cartIconColor}
            viewBox="0 0 24 24"
            path="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"
          />
        </Link>
        <Link
          to="/login"
          className="button login_link"
          onMouseEnter={() => handleMouseEnter("login")}
          onMouseLeave={() => handleMouseLeave("login")}
        >
          <Icon
            fill={loginIconColor}
            viewBox="0 0 24 24"
            path="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"
          />
          <p>ورود/ثبت نام</p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderTop;
