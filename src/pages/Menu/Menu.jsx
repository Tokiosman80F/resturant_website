import { Helmet } from "react-helmet-async";
import MenuCover from "../../components/MenuCover";
import menuebannerimage from "../../assets/menu/banner3.jpg";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import dessertCoverImage from "../../assets/menu/dessert-bg.jpeg";
import pizzaCoverImage from "../../assets/menu/pizza-bg.jpg";
import soupCoverImage from "../../assets/menu/soup-bg.jpg";
import saladCoverImage from "../../assets/menu/salad-bg.jpg";
const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Captain Culinay | Our Menu </title>
      </Helmet>
      <MenuCover
        image={menuebannerimage}
        isCoverBanner="true"
        title="OUR MENU"
        subtitle="would you like to try a dish"
      ></MenuCover>
      <SectionTitle
        subTitle="dont miss"
        mainTitle="today's offer"
      ></SectionTitle>
      {/* desser */}
      <MenuCover
        image={dessertCoverImage}
        title="Dessert"
        info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCover>
      {/* pizza */}
      <MenuCover
        image={pizzaCoverImage}
        title="pizza"
        info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCover>
      {/* salad */}
      <MenuCover
        image={saladCoverImage}
        title="salad"
        info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCover>
      {/* soup */}
      <MenuCover
        image={soupCoverImage}
        title="soup"
        info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCover>
    </>
  );
};

export default Menu;
