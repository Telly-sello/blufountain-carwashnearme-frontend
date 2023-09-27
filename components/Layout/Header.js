import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import Image from "next/image";
import Dropdown from "../misc/Dropdown";
import DropdownApp from "../misc/Dropdown";

const Header = ({toggleModal, user, name}) => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const router= useRouter()
  


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full shadow-md  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2  flex items-center lg:text-2xl sm:text-sm">
          {/* <Image
            src={"images/barber.jpg"}
            width={200}
            height={100}
            priority
            alt="logo"/> */}
            <Link href={"http://localhost:3000"}>
            <span
              className="font-medium cursor-pointer"
              style={{ color: "rgba(52,170,207,255)" }}
            >
              BluFountain
            </span>
            </Link>
            <span className="font-extralight text-gray-300">CarWashNearMe</span>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
           
          <Link href={"/"}>
                <a className={` mx-2 sm:mx-4 capitalize tracking-wide flex justify-center items-center  hover:text-blue-500 transition-all
              ${router.pathname === "/"
              ? "border-b-2 pr-2 border-blue-500"
              : ""}`}>
                    home
                </a>
              </Link>
          <Link href={"http://localhost:3010"}>
                <a className={` mx-2 sm:mx-4 capitalize tracking-wide flex justify-center items-center  hover:text-blue-500 transition-all
              ${router.pathname === "/bookings"
              ? "border-b-2 pr-2 border-blue-500"
              : ""}`}>
                    bookings
                </a>
              </Link>

          <Link href={"/contact"}>
                <a className={` mx-2 sm:mx-4 capitalize tracking-wide flex justify-center items-center  hover:text-blue-500 transition-all
              ${router.pathname === "/contact"
              ? "border-b-2 pr-2 border-blue-500"
              : ""}`}>
                    Call me Back
                </a>
              </Link>
             <Link href={"/complaints"}>
               <a className={` mx-2 sm:mx-4 capitalize tracking-wide flex justify-center items-center  hover:text-blue-500 transition-all
              ${router.pathname === "/complaints"
              ? "border-b-2 pr-2 border-blue-500"
              : ""}`}>
                   Complaints
               </a>
             </Link>
             <Link href={"/chat"}>
               <a className={` mx-2 sm:mx-4 capitalize tracking-wide flex justify-center items-center  hover:text-blue-500 transition-all
              ${router.pathname === "/chat"
              ? "border-b-2 pr-2 border-blue-500"
              : ""}`}>
                   Chat
               </a>
             </Link>
             <DropdownApp />
           </ul>
        
        </nav>
      </header>
      {/* Mobile Navigation */}
      
   
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
