import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import imagesrow from "../../public/images/trustpilot.png";
import Image from "next/image";
import Offer from "../../public/images/offer.png";

const HeroLeft = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+447301611578"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className="w-full md:justify-start md:items-start justify-center items-center relative flex flex-col z-10">
      <div className="w-full md:-mt-[25rem] -mt-10 -mb-10 flex flex-row items-center justify-center">
        <Image
          src={Offer}
          alt="special offer"
          className="md:w-[25rem] w-[15rem] transform rotate-[5.5deg]"
        />
      </div>
      <div
        onClick={handleCall}
        className="w-max cursor-pointer hidden md:flex hover:opacity-80 transition-all flex-row bg-blue-900 items-center justify-center gap-3 rounded-full shadow-lg md:py-3 py-2 px-3 md:px-6"
      >
        <FaPhoneAlt className="text-base md:text-xl text-white" />{" "}
        <p className="text-2xl text-white">07301 611 578</p>
      </div>
      <div className="flex-row w-max md:-mt-20 flex md:hidden justify-center items-center">
        <div
          onClick={handleCall}
          className="px-4 py-3 bg-blue-900 flex-row gap-2 text-xl cursor-pointer flex rounded-l font-medium hover:opacity-80 transition-all"
        >
          <FaPhoneVolume className="text-white mt-1" />
          <p className="text-white">CALL US ON </p>
        </div>
        <div
          onClick={handleCall}
          className="px-4 py-3 bg-red-700 flex-row gap-2 text-xl cursor-pointer flex rounded-r font-medium hover:opacity-80 transition-all"
        >
          <p className="text-white">07301 611 578</p>
        </div>
      </div>
      <div>
        <p className="text-3xl md:text-5xl md:leading-[3.5rem] mt-2 text-center md:text-left text-white font-semibold">
          Fast & Efficient London Based Motorcycle Couriers
        </p>
      </div>
      <div className="flex items-center flex-col md:flex-row md:gap-6">
        <div className="flex gap-1 justify-center items-center flex-col">
          <img
            src={imagesrow.src}
            className="w-auto cursor-pointer object-cover h-[5rem] md:h-[5.5rem] hover:opacity-80 transition-all"
          />
          <div className="flex gap-1 -mt-5 pb-3 flex-row">
            <MdStarRate className="text-green-400 text-2xl" />{" "}
            <MdStarRate className="text-green-400 text-2xl" />{" "}
            <MdStarRate className="text-green-400 text-2xl" />{" "}
            <MdStarRate className="text-green-400 text-2xl" />{" "}
            <MdStarRate className="text-green-400 text-2xl" />{" "}
          </div>
        </div>
        <div className="flex flex-row gap-4 md:mt-2">
          <p className="text-white font-light text-sm md:text-lg">
            5.0 star rating
          </p>
          <p className="text-white font-light text-sm md:text-lg">
            50+ reviews
          </p>
        </div>
      </div>
      {/* <div className="flex-row gap-2 md:flex hidden bg-white w-1/2 mt-6 items-center justify-center">
        <img src={imagesrow.src} className="py-4" />
      </div> */}
    </div>
  );
};

export default HeroLeft;
