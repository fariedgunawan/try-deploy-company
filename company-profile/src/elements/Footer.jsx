import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import React, { useState } from "react";

const Footer = () => {
  const [activeSection, setActiveSection] = useState("opening");

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <footer className="footer footer-center p-[25px] bg-black text-base-content rounded">
        <div className="grid grid-flow-col gap-10">
          <a className="link link-hover" onClick={() => scrollToSection("opening")}>
            Beranda
          </a>
          <a className="link link-hover" onClick={() => scrollToSection("about")}>
            Tentang
          </a>
          <a className="link link-hover" onClick={() => scrollToSection("product")}>
            Service
          </a>
          <a className="link link-hover" onClick={() => scrollToSection("contact")}>
            Contact
          </a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-8">
            <a>
              <img src={twitter} className="w-7" />
            </a>
            <a>
              <img src={instagram} className="w-7" />
            </a>
            <a>
              <img src={linkedin} className="w-7" />
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by Company Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
