"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import ContactButton from "./modal";
import {
  festLogo,
  flashSaleLink,
  peoplesChoice,
  sponsorDeck,
  venderAppLink,
  volunteerAppLink,
} from "../../lib/constants";

const intLink = "/tickets";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    console.log("open");
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    console.log("close");
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav className=" bg-blue-600 border-gray-200 px-4 lg:px-6 py-2.5 relative">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src={festLogo} className=" h-12" alt="STL FEST Logo" />
            <span className="self-center text-5xl font-semibold font-[groupie-regular] whitespace-nowrap text-white">
              2024
            </span>
          </a>
          <div className="flex items-center "></div>
          <div className="lg:hidden flex">
            {!isOpen && (
              <AiOutlineMenu
                className="text-gray-100 w-8 h-8"
                onClick={handleOpenModal}
              />
            )}
            {isOpen && (
              <AiOutlineMenu
                className="text-gray-100 w-8 h-8"
                onClick={handleCloseModal}
              />
            )}
          </div>
          {isOpen && <MobileNav />}
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto ">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 font-owners">
              <Routes />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

const MobileNav = () => {
  return (
    <div className="z-[999] fixed mx-auto top-20 right-0 left-0 bg-blue-600 h-4/5  w-[90vw] max-w-lg md:max-w-5xl justify-center items-center content-center flex  border-slate-300 opacity-90 ease-in-out duration-500 transition">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 font-[bubblegum-pop-vanilla] text-5xl">
        <Routes />
      </ul>
    </div>
  );
};

const Routes = () => {
  return (
    <>
      {" "}
      <li className="hidden">
        <Link
          href={peoplesChoice}
          className="hidden py-2 pr-4 pl-3 text-white hover:bg-gray-50 lg:hover:bg-transparent  hover:text-white lg:p-0 hover:scale-105 ease-in-out duration-150"
        >
          People's Choice
        </Link>
      </li>
      <li className="">
        <Link
          href={venderAppLink}
          className="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 lg:hover:bg-transparent  hover:text-white lg:p-0 hover:scale-105 ease-in-out duration-150"
        >
          Vendors
        </Link>
      </li>
      <li className="">
        <Link
          href={volunteerAppLink}
          className="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 lg:hover:bg-transparent  hover:text-white lg:p-0 hover:scale-105 ease-in-out duration-150"
        >
          Volunteer
        </Link>
      </li>
      <li className="hidden">
        <Link
          href={flashSaleLink}
          className="block py-2 pr-4 pl-3 text-white  hover:bg-gray-50 lg:hover:bg-transparent hover:text-white lg:p-0 hover:scale-105 ease-in-out duration-150 "
        >
          Tickets
        </Link>
      </li>
      <li className="">
        <Link
          href={sponsorDeck}
          className="block py-2 pr-4 pl-3 text-white  hover:bg-gray-50 lg:hover:bg-transparent hover:text-white lg:p-0 hover:scale-105 ease-in-out duration-150  "
        >
          Sponsors
        </Link>
      </li>
      <li className="hidden">
        <Link
          href="https://form.jotform.com/212233927554052"
          className="block py-2 pr-4 pl-3 text-white  hover:bg-gray-50 lg:hover:bg-transparent hover:text-white lg:p-0 hover:scale-105 ease-in-out duration-150  "
        >
          Press
        </Link>
      </li>
      <li className="hidden">
        <Link
          href="#"
          className="block py-2 pr-4 pl-3 text-white  hover:bg-gray-50 lg:hover:bg-transparent hover:text-white lg:p-0 hover:scale-105 ease-in-out duration-150 "
        >
          FAQs
        </Link>
      </li>
      <li>
        <ContactButton />
      </li>
    </>
  ); 
};
