import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute z-10 px-20 py-2  w-full flex items-center justify-between">
      <img
        className="w-60"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix"
      />
      {user && (
        <div className="flex items-center">
          <img
            alt="icon"
            src="https://i.pinimg.com/736x/3c/e6/72/3ce67241681dc17a8be9632f14728cf9.jpg"
            className="h-12 w-12 mx-5"
          />
          <img
            alt="userProfile"
            src={user?.photoURL}
            className="h-12 w-12 mx-5 rounded-full"
          />
          <button
            className="font-bold text-white bg-red-600 px-3 h-12 rounded-full hover:bg-red-500"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
