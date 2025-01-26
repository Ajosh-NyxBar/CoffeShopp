import React, { useState } from "react";
import { SiCoffeescript } from "react-icons/si";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import {
  AiOutlineAccountBook,
  AiOutlineClose,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div>
      <div>
        <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0,2)]">
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <span>
              <SiCoffeescript size={25} />
            </span>
            <h1 className="text-xl font-semibold">CafePulse</h1>
          </div>

          <nav className="md:flex hidden flex-row gap-8 items-center text-lg font-medium">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer group relative inline-block hover:text-brightColor"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer group relative inline-block hover:text-brightColor"
            >
              Menu
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer group relative inline-block hover:text-brightColor"
            >
              About Us
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer group relative inline-block hover:text-brightColor"
            >
              Products
            </Link>
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer group relative inline-block hover:text-brightColor"
            >
              Reviews
            </Link>
          </nav>

          <div className="hidden lg:flex">
            <Button title="Order Now" />
          </div>

          <div className="lg:hidden">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8
        w-full h-fit transition-transform duration-200`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer group relative inline-block hover:text-brightColor"
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer group relative inline-block hover:text-brightColor"
          >
            Menu
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer group relative inline-block hover:text-brightColor"
          >
            About Us
          </Link>
          <Link
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer group relative inline-block hover:text-brightColor"
          >
            Products
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer group relative inline-block hover:text-brightColor"
          >
            Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
