import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Carosel from "./Carosel";

const RightSideNav = () => {
  const { loginWithPopUp } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const gogleLogin = () => {
    loginWithPopUp(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="lg:sticky lg:top-28 ">
      <div className="text-white">
        <div className="flex  justify-center mt-10">
          <button
            onClick={gogleLogin}
            className="inline-flex justify-between gap-2 items-center justify-center w-56 h-12 px-6 font-semibold transition duration-200 bg-sky-700  rounded-t-lg md:w-auto hover:bg-sky-800 focus:shadow-outline focus:outline-slate-800"
          >
            Log in with Google<FaGoogle></FaGoogle>
          </button>
        </div>
        <div className="flex  justify-center mt-2">
          <button className="inline-flex justify-between gap-2 items-center justify-center w-56 h-12 px-6 font-semibold transition duration-200 bg-teal-500  rounded-b-lg md:w-auto hover:bg-teal-600 focus:shadow-outline focus:outline-slate-800">
            Log in with Github <FaGithub></FaGithub>
          </button>
        </div>
      </div>
      <h1 className="text-xl text-white font-bold text-center mt-4">
        Find on us
      </h1>
      <hr className="bg-black h-0.5 md:w-11/12 mx-auto my-2" />
      <div className="flex justify-center">
        <div>
          <div className=" px-10 rounded mt-6 lg:mt-2 bg-violet-500 hover:bg-violet-600">
            <a
              className="flex items-center gap-4  px-6 py-1"
              href="http://facebook.com/"
            >
              <FaFacebook></FaFacebook> Facebook
            </a>
          </div>
          <div className=" px-10 rounded mt-6 lg:mt-2 bg-violet-500 hover:bg-violet-600">
            <a
              className="flex items-center gap-4  px-6 py-1"
              href="http://facebook.com/"
            >
              <FaYoutube /> Youtube
            </a>
          </div>
          <div className=" px-10 rounded mt-6 lg:mt-2 bg-violet-500 hover:bg-violet-600">
            <a
              className="flex items-center gap-4  px-6 py-1"
              href="http://facebook.com/"
            >
              <FaGithub /> Github
            </a>
          </div>
          <div className=" px-10 rounded mt-6 lg:mt-2 bg-violet-500 hover:bg-violet-600">
            <a
              className="flex items-center gap-4  px-6 py-1"
              href="http://facebook.com/"
            >
              <FaTwitch /> Twitch
            </a>
          </div>
        </div>
      </div>
      <div className=" py-14 lg:py-6 lg:px-4 ">
        <Carosel></Carosel>
      </div>
    </div>
  );
};

export default RightSideNav;
