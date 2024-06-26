import React from "react";
import iconOne from "../../public/images/icons/icon1.png";
import iconTwo from "../../public/images/icons/icon2.png";
import iconThree from "../../public/images/icons/icon3.png";
import iconFour from "../../public/images/icons/icon4.png";

import iconFive from "../../public/images/icons/icon5.png";
import iconSix from "../../public/images/icons/icon6.png";
import iconSeven from "../../public/images/icons/icon7.png";
import iconEight from "../../public/images/icons/icon8.png";

import iconNine from "../../public/images/icons/icon9.png";
import iconTen from "../../public/images/icons/icon10.png";
import iconEleven from "../../public/images/icons/icon11.png";
import iconTwelve from "../../public/images/icons/icon12.png";

const MidHero = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+447301611578"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };
  return (
    <div className="px-6 md:px-20 pt-4 md:pt-20 pb-14">
      <p className="text-gray-800 font-light pt-6 text-sm md:py-1 text-center">
        Our professional and experienced team of plumbers can handle any
        emergency plumbing situation. With years of experience in the industry,
        you can be sure that you are getting the highest quality service and the
        best results possible.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-14 justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconOne.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-sm md:text-base font-light">
            30 minute response time
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconTwo.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-sm md:text-base font-light">
            No hidden fees
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconThree.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-sm md:text-base font-light">
            Same day repairs
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconFour.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-sm md:text-base font-light">
            24/7 Emergency calls out
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconFive.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-sm md:text-base font-light text-center">
            Gas Safe Registered team of experts
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconSix.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-sm md:text-base font-light text-center">
            Rated and reviewed on Checkatrade
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconSeven.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-sm md:text-base font-light text-center">
            Fast & local plumbing repair experts
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconEight.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-sm md:text-base font-light text-center">
            12 month guarantee on all repair work
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconNine.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-sm md:text-base font-light text-center">
            5 star rated for service
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconTen.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-sm md:text-base font-light text-center">
            All plumbing work covered
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconEleven.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-sm md:text-base font-light text-center">
            No job too big nor too small
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconTwelve.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-sm md:text-base font-light text-center">
            No congestion or ULEZ fee!
          </p>
        </div>
      </div>
      {/* <div className="w-full flex items-center justify-center pt-10">
        <button
          onClick={handleCall}
          className="mt-6 bg-blue-900 py-3 w-max px-6 text-white font-semibold rounded hover:opacity-80 transition-all"
        >
          GET A FREE QUOTE
        </button>
      </div> */}
    </div>
  );
};

export default MidHero;
