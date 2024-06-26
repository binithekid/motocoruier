import React from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ReviewHero = () => {
  return (
    <div className="relative h-[20rem] flex items-center justify-center">
      <div className="absolute flex-col inset-0 flex">
        <div className="h-[10rem] w-full bg-gray-200"></div>
        <div className="w-full h-[10rem] bg-blue-300"></div>
      </div>
      <div className="relative z-10 flex w-full mx-30">
        <div className="w-1/2 mx-10 bg-white p-8 rounded shadow-lg">
          <p className="font-light text-gray-800">
            TMG Plumbing and Heating transformed my ancient and ugly bathroom
            into an absolute sanctuary. The service and attention to detail were
            exceptional. Thank you!
          </p>
          <hr className="my-4" />
          <div className="flex flex-row items-center justify-between">
            <p className="mt-1 font-semibold text-gray-800">Jane Cleffallen</p>
            <div>
              <div className="flex gap-3 flex-row items-center justify-center">
                <div className="flex gap-1 flex-row">
                  <FaStar className="text-yellow-300 text-xl" />{" "}
                  <FaStar className="text-yellow-300 text-xl" />{" "}
                  <FaStar className="text-yellow-300 text-xl" />{" "}
                  <FaStar className="text-yellow-300 text-xl" />{" "}
                  <FaStar className="text-yellow-300 text-xl" />
                </div>
                <div className="">
                  <FcGoogle className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 mx-10 bg-white p-8 rounded shadow-lg">
          <p className="font-light text-gray-800">
            TMG Plumbing and Heating transformed my ancient and ugly bathroom
            into an absolute sanctuary. The service and attention to detail were
            exceptional. Thank you!
          </p>
          <hr className="my-4" />
          <div className="flex flex-row items-center justify-between">
            <p className="mt-1 font-semibold text-gray-800">Patience Atondu</p>
            <div>
              <div className="flex gap-3 flex-row items-center justify-center">
                <div className="flex gap-1 flex-row">
                  <FaStar className="text-yellow-300 text-xl" />{" "}
                  <FaStar className="text-yellow-300 text-xl" />{" "}
                  <FaStar className="text-yellow-300 text-xl" />{" "}
                  <FaStar className="text-yellow-300 text-xl" />{" "}
                  <FaStar className="text-yellow-300 text-xl" />
                </div>
                <div className="">
                  <FcGoogle className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewHero;
