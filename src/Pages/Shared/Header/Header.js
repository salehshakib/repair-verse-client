import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/icons/letter-r.png";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const toggleBtn = () => {
    setToggle(!toggle);
  };
  const user = {
    // uid: "user",
  };

  // const subMenu = (
  //   <ul className="p-2 bg-white z-10 border-black border">
  //     <li className="hover:bg-[#1e3a8a] hover:text-white rounded">
  //       <Link>Submenu 1</Link>
  //     </li>
  //     <li className="hover:bg-[#1e3a8a] hover:text-white rounded">
  //       <Link>Submenu 1</Link>
  //     </li>
  //     <li className="hover:bg-[#1e3a8a] hover:text-white rounded">
  //       <Link>Submenu 1</Link>
  //     </li>
  //     <li className="hover:bg-[#1e3a8a] hover:text-white rounded">
  //       <Link>Submenu 1</Link>
  //     </li>
  //     <li className="hover:bg-[#1e3a8a] hover:text-white rounded">
  //       <Link>Submenu 1</Link>
  //     </li>
  //     <li className="hover:bg-[#1e3a8a] hover:text-white rounded">
  //       <Link>Submenu 1</Link>
  //     </li>
  //   </ul>
  // );

  //   const menuItems = <></>;

  return (
    <nav className="relative z-10">
      <div className="w-full mx-auto fixed top-0 left-0 right-0 bg-white shadow-xl mb-5">
        <div className="navbar max-w-screen-xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown md:hidden block">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 text-neutral"
              >
                <li>
                  <Link
                    to="/services"
                    className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                  >
                    Services
                    
                  </Link>
                  
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                  >
                    Blog
                  </Link>
                </li>

                {user?.uid ? (
                  <>
                    <li>
                      <Link
                        to="/addservice"
                        className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                    
                      >
                        Add Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/myreviews"
                        className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                        //   onClick={handleLogOut}
                      >
                        My Reviews
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={"/"}
                        className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                        //   onClick={handleLogOut}
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="flex items-center">
              <Link
                to="/"
                className="btn btn-ghost normal-case text-4xl bg-gradient-to-r from-[#2564eb]  to-[#07b4d5]  px-1 text-transparent bg-clip-text"
              >
                <img src={logo} alt="" className="w-[40px]" />
                <span className="-ml-3">epair</span>
                <span className="text-xl mt-4">Verse</span>

                {/* <span className="text-3xl font-bold">ab</span>{" "} */}
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 gap-3">
              <li>
                <button
                  onClick={toggleBtn}
                  id="theme-toggle"
                  type="button"
                  class="text-black hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-md p-2.5"
                >
                  {toggle ? (
                    <svg
                      id="theme-toggle-dark-icon"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                  ) : (
                    <svg
                      id="theme-toggle-light-icon"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  )}
                </button>
              </li>
              <li>
                <Link
                  to="/"
                  className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                >
                  Services
                  {/* <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg> */}
                </Link>
                {/* {subMenu} */}
              </li>
              <li>
                <Link
                  to="/addservice"
                  className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                >
                  Add Service
                </Link>
              </li>
              <li>
                <Link
                  to="/myreviews"
                  className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                >
                  My Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex mr-5">
              {/* <NavLink onClick={toggleBtn} className="mr-5">
                <input type="checkbox" className="toggle toggle-md " checked={toggle} />
              </NavLink> */}

              {user?.uid ? (
                <>
                  <Link
                    // onClick={handleLogOut}
                    to="/"
                    className="px-2 bg-[#1e3a8a] hover:bg-[#152863] font-medium p-2 rounded flex text-white"
                  >
                    Logout
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  </Link>
                  <span className=" ml-3 text-lg font-bold">
                    {user?.displayName ? user.displayName : user.email}
                  </span>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2 mr-2 rounded"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-2 text-white bg-[#1e3a8a] hover:bg-[#152863] font-medium p-2 rounded"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
            {user?.uid ? (
              <div
                className="tooltip hover:tooltip-open tooltip-bottom "
                data-tip={user?.displayName ? user.displayName : user.email}
              >
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="User" />
                  </div>
                </label>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
