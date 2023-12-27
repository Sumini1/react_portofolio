import React from "react";
import Img1 from "../../assets/image/khimar4.jpeg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px]" id="banner">
        <div>
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* image section  */}
              <div>
                <img
                  src={Img1}
                  alt=""
                  className="max-w-[430px] w-full mx-auto rounded-full  drop-shadow-sm shadow-neutral-900"
                />
              </div>
              {/* text-content-section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary">
                  lorem ipsum dolor
                </h1>
                <p className="text-sm text-secondary tracking-wide leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, nesciunt? At aliquam enim perspiciatis quam rem
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque dignissimos et optio enim earum, harum, quis numquam
                  inventore quibusdam, reiciendis voluptatibus neque nihil.
                  Minus, ullam!
                </p>
                <div className=" flex gap-6 ">
                  <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 cursor-pointer rounded-full bg-primary dark:bg-primary" />
                  <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 cursor-pointer rounded-full bg-secondary dark:bg-secondary" />
                  <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 cursor-pointer rounded-full bg-primary dark:bg-primary" />
                </div>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full duration-200 hover:scale-105">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
