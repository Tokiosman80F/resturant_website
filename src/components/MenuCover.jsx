import React from "react";

const MenuCover = ({
  image,
  title,
  subtitle,
  info,
  isToogle = "true",
  isCoverBanner = "true",
}) => {
  return (
    <figure className="relative">
      <img
        src={image}
        alt=""
        className={`object-cover ${isCoverBanner ? `h-screen w-full ` : ` `} `}
      />
      <div className="absolute max-width-container inset-0 flex items-center justify-center   ">
        <div
          className={`h-[330px] w-full text-center ${
            isToogle ? `bg-black/70 text-white` : `bg-white text-black`
          }   flex flex-col items-center justify-center`}
        >
          <h1 className="logo text-[45px]">{title}</h1>
          <h2 className="logo__semibold  ">{subtitle}</h2>
          <p className="w-2/3 text-xl">{info}</p>
        </div>
      </div>
    </figure>
  );
};

export default MenuCover;
