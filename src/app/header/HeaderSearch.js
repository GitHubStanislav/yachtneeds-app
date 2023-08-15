import React from "react";
import { BiUser, BiCart } from "react-icons/bi";
import Image from "next/image";
import logo from "../icons/logo-small.6645556.svg";

const HeaderSearch = () => {
  return (
    <div className="bg-gray-900 text-white p-2 flex flex-col md:flex-row justify-between items-center px-5 lg:px-28">
      <label
        htmlFor="logo"
        className="cursor-pointer flex items-center mb-2 md:mb-0"
      >
        <Image priority={true} src={logo} alt="logo" className="h-9 md:h-11" />
        <div className="ml-2 md:ml-5 text-sm ">Y A C H T N E E D S</div>
      </label>
      <div className="w-full md:w-auto mb-2 md:mb-0 md:ml-10 grow flex items-center ">
        <input
          className="w-full md:max-w-2xl bg-white text-black px-3 py-2 rounded-md outline-none"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center font-bold">
        <div className="flex items-center mr-5 ml-5 md:mr-10">
          <BiUser className="text-xl md:text-2xl mr-2 font-bold" />
          LOG IN
        </div>
        <div className="flex items-center">
          <BiCart className="text-xl md:text-2xl mr-2 font-bold " />
          CART
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
