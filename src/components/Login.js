import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utilities/validate";
import { auth } from "../utilities/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utilities/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUser = () => {
    const message = validateData(
      email.current.value,
      password.current.value
      // name.current.value
    );
    setErrMessage(message);
    if (message) return;

    if (isSignIn) {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " : " + errorMessage);
        });
    } else {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: `Hello ${name.current.value}`,
            photoURL:
              "https://static.vecteezy.com/system/resources/previews/009/273/280/non_2x/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrMessage(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " : " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className=" bg-netflix-bg-img bg-cover inset-0 bg-no-repeat bg-center">
        {/* Form Container */}
        <div className="flex justify-center items-center min-h-screen">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="bg-black bg-opacity-80 text-white p-5 flex flex-col w-11/12 sm:w-96 mx-auto rounded-lg"
          >
            <h1 className="font-bold text-3xl p-2 m-2">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="p-4 m-2 rounded-md bg-black bg-opacity-10"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-4 m-2 rounded-md bg-black bg-opacity-10"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-4 m-2 rounded-md bg-black bg-opacity-10 "
            />
            <p className="text-red-600 px-4 mb-5">{errMessage}</p>
            <button
              className="m-2 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
              onClick={handleUser}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
              {isSignIn
                ? " new to Netflix Sign Up now"
                : "Already registered sign In now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

