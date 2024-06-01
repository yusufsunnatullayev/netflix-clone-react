import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email);

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer ">
          NETLIFIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="flex items-center space-x-4">
          <Link to="/account">
            <button className="text-white cursor-pointer pr-4">Account</button>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <div className="text-white cursor-pointer pr-4">Sign In</div>
          </Link>
          <Link to="/signup">
            <div className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
