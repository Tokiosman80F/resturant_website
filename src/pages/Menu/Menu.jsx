import { Helmet } from "react-helmet-async";
import MenuCover from "../../components/MenuCover";
import menuebannerimage from "../../assets/menu/banner3.jpg";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import dessertCoverImage from "../../assets/menu/dessert-bg.jpeg";
import pizzaCoverImage from "../../assets/menu/pizza-bg.jpg";
import soupCoverImage from "../../assets/menu/soup-bg.jpg";
import saladCoverImage from "../../assets/menu/salad-bg.jpg";
import useMenu from "../../hooks/MenuHooks";
import MenuBtn from "../../components/MenuBtn";
import MenuCard from "../../components/MenuCard";
const Menu = () => {
  const [menus]=useMenu()
  const offeredItems=menus.filter(menu=>menu.category==="offered")
  const dessertItems=menus.filter(menu=>menu.category==="dessert")
  const saladItems=menus.filter(menu=>menu.category==="salad")
  const soupItems=menus.filter(menu=>menu.category==="soup")
  const pizzaItems=menus.filter(menu=>menu.category==="soup")
  
  const handleOrderFood=()=>{
    console.log("handle food");
  }
  
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
      {/* offered */}
      <div className="max-width-container my-10">
        <div className="grid grid-cols-2 gap-10">
          {offeredItems.map((item) => (
            <MenuCard key={item._id} menu={item}></MenuCard>
          ))}
        </div>
        <div className="text-center mt-16">
          <MenuBtn onClick={handleOrderFood} naming="Order Your favorite Food"></MenuBtn>
        </div>
      </div>
      {/* dessert */}
      <MenuCover
        image={dessertCoverImage}
        title="Dessert"
        info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCover>
      <div className="max-width-container my-10">
        <div className="grid grid-cols-2 gap-10">
          {dessertItems.map((item) => (
            <MenuCard key={item._id} menu={item}></MenuCard>
          ))}
        </div>
        <div className="text-center mt-16">
          <MenuBtn onClick={handleOrderFood} naming="Order Your favorite Food"></MenuBtn>
        </div>
      </div>
      {/* pizza */}
      <MenuCover
        image={pizzaCoverImage}
        title="pizza"
        info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCover>
      <div className="max-width-container my-10">
        <div className="grid grid-cols-2 gap-10">
          {pizzaItems.map((item) => (
            <MenuCard key={item._id} menu={item}></MenuCard>
          ))}
        </div>
        <div className="text-center mt-16">
          <MenuBtn onClick={handleOrderFood} naming="Order Your favorite Food"></MenuBtn>
        </div>
      </div>
      {/* salad */}
      <MenuCover
        image={saladCoverImage}
        title="salad"
        info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCover>
      <div className="max-width-container my-10">
        <div className="grid grid-cols-2 gap-10">
          {saladItems.map((item) => (
            <MenuCard key={item._id} menu={item}></MenuCard>
          ))}
        </div>
        <div className="text-center mt-16">
          <MenuBtn onClick={handleOrderFood} naming="Order Your favorite Food"></MenuBtn>
        </div>
      </div>
      {/* soup */}
      <MenuCover
        image={soupCoverImage}
        title="soup"
        info="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCover>
      <div className="max-width-container my-10">
        <div className="grid grid-cols-2 gap-10">
          {soupItems.map((item) => (
            <MenuCard key={item._id} menu={item}></MenuCard>
          ))}
        </div>
        <div className="text-center mt-16">
          <MenuBtn onClick={handleOrderFood} naming="Order Your favorite Food"></MenuBtn>
        </div>
      </div>
    </>
  );
};

export default Menu;
