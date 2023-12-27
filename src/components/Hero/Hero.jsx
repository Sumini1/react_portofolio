import React from "react";
import bgImg from "../../assets/image/logobaju.jpeg";
import Baju1 from "../../assets/image/baju1.jpeg";
import Baju2 from "../../assets/image/baju2.jpg";
import Baju3 from "../../assets/image/baju3.webp";

const ImageList = [
  {
    id: 1,
    img: Baju1,
  },
  {
    id: 2,
    img: Baju2,
  },
  {
    id: 3,
    img: Baju3,
  },
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = React.useState(Baju3);

  return (
    <>
      <div
        style={bgImage}
        className="min-h[550px] sm:min-h-[600px] bg-gray-950 dark:text-white duration-200 flex justify-center items-center" id="hero"
      >
        <div className="container pb-8 sm:pb-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content ssection */}

            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to Gallery{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Al Humaira
                </span>
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                quibusdam voluptatem architecto. Omnis, autem enim ab soluta,
                hic recusandae, doloremque necessitatibus voluptate
                exercitationem dicta quis.
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="order-1 sm:order-1 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
              {/* image section */}
              <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={imageId}
                  alt=""
                  className="w-[300px] sm:w-[450px] rounded-full mx-auto spin"
                />
              </div>
              {/* image  List section */}
              <div className="flex lg:flex-col lg:-translate-y-1/2 lg:top-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                {ImageList.map((item) => (
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-once="true"
                    key={item.id}
                    src={item.img}
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 rounded-full"
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? Baju1 : item.id === 2 ? Baju2 : Baju3
                      );
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
