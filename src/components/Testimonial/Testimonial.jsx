import React from "react";
import Slider from "react-slick";
import orang1 from "../../assets/image/kartun3.jpeg";
import orang2 from "../../assets/image/orang1.jpeg";
import orang3 from "../../assets/image/orang3.jpeg";

const testimonialData = [
  {
    id: 1,
    name: "Rindu",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores, obcaecati aut sunt eveniet dolorum.",
    img: orang1,
  },
  {
    id: 2,
    name: "Cinta",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores, obcaecati aut sunt eveniet dolorum.",
    img: orang2,
  },
  {
    id: 3,
    name: "Sumini",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores, obcaecati aut sunt eveniet dolorum.",
    img: orang3,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10" id="testimonial">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            {/* <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p> */}

            <h1 className="text-3xl font-bold text-primary">Testimonial</h1>

            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              fugiat suscipit omnis explicabo quisquam eos aperiam tempora,
              perferendis odit voluptatum.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center text-center gap-4 shadow-lg mx-4 p-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative ">
                      <img
                        src={img}
                        alt=""
                        className=" rounded-full block mx-auto"
                      />
                      <p className="text-secondary text-sm hover:text-white duration-300">
                        " {text} "
                      </p>
                      <h1 className="text-xl font-bold text-primary hover:text-white duration-300">
                        {name}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
