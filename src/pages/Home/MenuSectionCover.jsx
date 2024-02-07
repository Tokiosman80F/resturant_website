import SectionTitle from "../shared/SectionTitle/SectionTitle";
import feature from "../../assets/home/featured.jpg";
import './MenuSectionCover.css'
const MenuSectionCover = () => {
  return (

    <div className="menu_coverImage bg-fixed py-20 my-10" >
      <div className="max-width-container text-white bg-black/80 p-10">
        <SectionTitle subTitle="check it out" mainTitle="from our menu" />
        <div className="flex items-center gap-10">
          {/* image */}
          <img src={feature} alt="" className="w-1/2" />
          {/* content */}
          <div className="w-1/2">
            <p className="text-2xl">March 20, 2023</p>{" "}
            <p className="text-xl">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSectionCover;
