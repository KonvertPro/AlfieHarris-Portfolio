import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

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
    <img src={logo} alt="logo" className="w-9 h-9 
    object-contain" />
    <p className="text-white text-[18px] font-bold cursor-pointer flex">
       Alfie Harris &nbsp;
       <span className="sm:block hidden">|&nbsp; Design Portfolio </span></p>
      </Link>
<ul className="list-none hidden sm:flex flex-row gap-4">
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

    
  </div>
   </div>
 </div>
</nav>
  )
}

export default Navbar
