import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlinestatus = useOnlineStatus();
  return (
    <div className="flex justify-between">
      <div className="logoContainer">
        <Link to="/">
          <img className="w-48" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li>Online Status:{onlinestatus ? "🟢" : "🔴"}</li>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </li>
          <button
            className="header-login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
