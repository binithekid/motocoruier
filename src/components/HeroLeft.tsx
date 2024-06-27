import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import imagesrow from "../../public/images/trustpilot.png";
import Link from "next/link";

const HeroLeft = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+447301611578"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className="w-full mt-20 md:mt-0 md:justify-start md:items-start justify-center items-center relative flex flex-col z-10">
      <div
        onClick={handleCall}
        className="w-max cursor-pointer hidden md:flex hover:bg-blue-800 transition-all flex-row bg-blue-900 items-center justify-center gap-3 rounded shadow-lg py-2 px-3 md:px-6"
      >
        <FaPhoneAlt className="text-base md:text-xl text-white" />{" "}
        <p className="text-xl text-white">07301 611 578</p>
      </div>
      <div className="flex-row w-max md:-mt-20 flex md:hidden justify-center items-center">
        <div
          onClick={handleCall}
          className="px-4 py-3 bg-blue-900 flex-row gap-2 text-base cursor-pointer flex rounded-l font-medium transition-all"
        >
          <FaPhoneAlt className="text-white mt-1" />
          <p className="text-white">CALL US ON </p>
        </div>
        <div
          onClick={handleCall}
          className="px-4 py-3 bg-red-700 flex-row gap-2 text-base cursor-pointer flex rounded-r font-medium transition-all"
        >
          <p className="text-white">07301 611 578</p>
        </div>
      </div>
      <div>
        <p className="text-3xl md:text-5xl md:leading-[3.5rem] mt-8 md:mt-2 text-center md:text-left text-white font-semibold">
          Fast & Efficient London Based Motorcycle Couriers
        </p>
      </div>
      <div className="flex items-center flex-col md:flex-row md:gap-6">
        <div className="flex gap-1 justify-center items-center flex-col">
          <Link href="https://uk.trustpilot.com/review/motorcyclecourierlondon.com">
            <img
              src={imagesrow.src}
              className="w-auto cursor-pointer object-cover h-[5rem] md:h-[5.5rem] hover:opacity-80 transition-all"
            />
          </Link>
          {/* <div className="flex gap-1 -mt-5 pb-3 flex-row">
            <MdStarRate className="text-green-400" />{" "}
            <MdStarRate className="text-green-400" />{" "}
            <MdStarRate className="text-green-400" />{" "}
            <MdStarRate className="text-green-400" />{" "}
            <MdStarRate className="text-green-400" />{" "}
          </div> */}
        </div>
        <div className="flex flex-row gap-4 -mt-2 md:mt-3">
          <p className="text-white text-base md:text-lg">5.0 star rating</p>
          <p className="text-white text-base md:text-lg">50+ reviews</p>
        </div>
      </div>
      {/* <div className="flex-row gap-2 md:flex hidden bg-white w-1/2 mt-6 items-center justify-center">
        <img src={imagesrow.src} className="py-4" />
      </div> */}
    </div>
  );
};

export default HeroLeft;
