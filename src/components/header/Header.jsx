import React from 'react'

  const Header = () => {
      return (
        <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-orange-600 flex items-center justify-center mr-2">
              <span className="text-white font-bold">|||</span>
            </div>
            <span className="text-lg font-bold">BILC TICK</span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="flex items-center space-x-2 hover:text-red-500">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v18H3V3zm2 2v14h14V5H5z" />
              </svg>
              <span>Афиша</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-red-500">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <span>Сеансы</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-red-500">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <span>Билеты</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-red-500">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <span>Поиск</span>
            </a>
          </nav>

          {/* Language Selector and Login Button */}
          <div className="flex items-center space-x-4">
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
        </header>
      );
}

export default Header