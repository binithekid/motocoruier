import React from "react";
import symbolOne from "../../public/images/symbols/symbol1.png";
import symbolTwo from "../../public/images/symbols/symbol2.png";
import symbolThree from "../../public/images/symbols/symbol3.png";
import symbolFour from "../../public/images/symbols/symbol4.png";
import symbolFive from "../../public/images/symbols/symbol5.png";
import symbolSix from "../../public/images/symbols/symbol6.png";
import symbolSeven from "../../public/images/symbols/symbol7.png";
import symbolEight from "../../public/images/symbols/symbol8.png";
import symbolNine from "../../public/images/symbols/symbol9.png";
import symbolTen from "../../public/images/symbols/symbol10.png";
import symbolEleven from "../../public/images/symbols/symbol11.png";
import symbolTwelve from "../../public/images/symbols/symbol12.png";

const ServicesHero = () => {
  return (
    <div className="px-6 md:px-20 w-full bg-gray-200 flex flex-col py-20">
      <div className="flex w-full items-center justify-center">
        <h1 className="text-2xl md:text-4xl md:pb-4 text-center font-light text-gray-800">
          Our <span className="font-bold">emergency plumbing</span> services
        </h1>
      </div>
      <p className="text-gray-800 font-light pt-6 text-sm md:py-1 text-center">
        Our plumbing services are designed to cater to all your needs. Whether
        you’re looking for regular plumbing maintenance or find yourself in a
        crisis, our skilled technicians have you covered. When you require an
        Emergency Plumber in London, you can count on us, with our 24/7
        availability we’re here to provide swift and reliable assistance.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-6 justify-center">
        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <img src={symbolOne.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-center font-light">
            Burst pipe repairs
          </p>
        </div>
        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <img src={symbolTwo.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-center font-light">
            Water leak detection and repair
          </p>
        </div>
        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <img src={symbolThree.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-center font-light">
            Clogged drain and sewer line clearing
          </p>
        </div>
        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <img src={symbolFour.src} alt="Retail Jobs London" />
          <p className="text-gray-800 text-center font-light">
            Boiler repair and replacement
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <img src={symbolFive.src} alt="Retail Jobs London" />
          <p className="text-gray-800 font-light text-center">
            Gas Safe Registered team of experts
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <img src={symbolSix.src} alt="Retail Jobs London" />
          <p className="text-gray-800 font-light text-center">
            Rated and reviewed on Checkatrade
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <img src={symbolSeven.src} alt="Retail Jobs London" />
          <p className="text-gray-800 font-light text-center">
            Fast & local plumbing repair experts
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <img src={symbolEight.src} alt="Retail Jobs London" />
          <p className="text-gray-800 font-light text-center">
            12 month guarantee on all repair work
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <img src={symbolNine.src} alt="Retail Jobs London" />
          <p className="text-gray-800 font-light text-center">
            5 star rated for service
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <img src={symbolTen.src} alt="Retail Jobs London" />
          <p className="text-gray-800 font-light text-center">
            All plumbing work covered
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <img src={symbolEleven.src} alt="Retail Jobs London" />
          <p className="text-gray-800 font-light text-center">
            No job too big nor too small
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <img src={symbolTwelve.src} alt="Retail Jobs London" />
          <p className="text-gray-800 font-light text-center">
            No congestion or ULEZ fee!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
