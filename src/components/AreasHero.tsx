import React from "react";

const AreasHero = () => {
  return (
    <div className="w-full flex items-center px-6 md:px-20 bg-blue-900 py-10 md:py-20 justify-center gap-3 md:gap-6 flex-col">
      <h1 className="text-white text-2xl md:text-4xl font-semibold text-center">
        Areas we cover
      </h1>
      <p className="text-white text-center font-extralight text-base md:text-lg md:px-40">
        West London, Ealing, Hammersmith, Acton, Chiswick, Brentford, Richmond,
        Fulham, Shepherd&apos;s Bush, Notting Hill, Kensington, West Ealing,
        Hanwell, Northolt, Southall, Greenford
      </p>
      <p className="text-white font-semibold text-sm text-center md:text-left md:text-lg">
        Can&apos;t see your area? Contact us today to see how we can help you!
      </p>
    </div>
  );
};

export default AreasHero;
