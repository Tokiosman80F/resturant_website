import React from "react";
import coverimg from "../../../assets/home/cover.jpg";
const CoverSection = () => {
  return (
    <div>
    <figure className="relative">
      <img src={coverimg} alt="" className="" />
      <div className="absolute inset-0 flex items-center justify-center px-5 ">
        <div className="h-[330px] text-center bg-white w-2/3 flex flex-col items-center justify-center">
          <h1 className="logo text-[45px]">Captiain Culinay</h1>
          <p className="w-2/3 text-xl" >
            Welcome aboard the savory vessel of Captain Culinary, where every meal sets sail on a journey of taste and satisfaction. As a fast-food restaurant with a nautical theme, we pride ourselves on delivering a culinary experience that's as exciting as a high-seas adventure.
          </p>
        </div>
      </div>
    </figure>
  </div>
  );
};

export default CoverSection;