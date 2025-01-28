import React from "react";
import Button from "../layouts/Button";
import img from "../assets/home.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]">
      <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum
          minus explicabo enim veniam eligendi adipisci, quos autem!
        </p>
        <div className="flex flex-row gap-6">
          <Button title="ADD TO CHART" />
          <Button title="MORE MENU" />
        </div>
      </div>

      <div className="relative">
        <img src={img} alt="" />
        <div className="absolute bg-white px-8 py-2 right-0 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0,2)]">
          <h2>14K</h2>
        </div>
        <div className="absolute bg-white px-8 py-0 bottom-0 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0,2)]">
          <h2>Cappuccino</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
