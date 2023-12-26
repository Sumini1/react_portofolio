import React from "react";
import Img1 from "../../assets/image/khimar4.jpeg";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px]">
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
              {/* text-co tent-section */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
