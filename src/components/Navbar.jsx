import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, github } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState ('');
  const [toggle, setToggle] = useState(false);

 return(
 <nav className={`${styles.paddingX} w-full flex 
    items-center py-5 fixed top-0 z-20 
    bg-black/30 backdrop-blur-md border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.25)]`}
   >
   <div className="w-full flex justify-between 
    items-center max-w-7xl mx-auto">
      <Link
      to="/"
      className="flex items-center gap-2"
      onClick={() => {
        setActive("");
        window.scrollTo(0,0);
      }}
   >
    <p className="text-white text-[18px] font-bold cursor-pointer flex">
       Alfie Harris &nbsp;
       <span className="sm:block hidden">|&nbsp; Design Portfolio </span></p>
      </Link>
      {/* Right-aligned nav links + socials (desktop) */}
      <div className="hidden sm:flex items-center gap-5 ml-auto">
        <ul className="list-none flex flex-row gap-6">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                active === link.title
                  ? "text-white bg-white/10"
                  : "text-secondary hover:text-white hover:bg-white/5"
              } text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-secondary hover:text-white transition-colors"
          >
            <img src={github} alt="GitHub" className="w-5 h-5 object-contain" />
          </a>
          <a
            href="https://www.linkedin.com/in/alfieharris1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-secondary hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0zM7.5 8H12v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 5.99 3.33 5.99 7.66V24h-5v-7.6c0-1.81-.03-4.14-2.52-4.14-2.53 0-2.92 1.98-2.92 4.01V24h-5z"/>
            </svg>
          </a>
        </div>
      </div>

    

   <div className="sm:hidden flex flex-1 justify-end items-center">
  <img 
  src={toggle ? close: menu}
  alt="menu"
  className="w-[28px] h-[28px]
  object-contain cursor-pointer"
  onClick={() => setToggle(!toggle)}
  />

  <div className={`${!toggle ? 'hidden'
    : 'flex' } p-6 bg-black/80 backdrop-blur-md border border-white/10 absolute top-20 
    right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}>

<ul className="list-none flex justify-end items-start 
               flex-col gap-4">
  {navLinks.map((link) => (
    <li 
    key={link.id}
    className={`${
      active === link.title
      ? "text-white"
      : "text-secondary"
    } font-poppins font-medium cursor-pointer text-[16px] px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors`}
    onClick={() => {
      setToggle(!toggle)
      setActive(link.title)
    }}
    >
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  ))}
    </ul>
    {/* Social icons (mobile) */}
    <div className="mt-4 flex items-center gap-4">
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-secondary hover:text-white transition-colors"
      >
        <img src={github} alt="GitHub" className="w-6 h-6 object-contain" />
      </a>
      <a
        href="https://www.linkedin.com/in/alfieharris1/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-secondary hover:text-white transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
          aria-hidden="true"
        >
          <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0zM7.5 8H12v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 5.99 3.33 5.99 7.66V24h-5v-7.6c0-1.81-.03-4.14-2.52-4.14-2.53 0-2.92 1.98-2.92 4.01V24h-5z"/>
        </svg>
      </a>
    </div>
  </div>
   </div>
 </div>
</nav>
  )
}

export default Navbar
