import logo from "../assets/logo.png";
import React, { useState } from "react";
const Nav = () => {
  const [activeSection, setActiveSection] = useState("opening");

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="page-nav flex justify-between items-center">
        <div className="company-name text-white flex gap-3 items-center">
          <img src={logo} className="w-12" />
          <h1 className="font-bold text-xl font-poppins hidden sm:flex">Company</h1>
        </div>
        <div className="right-side text-white gap-12 hidden text-lg font-poppins sm:flex">
          <h2 onClick={() => scrollToSection("opening")} className="cursor-pointer">
            Beranda
          </h2>
          <h2 onClick={() => scrollToSection("about")} className="cursor-pointer">
            Tentang
          </h2>
          <h2 onClick={() => scrollToSection("product")} className="cursor-pointer">
            Service
          </h2>
          <h2 onClick={() => scrollToSection("contact")} className="cursor-pointer">
            Contact
          </h2>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end sm:hidden">
          <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 text-black font-poppins">
            <li>
              <a onClick={() => scrollToSection("opening")}>Beranda</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("about")}>Tentang</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("product")}>Service</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("contact")}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
