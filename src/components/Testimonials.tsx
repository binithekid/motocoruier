import Logo from "../../public/images/trustpilotblack.png";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import Link from "next/link";
import { MdStarRate } from "react-icons/md";

const Testimonials = () => {
  return (
    <div className="w-full flex px-4 md:px-14 py-20 flex-col bg-gradient-to-br from-white via-slate-50 bg-teal-50">
      <div className="w-full items-center hidden md:flex flex-row justify-center">
        <h1 className="font-display font-bold text-2xl tracking-normal sm:text-4xl text-gray-800">
          Our Testimonials with
        </h1>
        <Link href="https://uk.trustpilot.com/review/motorcyclecourierlondon.com">
          <Image
            src={Logo}
            alt="Checkatrade"
            className="w-[13rem] -ml-1 -mt-1 object-cover hover:opacity-70 transition-all cursor-pointer"
          />
        </Link>
      </div>
      <div className="w-full items-center md:hidden flex flex-col justify-center">
        <h1 className="font-display font-bold text-2xl tracking-normal text-gray-800">
          Our Testimonials with
        </h1>
        <Image
          src={Logo}
          alt="Checkatrade"
          className="w-[14rem] -ml-2 object-cover hover:opacity-70 transition-all cursor-pointer"
        />
      </div>
      <div className="py-10 flex flex-col md:flex-row gap-3">
        <div className="md:w-1/3 w-full flex flex-col justify-between bg-white shadow rounded p-8">
          <div>
            <FaQuoteLeft className="text-green-600 my-2" />
            <p className="text-sm text-gray-600">
              Fast and reliable service! My package arrived on time and in
              perfect condition. The tracking updates were accurate and kept me
              informed every step of the way. Highly recommend!
            </p>
          </div>

          <div className="w-full mt-8 flex items-center justify-between">
            <p className="font-semibold">Robert Maxwell</p>
            <div className="flex mt-2 flex-row">
              <MdStarRate className="text-green-400" />{" "}
              <MdStarRate className="text-green-400" />{" "}
              <MdStarRate className="text-green-400" />{" "}
              <MdStarRate className="text-green-400" />{" "}
              <MdStarRate className="text-green-400" />{" "}
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-between bg-white shadow rounded p-8">
          <div>
            <FaQuoteLeft className="text-green-600 my-2" />
            <p className="text-sm text-gray-600">
              Excellent customer support and prompt delivery. The staff was
              friendly and answered all my questions. The entire process was
              smooth and hassle-free. Best courier service I&apos;ve ever used!
            </p>
          </div>

          <div className="w-full mt-8 flex items-center justify-between">
            <p className="font-semibold">Maria Robinson</p>
            <div className="flex -mt-1 flex-row">
              <MdStarRate className="text-green-400" />{" "}
              <MdStarRate className="text-green-400" />{" "}
              <MdStarRate className="text-green-400" />{" "}
              <MdStarRate className="text-green-400" />{" "}
              <MdStarRate className="text-green-400" />{" "}
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-between shadow bg-white rounded p-8">
          <div>
            <FaQuoteLeft className="text-green-600 my-2" />
            <p className="text-sm text-gray-600">
              Affordable rates and speedy delivery. My package was handled with
              care and arrived sooner than expected. Truly impressed with the
              professionalism and efficiency of this service!
            </p>
          </div>

          <div className="w-full mt-4 flex items-center justify-between">
            <p className="font-semibold">Kristina Bellis</p>
            <div className="flex -mt-1 flex-row">
              <MdStarRate className="text-green-400" />{" "}
              <MdStarRate className="text-green-400" />{" "}
              <MdStarRate className="text-green-400" />{" "}
              <MdStarRate className="text-green-400" />{" "}
              <MdStarRate className="text-green-400" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
