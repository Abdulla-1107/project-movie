import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { LuTicket } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import seans from "@/assets/seans.png";
import afisha from "@/assets/afisha.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center relative">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-orange-600 flex items-center justify-center mr-2">
          <span className="text-white font-bold">|||</span>
        </div>
        <span className="text-lg font-bold">BILC TICK</span>
      </div>

      <nav className="hidden md:flex space-x-6">
        <a href="#" className="flex items-center space-x-2 hover:text-red-500">
          <img src={afisha} alt="afisha" className="w-5 h-5" />
          <span>Афиша</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-red-500">
          <img src={seans} alt="seans" className="w-5 h-5" />
          <span>Сеансы</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-red-500">
          <LuTicket />
          <span>Билеты</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-red-500">
          <IoIosSearch />
          <span>Поиск</span>
        </a>
      </nav>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg"
            alt="Russian Flag"
            className="w-5 h-5"
          />
          <select className="bg-black text-white border-none outline-none">
            <option value="ru">Ру</option>
            <option value="en">En</option>
          </select>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
          Войти
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black z-50 flex flex-col space-y-4 py-4 px-6 md:hidden">
          <a href="#" className="flex items-center space-x-2 hover:text-red-500">
            <img src={afisha} alt="afisha" className="w-5 h-5" />
            <span>Афиша</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-red-500">
            <img src={seans} alt="seans" className="w-5 h-5" />
            <span>Сеансы</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-red-500">
            <LuTicket />
            <span>Билеты</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-red-500">
            <IoIosSearch />
            <span>Поиск</span>
          </a>

          {/* Language and Login for mobile */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg"
                alt="Russian Flag"
                className="w-5 h-5"
              />
              <select className="bg-black text-white border-none outline-none">
                <option value="ru">Ру</option>
                <option value="en">En</option>
              </select>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              Войти
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
