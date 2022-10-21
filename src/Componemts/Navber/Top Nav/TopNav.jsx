import React, { useContext, useState } from "react";
import { FaRegTimesCircle, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import icon from "./icon.png";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUser, setUser] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="sticky top-[-1px]">
      <div className="bg-[#1E2B47] ">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link
              to="/home"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <img className="w-8 text-teal-400" src={icon} alt="" />

              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                BD News
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setUser(true)}
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  {user?.photoURL ? (
                    <img
                      className="w-10 h-10 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800"
                      src={user?.photoURL}
                      alt=""
                    />
                  ) : (
                    <FaUser className="w-10 h-10 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800"></FaUser>
                  )}
                </button>
              </li>
            </ul>
            {isUser && (
              <div className="absolute mx-auto top-20  lg:left-1/4 w-80">
                <div className="p-5 text-center bg-[#10579a] border rounded shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-white mb-4 text-start text-xl font-bold">
                        User Information
                      </h1>
                    </div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className=""
                      onClick={() => setUser(false)}
                    >
                      <FaRegTimesCircle className="text-4xl text-white hover:text-violet-400"></FaRegTimesCircle>
                    </button>
                  </div>
                  <div>
                    <div className="flex gap-4 items-center">
                      {user?.photoURL ? (
                        <img
                          className="w-10 h-10 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800"
                          src={user?.photoURL}
                          alt=""
                        />
                      ) : (
                        <FaUser className="w-10 h-10 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800"></FaUser>
                      )}
                      <div className="text-start">
                        <h1 className="text-white text-lg font-bold">
                          {user?.displayName}
                        </h1>
                        <h1>{user?.email}</h1>
                      </div>
                    </div>
                    <div className="text-start">
                      {user ? (
                        <button
                          onClick={() => {
                            setUser(false);
                            logOut();
                          }}
                          className="bg-orange-500 hover:bg-orange-700 rounded px-6 py-1 mt-4"
                        >
                          Log Out
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                    {user ? (
                      <></>
                    ) : (
                      <div className="mt-6 mx-auto">
                        <Link
                          onClick={() => setUser(false)}
                          className="bg-green-500 hover:bg-green-700 rounded-t py-1 px-10 text-xl font-bold block "
                          to="/login"
                        >
                          Log In
                        </Link>
                        <Link
                          onClick={() => setUser(false)}
                          className="bg-yellow-500 hover:bg-yellow-700 rounded-b mt-2 py-1 px-10 text-xl font-bold block"
                          to={"/register"}
                        >
                          Register
                        </Link>
                      </div>
                    )}
                  </div>
                  ;
                </div>
              </div>
            )}
            <div className="lg:hidden">
              <div className="flex gap-4">
                <Link
                  to="/"
                  onClick={() => setUser(true)}
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  <img
                    className="w-10 h-10 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-400 ring-offset-gray-800"
                    src={user?.photoURL}
                    alt=""
                  />
                </Link>
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-0 left-0 w-full">
                    <div className="p-5 text-center bg-[#0e2c48] border rounded shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <Link
                            to="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                          >
                            <svg
                              className="w-8 text-purple-400"
                              viewBox="0 0 24 24"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              stroke="currentColor"
                              fill="none"
                            >
                              <rect x="3" y="1" width="7" height="12" />
                              <rect x="3" y="17" width="7" height="6" />
                              <rect x="14" y="1" width="7" height="6" />
                              <rect x="14" y="11" width="7" height="12" />
                            </svg>
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                              Company
                            </span>
                          </Link>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg
                              className="w-5 text-gray-600"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <LeftSideNav></LeftSideNav>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
