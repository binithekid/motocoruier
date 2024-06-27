import React from "react";
import logo from "../../public/images/navbarlogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";

const NavBar = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+447301611578"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };
  return (
    <main className="w-full flex-col md:flex-row py-2 shadow relative px-4 sm:px-10 md:px-20 lg:px-30 bg-white flex justify-between items-center">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          className="w-auto cursor-pointer object-cover h-[4rem] md:h-[5rem] hover:opacity-80 transition-all"
        />
      </Link>
      <div className="flex flex-row md:mt-4  justify-center items-center">
        <div
          onClick={handleCall}
          className="px-4 py-3 bg-blue-900 flex-row gap-2 text-base cursor-pointer hidden md:flex rounded-l font-medium hover:bg-blue-800 transition-all"
        >
          <FaPhoneVolume className="text-white mt-1" />
          <p className="text-white">CALL US ON</p>
        </div>
        <div
          onClick={handleCall}
          className="px-4 py-3 bg-red-700 flex-row gap-2 text-base cursor-pointer hidden md:flex rounded-r font-medium hover:bg-red-600 transition-all"
        >
          <p className="text-white">07301 611 578</p>
        </div>
      </div>
    </main>
  );
};

export default NavBar;
