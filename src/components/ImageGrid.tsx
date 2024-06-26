import React from "react";
import imageOne from "../../public/images/imagegrid/ImageOne.jpg";
import imageTwo from "../../public/images/imagegrid/ImageTwo.jpg";
import imageThree from "../../public/images/imagegrid/ImageThree.jpg";

const ImageGrid = () => {
  return (
    <div className="flex w-full fle-wrap items-center py-20 justify-center gap-10">
      <img
        src={imageOne.src}
        className="w-[22rem] h-[15rem] object-cover"
        alt="Image One"
      />
      <img
        src={imageTwo.src}
        className="w-[22rem] h-[15rem] object-cover"
        alt="Image Two"
      />
      <img
        src={imageThree.src}
        className="w-[22rem] h-[15rem] object-cover"
        alt="Image Three"
      />
    </div>
  );
};

export default ImageGrid;
