import React, { useState } from "react";
import "./CompanyPage.css";
import Nav from "../elements/Nav";
import Footer from "../elements/Footer";
import imgAbout from "../assets/group.jpg";
import imgConsu from "../assets/consultant.png";
import imgInt from "../assets/internet.png";
import imglptp from "../assets/laptop.png";
import aws from "../assets/aws.png";
import mandiri from "../assets/mandiri.png";
import tokopedia from "../assets/tokopedia.png";
import astra from "../assets/astra.png";
import maps from "../assets/maps.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import whatsapp from "../assets/whatsapp.png";

const CompanyPage = () => {
  const [activeSection, setActiveSection] = useState("opening");

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="page-body">
      {/*body */}
      {/*opening */}
      <div id="opening">
        {/*navbar */}
        <Nav />
        {/*end navbar */}
        <div className="welcome-container mt-[7rem] justify-center flex sm:justify-start sm:mt-[10rem]">
          <div className="welcome-content text-white font-poppins w-[350px] text-center sm:text-left sm:w-[400px]">
            <h2 className="text-2xl font-semibold sm:text-3xl">PT.SIMSALABIM</h2>
            <h2 className="text-4xl font-bold mt-4 sm:text-5xl">Company Profile</h2>
            <h2 className="text-md font-thin mt-8 sm:text-lg">quis imperdiet massa tincidunt nunc pulvinar sapien et</h2>
            <button className="text-lg font-semibold px-5 py-2 rounded-lg mt-[2rem] sm:px-7" onClick={() => scrollToSection("about")}>
              Tentang Kami
            </button>
          </div>
        </div>
      </div>
      {/*end opening */}

      {/*about */}
      <div id="about">
        <div className="about-container flex flex-col items-center sm:flex-row font-poppins">
          <div className="about-img w-[300px] sm:w-[1300px] sm:mr-[4rem]">
            <img src={imgAbout} className="rounded-2xl" />
          </div>
          <div className="about-caption text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white mt-5 sm:text-3xl sm:mt-0">Tentang Kami</h2>
            <h2 className="text-md font-normal text-white mt-[1rem] sm:mt-[2rem] sm:text-justify sm:text-lg sm:tracking-wide">
              curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non
              arcu risus quis varius quam quisque
            </h2>
            <button className="text-white font-semibold text-lg mt-6 bg-slate-600 px-5 py-2 rounded-lg sm:mt-12">Selengkapnya</button>
          </div>
        </div>
      </div>
      {/*end about */}

      {/*product and service */}
      <div id="product">
        <h2 className="font-poppins text-center text-2xl text-white font-semibold sm:text-3xl">Produk & Service</h2>

        <div className="card-container flex justify-center font-poppins mt-10">
          <div className="card-content flex flex-wrap justify-center items-center gap-6 sm:gap-[10rem]">
            <div className="card-box border-2 border-white w-[250px] flex flex-col items-center px-8 py-10 rounded-2xl">
              <img src={imgConsu} className="w-20" />
              <h2 className="text-center text-white text-xl font-semibold mt-4 sm:text-2xl">Layanan konsultasi IT</h2>
              <h2 className="text-center text-sm text-white mt-4 w-[250px]">Merancang serta membantu membuat ide dalam sebuah aplikasi web</h2>
            </div>
            <div className="card-box border-2 border-white w-[250px] flex flex-col items-center px-8 py-10 rounded-2xl">
              <img src={imgInt} className="w-20" />
              <h2 className="text-center text-white text-xl font-semibold mt-4 sm:text-2xl">Layanan Web Developer</h2>
              <h2 className="text-center text-sm text-white mt-4 w-[250px]">Merancang serta membantu membuat Website dengan responsivitas</h2>
            </div>
            <div className="card-box border-2 border-white w-[250px] flex flex-col items-center px-8 py-10 rounded-2xl">
              <img src={imglptp} className="w-20" />
              <h2 className="text-center text-white text-xl font-semibold mt-4 sm:text-2xl">Jual & Service Laptop</h2>
              <h2 className="text-center text-sm text-white mt-4 w-[230px]">Menjual berbagai perangkat kantor seperti laptop dan jasa service</h2>
            </div>
          </div>
        </div>
      </div>
      {/*end product and service */}

      {/*partners */}
      <div id="partners">
        <div className="partners-container justify-center flex">
          <div className="partners-img flex flex-wrap justify-center items-center gap-[4rem] sm:gap-[8rem]">
            <img src={aws} className="w-[100px] sm:w-[150px]" />
            <img src={mandiri} className="w-[210px] sm:w-[260px]" />
            <img src={tokopedia} className="w-[170px] sm:w-[200px]" />
            <img src={astra} className="w-[180px] sm:w-[200px]" />
          </div>
        </div>
      </div>
      {/*end partners */}

      {/*maps */}
      <div id="maps">
        <h2 className="font-poppins text-2xl text-white font-semibold text-center sm:text-3xl">Lokasi Kami</h2>
        <div className="maps-card flex justify-center mt-10">
          <img src={maps} className="w-[400px] rounded-xl sm:w-[800px] sm:rounded-2xl" />
        </div>
      </div>
      {/*end maps */}

      {/*contact us */}
      <div id="contact">
        <h2 className="font-poppins text-2xl font-semibold text-white text-center">Kontak</h2>
        <div className="contact-container font-poppins flex justify-center mt-10">
          <div className="contact-content flex flex-wrap justify-center items-center gap-[4rem] sm:gap-[10rem]">
            <div className="contact-card flex flex-col items-center">
              <img src={phone} className="w-20" />
              <h2 className="mt-4 text-white font-semibold text-lg sm:text-xl">Phone</h2>
              <h2 className="text-white">active 8.00 am - 10.00 pm</h2>
              <h2 className="text-white mt-3">Indonesia :</h2>
              <h2 className="text-white">0812-1234-5678</h2>
              <h2 className="text-white mt-3">International :</h2>
              <h2 className="text-white">1-0123-89121</h2>
            </div>
            <div className="contact-card flex flex-col items-center">
              <img src={email} className="w-20" />
              <h2 className="mt-4 text-white font-semibold text-lg sm:text-xl">Email</h2>
              <h2 className="text-white">active 8.00 am - 10.00 pm</h2>
              <h2 className="text-white mt-3 sm:mt-11">company.123@gmail.com</h2>
              <h2 className="text-white">or</h2>
              <h2 className="text-white">company.second@gmail.com</h2>
            </div>
            <div className="contact-card flex flex-col items-center">
              <img src={whatsapp} className="w-20" />
              <h2 className="mt-4 text-white font-semibold text-lg sm:text-xl">WhatsApp</h2>
              <h2 className="text-white">active 8.00 am - 10.00 pm</h2>
              <h2 className="text-white mt-3">Indonesia :</h2>
              <h2 className="text-white">0812-1234-5678</h2>
              <h2 className="text-white mt-3">International :</h2>
              <h2 className="text-white">1-0123-89121</h2>
            </div>
          </div>
        </div>
      </div>
      {/*end contact us */}

      <Footer />
    </div>
  );
};

export default CompanyPage;
