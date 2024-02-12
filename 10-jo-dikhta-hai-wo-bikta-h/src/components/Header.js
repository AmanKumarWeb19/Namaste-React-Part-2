import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlinestatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logoContainer">
        <Link to="/">
          <img className="w-48" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-5">Online Status:{onlinestatus ? "🟢" : "🔴"}</li>
          <li className="px-5">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="px-5">
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li className="px-5">
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-5">
            <Link className="link" to="/cart">
              Cart
            </Link>
          </li>
          <li className="px-5">
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
