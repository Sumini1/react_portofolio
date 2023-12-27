import React from "react";
import Img1 from "../../assets/image/gamis3.jpeg";
import Img2 from "../../assets/image/gamis5.jpeg";
import Img3 from "../../assets/image/gamis4.jpeg";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Abaya Rihlah ",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quas sint veritatis nihil quis tempore",
  },
  {
    id: 2,
    img: Img2,
    name: "Abaya Raihana ",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quas sint veritatis nihil quis tempore",
  },
  {
    id: 3,
    img: Img3,
    name: "Abaya Aulia ",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quas sint veritatis nihil quis tempore",
  },
];

const Service = () => {
  return (
    <>
      <div className="py-10" id="service">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            {/* <p className="text-sm bg-clip-text bg-primary text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Service
            </p> */}
            <h1 className="text-3xl font-bold text-primary">Service</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugiat suscipit omnis explicabo quisquam eos aperiam tempora,
              perferendis odit voluptatum.
            </p>
          </div>
          {/* Card Section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 md:grid-cols-3 md:gap-5 place-items-center">
              {ServicesData.map(({ id, img, name, description }) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    
                    key={id}
                    className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 shadow-xl"
                  >
                    <div className="h-[100px]">
                      <img
                        src={img}
                        alt=""
                        className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 h-[100px] w-[100px]  rounded-full"
                      />
                    </div>
                    <div className="p-4 text-center ">
                      <h1 className="text-xl font-bold text-gray-500  hover:text-white duration-300">
                        {name}
                      </h1>
                      <p className="text-secondary hover:text-white duration-300  text-sm line-clamp-2">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

{
  /* <img
  src={Img1}
  alt=""
  className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
/>; */
}
