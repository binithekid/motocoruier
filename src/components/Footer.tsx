import React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full px-20 py-4 items-center justify-between hidden md:flex flex-row gap-4">
        <Link href="/">
          <Image
            src={logo}
            alt="Retail Jobs London"
            className="w-auto cursor-pointer h-24 hover:opacity-80 transition-all"
          />
        </Link>
        <div className="flex items-center mt-8 flex-row gap-6">
          <div className="flex gap-1 flex-row">
            <FaStar className="text-yellow-300 text-2xl" />{" "}
            <FaStar className="text-yellow-300 text-2xl" />{" "}
            <FaStar className="text-yellow-300 text-2xl" />{" "}
            <FaStar className="text-yellow-300 text-2xl" />{" "}
            <FaStar className="text-yellow-300 text-2xl" />{" "}
          </div>
          <div className="flex flex-row gap-4 mt-1">
            <p className="font-light">5.0 star rating</p>
          </div>
        </div>

        <div className="flex flex-col ">
          <h1 className="text-blue-900 font-semibold text-3xl text-right">
            07301 611 578
          </h1>
          <p className="font-light">Call now for a no-nonsense quote!</p>
        </div>
      </div>
      <div className="w-full flex flex-row gap-3 justify-center items-center py-3 text-center bg-gray-200">
        <p className="text-sm text-gray-500">
          2024 Ⓒ Motorcycle Couriers London
        </p>
      </div>
    </div>
  );
};

export default Footer;
