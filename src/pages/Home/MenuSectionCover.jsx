import SectionTitle from "../shared/SectionTitle/SectionTitle";
import feature from "../../assets/home/featured.jpg";
import "./MenuSectionCover.css";
const MenuSectionCover = () => {
  return (
    <div className="menu_coverImage bg-fixed py-20 my-10">
      <div className="max-width-container text-white bg-black/80 p-10">
        <SectionTitle subTitle="check it out" mainTitle="from our menu" />
        <div className="flex items-center gap-10">
          {/* image */}
          <img src={feature} alt="" className="w-1/2" />
          {/* content */}
          <div className="w-1/2 flex flex-col items-start gap-5">
            <p className="text-2xl">March 20, 2023</p>
            <p className="text-xl">WHERE CAN I GET SOME?</p>
            <p>
              This restaurant is a haven of culinary delights, where expertly
              crafted dishes tantalize the taste buds and create unforgettable
              dining experiences. It's a place where friends and family come
              together to share laughter, celebrate milestones, and create
              cherished memories over shared meals.s
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSectionCover;
