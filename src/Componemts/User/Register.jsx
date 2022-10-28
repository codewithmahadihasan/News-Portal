import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.all";
import { updateProfile } from "firebase/auth";
import useTitle from "../../Hock/useTitle";

const Register = () => {
  const [error, setError] = useState();
  const { CreateWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Register");
  const register = (event) => {
    event.preventDefault();

    const from = event.target;
    const name = from.name.value;
    const photoURl = from.photoURl.value;
    const email = from.email.value;
    const password = from.password.value;
    // console.log(name, email, password, photoURl);
    CreateWithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photoURl,
        })
          .then(() => {
            Swal.fire(
              "Registration Successful",
              "Thanks for join with us",
              "success"
            );
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        setError("");
        from.reset();
        navigate("/home");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        from.reset();
      });
  };
  return (
    <div className="flex justify-center my-20">
      <div className="flex flex-col lg:w-8/12 max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm text-gray-400">Register a new acount</p>
        </div>
        <form onSubmit={register}>
          <div className="mb-1 sm:mb-2">
            <label className="inline-block mb-1 font-medium">Name</label>
            <input
              placeholder="Mahadi Hasan"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label className="inline-block mb-1 font-medium">Photo URl</label>
            <input
              placeholder="shorturl.at/hIWX3"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
              id="photoURl"
              name="photoURl"
            />
          </div>

          <div className="mb-1 sm:mb-2">
            <label className="inline-block mb-1 font-medium">E-mail</label>
            <input
              placeholder="mahadi@example.org"
              required
              type="email"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label className="inline-block mb-1 font-medium">Password</label>
            <input
              placeholder="******"
              required
              type="password"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
            />
          </div>
          <p className="text-xs text-red-500">{error}</p>
          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-600 sm:text-sm">
            Do you have any acount?{" "}
            <Link className="ml-2 text-blue-500" to={"/Create"}>
              Log in Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
