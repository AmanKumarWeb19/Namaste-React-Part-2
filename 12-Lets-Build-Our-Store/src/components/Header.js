import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlinestatus = useOnlineStatus();

  const { loggedInUSer } = useContext(UserContext);
  // console.log(loggedInUSer);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logoContainer">
        <Link to="/">
          <img className="w-48" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-5 text-lg font-semibold">
            Online Status:{onlinestatus ? "🟢" : "🔴"}
          </li>
          <li className="px-5 text-lg font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 text-lg font-semibold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5 text-lg font-semibold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-5 text-lg font-semibold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>

          <button
            className="header-login-btn text-lg font-semibold"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-5">
            <Link className="text-lg font-semibold" to="/grocery">
              {loggedInUSer}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
