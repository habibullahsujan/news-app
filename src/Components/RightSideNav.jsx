import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Context/UserContext";

const RightSideNav = () => {
  const { googleSinIn, user } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleSinIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h3>Social Services</h3>
      {user?.uid ? (
        ""
      ) : (
        <>
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="px-8 block bg-gray-100 mb-3 py-3 font-semibold border rounded border-gray-10"
          >
            <span className="flex items-center gap-1">
              {" "}
              <FaGoogle />
              Sign In With Google
            </span>
          </button>

          <button
            type="button"
            className="px-8 block bg-gray-100 mb-3 py-3 font-semibold border rounded border-gray-10"
          >
            <span className="flex items-center gap-1">
              {" "}
              <FaGithub />
              Sign In With GitHub
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default RightSideNav;
