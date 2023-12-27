import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { FaMobile } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950">
        <div className="max-w-[1200px] mx-auto ">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="text-xl sm:text-3xl font-bold text-gray-700 dark:text-gray-400 text-justify sm:text-left mb-3">
                Humaira Gallery
              </h1>
              <p className="font-semibold text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                minus, reprehenderit non dolor quidem consequatur assumenda at
                soluta quos tempore.
              </p>
              <br />
              <div className="flex items-center gap-3 mt-6">
                <FaLocationArrow className="font-semibold text-gray-700 dark:text-gray-400" />
                <p className="font-semibold text-gray-700 dark:text-gray-400">
                  Noida, Uttar Pradesh
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobile className="font-semibold text-gray-700 dark:text-gray-400" />
                <p className="font-semibold text-gray-700 dark:text-gray-400">
                  +62 0895428336
                </p>
              </div>

              {/* social hadle */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl font-semibold text-gray-700 dark:text-gray-400" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl font-semibold text-gray-700 dark:text-gray-400" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl font-semibold text-gray-700 dark:text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3  text-gray-700 dark:text-gray-400">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3 font-semibold text-gray-700 dark:text-gray-400">
                    <li>Home</li>
                    <li>About</li>
                    <li>service</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold  dark:text-gray-400 text-gray-700 dark:text-gray-400text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3 font-semibold text-gray-700 dark:text-gray-400 ">
                    <li>Home</li>
                    <li>About</li>
                    <li>service</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold  text-gray-700 dark:text-gray-400 text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3 font-semibold text-gray-700 dark:text-gray-400">
                    <li>Home</li>
                    <li>About</li>
                    <li>service</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
