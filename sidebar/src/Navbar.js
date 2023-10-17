import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, LinksList, SocialBar } from "./links";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className='nav'>
      <header className='nav-header'>
        <div className='nav-brand'>
          <h4>Navbar</h4>
        </div>
        <button className='btn nav-toggler'>
          <FaBars className='nav-icon' onClick={openSidebar} />
        </button>
      </header>
      <div className='links-container'>
        <ul className='nav-links'>
          <LinksList />
        </ul>
      </div>
      <div className='social-links'>
        <SocialBar />
      </div>
    </nav>
  );
};

export default Navbar;
