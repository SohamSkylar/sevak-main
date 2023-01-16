import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import './navbar.css';
import SearchBar from "./SearchBar";

const NavBar = ({searchBarQuery}) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div>
      <nav className="container m-auto mt-4 flex h-20 rounded bg-neutral-200">
        <div className="firstNav container my-auto flex justify-start">
          <img src="./images/sevak-high-resolution-logo-color-on-transparent-background.png" alt="Logo" className="ml-8 h-auto w-32 logoPic" />
          <SearchBar propQuery = {searchBarQuery}/>
        </div>
        <div
          className={
            showMediaIcons
              ? "mobileNavDiv container m-auto flex middleNav"
              : "container m-auto flex middleNav"
          }
        >
          <ul className="container flex justify-around text-center">
            <li>
              <a href="#">Find Workers</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="container m-auto flex justify-end endNav">
          <ul className="flex">
            <li>
              <button className="loginButton mr-4 rounded-lg bg-red-500 p-2 px-4 font-semibold">
                Login
              </button>
            </li>
            <li className="my-auto mr-4 userDetailPic">
              <a href="#">
                <FaUserCircle />
              </a>
            </li>
            <li className="userDetailName my-auto mr-8">
              <a href="#">Username</a>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu m-auto mr-8 hidden">
          <a
            href="#"
            onClick={() => {
              setShowMediaIcons(!showMediaIcons);
            }}
          >
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
