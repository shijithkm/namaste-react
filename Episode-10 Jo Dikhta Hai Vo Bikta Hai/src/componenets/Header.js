import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("Header Componenet useEffect Called");
  }, [btnName]);

  return (
    <div className="flex justify-between bg-violet-800 shadow-lg mb-2">
      <div className="logo-container">
        <img
          className="w-24"
          src="https://www.reshot.com/preview-assets/icons/DUYKGBF2XM/hot-food-DUYKGBF2XM.svg"
        ></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-1">Online Status : {onlineStatus ? "💚" : "❤️"}</li>
          <li className="px-1">
            <Link to="/">Home</Link>
          </li>
          <li className="px-1">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-1">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-1">Cart</li>
          <button
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className="login-btn"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
