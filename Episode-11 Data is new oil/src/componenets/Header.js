import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("Header Componenet useEffect Called");
  }, [btnName]);

  const data = useContext(UserContext);
  console.log("data", data);

  return (
    <div className="flex justify-between bg-violet-800 shadow-lg mb-2">
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-24"
            src="https://www.reshot.com/preview-assets/icons/DUYKGBF2XM/hot-food-DUYKGBF2XM.svg"
          ></img>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2 text-white font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 text-white font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 text-white font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 text-white font-bold">Cart</li>
          <li className="px-2 text-yellow-600 font-bold">
            {data?.loggedInUser?.toUpperCase()} {onlineStatus ? "🟢" : "🔴"}
          </li>
          <button
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className=""
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
