"use client";

import React, { useId, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import Image from "next/image";

function Header() {
  const id = useId();

  const links = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/services" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen((o) => !o);
  }

  return (
    <header className="shadow-md w-full fixed top-0 left-0 ">
      <div className="flex items-center justify-between bg-white h-20 px-7 md:px-10">
        <Image
          className="cursor-pointer"
          src="/logo.png"
          alt="Logo"
          width={150}
          height={36}
        />
        <div
          onClick={toggleIsOpen}
          className="text-3xl absolute right-8 cursor-pointer md:hidden"
        >
          {isOpen ? <IoMdClose color="black" /> : <IoIosMenu color="black" />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-100 ease-in ${
            isOpen ? "top-16" : "top-[-400px]"
          }`}
        >
          {links.map((link, index) => (
            <li key={`${id}-${index}`} className="md:ml-8 md:my-0 my-7">
              <a
                href={link.link.includes("services") ? "#services" : link.link}
                className="text-gray-800 font-semibold text-md hover:text-indigo-400 duration-100"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
