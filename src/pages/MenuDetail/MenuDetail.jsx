import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MenuDetail = () => {
  const [menu, setMenu] = useState({});

  // cara mengambil id menu detail
  const param = useParams();
  console.log(param);

  useEffect(() => {
    getMenudetail();
  }, []);

  const getMenudetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param.id}`)
      .then((respon) => {
        setMenu(respon.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-slate-400 mb-0 p-0 w-[100%] h-[100vw] z-50 backdrop-blur">
      <div>
        <h1 className="text-[#4B0082] font-bold text-center mb-6 py-8">
          Menu Detail
        </h1>
      </div>
      <h2 className="text-[#4B0082] font-bold">{menu.name}</h2>
      <div className="grid grid-cols-1 items-center p-6">
        <img
          className="w-[260px] h-[170px] justify-center rounded-[20px] mb-5 items-center p-3"
          src={menu.imageUrl}
        />
        <p className="text-[#4B0082] font-semibold">{menu.description}</p>
        <p className="text-[#4B0082]">{menu.price}</p>
      </div>
    </div>
  );
};

export default MenuDetail;
