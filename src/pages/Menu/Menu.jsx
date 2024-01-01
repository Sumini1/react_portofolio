import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenus();
  }, []);

  const getMenus = () => {
    axios
      .get(`https://api.mudoapi.tech/menus`)
      .then((respon) => {
        setMenus(respon.data.data.Data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(menus);
  return (
    <div className="bg-slate-400 mb-0 p-0 w-[100%] h-[100vw] z-50 backdrop-blur">
      <h1 className="text-center text-[#4B0082] font-bold mb-10 py-5">
        List Semua Menu
      </h1>
      <div className="grid grid-cols-3 gap-3 mx-4">
        {menus.length ? (
          menus.map((item) => (
            <div className="">
              <p className="text-[#4B0082] mb-2 text-left">{item.name}</p>
              <img
                className="w-[260px] h-[170px] justify-center rounded-[20px] mb-5 items-center p-3"
                src={item.imageUrl}
              />
              <div>
                <Link to={`/menu-detail/${item.id}`}>
                  <button className="rounded-md border border-secondary bg-[#4B0082] text-slate-400 w-14 mb-8">
                    detail
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </div>
  );
};

export default Menu;
