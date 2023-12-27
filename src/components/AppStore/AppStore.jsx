import React from "react";
import ApStore from "../../assets/image/AppStore1.png";
import PlayStore from "../../assets/image/googleplay1.png";
import Gif from '../../assets/image/kurir.jpeg'

const AppStore = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-14" id="appstore">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">

            <div 
              data-aos="fade-up"
              data-aos-duration="300"

            className="space-y-6 max-w-xl mx-auto">
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400">
                Al Humaira gallery is Available for Android and IOS
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="#">
                  <img
                    src={ApStore}
                    alt="playstore"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] rounded-sm"
                  />
                </a>
                <a href="#">
                  <img
                    src={PlayStore}
                    alt="playstore"
                    className="max-w-[140px] sm:max-w-[100px] md:max-w-[200px] rounded-[50px] "
                  />
                </a>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="300">
              <img src={Gif} alt="gif" className="max-w-[300px] mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
