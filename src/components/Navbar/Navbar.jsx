import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "../DarkMode/DarkMode";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
 
    // cara pindah halaman setelah logout diarahin ke login
    // localStorage.removeItem("token");
    // window.location.href = "/login";
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    console.log("token", token);

    const handleLogout = () => {
      localStorage.removeItem('token')
      navigate('/login')
    }

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <Link
                to={"#"}
                className="flex text-primary font-bold items-center gap-2 text-2xl sm:text-3xl"
              >
                Humaira
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <DarkMode />
              </div>

              <div className="hidden sm:flex md:flex gap-4">
                <Link
                  to={"#"}
                  className="inline-block py-4 px-4 hover:text-primary font-semibold"
                >
                  Home
                </Link>
                <Link
                  to={"#"}
                  className="inline-block py-4 px-4 hover:text-primary font-semibold"
                >
                  About
                </Link>
                <Link
                  to={"#"}
                  className="inline-block py-4 px-4 hover:text-primary font-semibold"
                >
                  Contact
                </Link>
                {token ? (
                  <Link
                    to={"#"}
                    onClick={handleLogout}
                    className="inline-block py-4 px-4 hover:text-primary font-semibold"
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to={"/login"}
                    className="inline-block py-4 px-4 hover:text-primary font-semibold"
                  >
                    Login
                  </Link>
                )}
              </div>
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2">
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
