import React from "react";
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoMdPaper } from "react-icons/io";
import { IoWaterOutline } from "react-icons/io5";
import { RiRedPacketLine } from "react-icons/ri";
import { LiaKeySolid } from "react-icons/lia";
import { GoGift } from "react-icons/go";
import { MdSecurity } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { PiDeviceMobileSpeaker } from "react-icons/pi";
import { GoTools } from "react-icons/go";
import { IoShirtOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi";

const ServicesHero = () => {
  return (
    <div className="px-6 md:px-20 w-full bg-gray-200 flex flex-col py-20">
      <div className="flex w-full items-center justify-center">
        <h1 className="text-2xl md:text-4xl md:pb-4 text-center font-light text-gray-800">
          Our <span className="font-bold">courier</span> services
        </h1>
      </div>
      <p className="text-gray-800 font-light pt-6 text-sm md:py-1 text-center">
        London based courier service specialising in Motorcycle deliveries.
        First-class service, extensive coverage, and speedy deliveries.
        Experienced Couriers. On-Time Delivery. Live Updates. Below are examples
        of the types of deliveries we can do.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-6 justify-center">
        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <IoMdPaper className="text-5xl" />
          <p className="text-gray-800 text-center font-light">
            Documents and Legal Papers
          </p>
        </div>
        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <MdOutlineMedicalServices className="text-5xl" />
          <p className="text-gray-800 text-center font-light">
            Medical Supplies and Prescriptions
          </p>
        </div>
        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <IoWaterOutline className="text-5xl" />
          <p className="text-gray-800 text-center font-light">Blood</p>
        </div>
        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <RiRedPacketLine className="text-5xl" />
          <p className="text-gray-800 text-center font-light">
            Small Packages and Parcels
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <LiaKeySolid className="text-5xl" />
          <p className="text-gray-800 font-light text-center">
            Keys and Small Personal Items
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <GoGift className="text-5xl" />
          <p className="text-gray-800 font-light text-center">
            Gifts and Flowers
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <MdSecurity className="text-5xl" />
          <p className="text-gray-800 font-light text-center">
            Confidential and Sensitive Items
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <BsBank className="text-5xl" />
          <p className="text-gray-800 font-light text-center">
            Bank Deposits and Financial Documents
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <PiDeviceMobileSpeaker className="text-5xl" />
          <p className="text-gray-800 font-light text-center">
            Mobile Phones and Small Gadgets
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <GoTools className="text-5xl" />
          <p className="text-gray-800 font-light text-center">
            Spare Parts and Tools{" "}
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <IoShirtOutline className="text-5xl" />
          <p className="text-gray-800 font-light text-center">
            Clothing and Accessories{" "}
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <HiOutlineBookOpen className="text-5xl" />
          <p className="text-gray-800 font-light text-center">
            Library Books and Educational Materials{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
