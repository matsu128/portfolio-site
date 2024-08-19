import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    const currentUrl = window.location.href;
    const baseUrl = window.location.origin + '/';

    if (currentUrl !== baseUrl) {
      window.location.href = baseUrl; // ハッシュやクエリを除去して '/' にリダイレクト
    } else {
      window.location.reload();
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center p-4">
        <div
          className="text-gray-700 text-2xl font-bold cursor-pointer"
          onClick={handleLogoClick}
        >
          My Portfolio
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-8 md:space-y-0 space-y-4 md:space-x-4 absolute md:static top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}
        >
          <li>
            <a
              href="#home"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)} // メニューをクリックすると閉じる
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              id="skills-tab"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
