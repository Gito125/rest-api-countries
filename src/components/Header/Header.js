import React from "react";
import "./Header.css";
import MoonIcon from "../../images/icon-moon.svg";
import SunIcon from "../../images/icon-sun.svg";
import TitleText from "../TilteText/TitleText";
import { Link } from "react-router-dom";

const Header = ({ theme, handleThemeChange }) => {
  return (
    <header
      className={
        theme === "dark"
          ? "w-full transition-all ease-in bg-p_c"
          : "w-full transition-all ease-in bg-s_a"
      }
    >
      <div className="container lg:w-10/12 m-auto py-4 sm:py-6 px-2 sm:px-2">
        <div className="flex justify-between items-center">
          <Link to="/">
            <TitleText text="Where in the world?" theme={theme} />
          </Link>

          <button
            onClick={() => handleThemeChange(theme)}
            type="button"
            className={
              theme === "dark"
                ? "px-3 py-2 flex justify-between items-center transition-all ease-in hover:bg-gray-600 hover:shadow-md rounded-sm"
                : "px-3 py-2 flex justify-between items-center transition-all ease-in hover:bg-gray-200 hover:shadow-md rounded-sm"
            }
          >
            <img
              src={theme === "dark" ? MoonIcon : SunIcon}
              alt={theme === "dark" ? "MoonIcon" : "SunIcon"}
              className="sm:mr-4"
            />
            <span
              className={
                theme === "dark"
                  ? "hidden sm:block text-white"
                  : "hidden sm:block text-p_b"
              }
            >
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
