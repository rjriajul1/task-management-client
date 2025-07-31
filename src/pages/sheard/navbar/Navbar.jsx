import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import img from "../../../assets/sign_in_logo.png";
import { AuthContext } from "../../../context/AuthContext";
import { FaAngleRight } from "react-icons/fa";
import axios from "axios";

const Navbar = () => {
  const { user, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        { withCredentials: true }
      );

      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

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
          <div>
            <h1 className="text-2xl font-bold ">Tasko</h1>
            {location.pathname === "/dashboard/taskList" && (
              <div>
                <h1 className="text-2xl font-semibold mt-5 text-[#05E389]">
                  {user.name}
                </h1>
                <h1 className="text-4xl font-semibold">Welcome To Dashboard</h1>
              </div>
            )}
          </div>
        </div>

        {/* Center - Nav Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1 ">{links}</ul>
        </div>

        {/* Right - Button */}
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4 ">
              <div>
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={user?.photo}
                  alt=""
                />
              </div>

              <div className="dropdown dropdown-start flex">
                <p className="font-semibold text-[18px]">{user?.name}</p>
                <div tabIndex={0} role="button" className=" m-1">
                  <FaAngleRight size={20} />
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content menu mt-10 -ml-20 text-black bg-base-100 rounded-box z-1 w-52 p-6 shadow-sm"
                >
                  <button onClick={handleLogout} className="btn ">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
