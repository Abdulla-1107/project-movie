import React from 'react';
import logo from "@/assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center border-t border-blue-500">
      
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
       
        <div className="w-8 h-8 flex items-center justify-center">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex flex-col space-y-2">
          <a
            href="#"
            className="flex items-center space-x-2 bg-gray-800 rounded-md px-3 py-1 border border-gray-600 hover:bg-gray-700"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-6"
            />
            <span className="text-sm">Скачать M3 Google Play</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 bg-gray-800 rounded-md px-3 py-1 border border-gray-600 hover:bg-gray-700"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt="App Store"
              className="h-6"
            />
            <span className="text-sm">Загрузить в App Store</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col space-y-2 mb-4 md:mb-0">
        <span className="text-sm font-semibold">О нас</span>
        <a href="#" className="flex items-center space-x-2 text-red-500 hover:text-red-700">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <span>Публичная оферта</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-red-500 hover:text-red-700">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <span>Реклама</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-red-500 hover:text-red-700">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <span>F.A.Q</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-red-500 hover:text-red-700">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.27 1.12.29 2.24.66 3.32 1.08.37.15.54.55.43.91-.45 1.45-1.18 2.78-2.14 3.93C16.38 22.21 14.28 23 12 23 6.48 23 2 18.52 2 13c0-2.28.79-4.38 2.06-6.04.96-1.15 1.69-2.48 2.14-3.93-.11-.36.06-.76.43-.91 1.08-.42 2.2-.79 3.32-1.08.35-.09.75 0 1.02.27l2.2 2.2c-2.83 1.44-5.15 3.75-6.59 6.59l-1.91-1.91z" />
          </svg>
          <span>Контакты</span>
        </a>
      </div>

      <div className="flex flex-col space-y-2 mb-4 md:mb-0">
        <span className="text-sm font-semibold">Категории</span>
        <a href="#" className="flex items-center space-x-2 text-red-500 hover:text-red-700">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <span>Кино</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-red-500 hover:text-red-700">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <span>Театр</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-red-500 hover:text-red-700">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <span>Концерты</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-red-500 hover:text-red-700">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <span>Спорт</span>
        </a>
      </div>

      <div className="flex flex-col items-center md:items-end">
        <div>
          <span className="text-sm font-semibold">Связаться с нами</span>
          <a href="tel:+998957807383" className="block text-red-500 text-sm font-bold mt-1">
            +998 (95) 807-38-38
          </a>
        </div>
        <div className="mt-2">
          <span className="text-sm">Социальные сети</span>
          <div className="flex space-x-3 mt-1">
            <a href="#" className="text-red-500 hover:text-red-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </a>
            <a href="#" className="text-red-500 hover:text-red-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </a>
            <a href="#" className="text-red-500 hover:text-red-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;