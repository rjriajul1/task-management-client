import React from "react";
import { NavLink } from "react-router"; // ঠিক করলাম
import img from "../../../assets/sign_in_logo.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-xl text-[#60E5AE]" : "text-xl"
          }
          to="/dashboard/taskList"
        >
          Task List
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-xl text-[#60E5AE]" : "text-xl"
          }
          to="/dashboard/spin"
        >
          Spin Wheel
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="relative bg-[#040612] py-25 px-4 lg:px-12 ">
      {/* Right Aligned Background Image */}
      <span className=" absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#60E5AE]/50 blur-3xl" />
      <span className=" absolute bottom-0 right-0 w-52 h-45 rounded-full bg-[#60E5AE]/40 blur-3xl" />
      <div
        className="absolute right-0 top-0 w-[400px] h-[330px] z-0 opacity-20"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
        }}
      ></div>

      {/* Navbar Content */}
      <div className="relative navbar text-white flex justify-between items-center">
        {/* Left - Logo & Mobile Dropdown */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-base-100  text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h1 className="text-2xl font-bold ">Tasko</h1>
        </div>

        {/* Center - Nav Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1 ">{links}</ul>
        </div>

        {/* Right - Button */}
        <div className="navbar-end">
          <a className="btn ">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
