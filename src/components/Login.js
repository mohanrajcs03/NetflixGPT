import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className=" bg-netflix-bg-img bg-cover inset-0 bg-no-repeat bg-center">
        {/* Form Container */}
        <div className="flex justify-center items-center min-h-screen">
          <form className="bg-black bg-opacity-80 text-white p-5 flex flex-col w-11/12 sm:w-96 mx-auto rounded-lg">
            <h1 className="font-bold text-3xl p-2 m-2">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-4 m-2 rounded-md bg-black bg-opacity-10"
              />
            )}
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 m-2 rounded-md bg-black bg-opacity-10"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 m-2 rounded-md bg-black bg-opacity-10 "
            />
            <button className="m-2 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
              {isSignIn
                ? "Already registered Sign Up now"
                : "new to Netflix sign In now"}
            </p>
          </form>
        </div>
      </div>
      <div className="relative bg-red-600">Hello World</div>
    </div>
  );
};

export default Login;
