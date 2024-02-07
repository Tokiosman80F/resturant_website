import React from "react";
import coverimg from "../../../assets/home/cover.jpg";
import MenuCover from "../../../components/MenuCover";
const CoverSection = () => {
  return (
    <div className="my-20">
      <MenuCover
        image={coverimg}
        title="Captiain Culinay"
        info="Welcome aboard the savory vessel of Captain Culinary, where every meal sets sail on a journey of taste and satisfaction. As a fast-food restaurant with a nautical theme, we pride ourselves on delivering a culinary experience that's as exciting as a high-seas adventure."
        isToogle={false}
        ></MenuCover>
    </div>
  );
};

export default CoverSection;

/*


*/
