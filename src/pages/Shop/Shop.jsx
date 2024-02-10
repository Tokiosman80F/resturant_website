import { Helmet } from "react-helmet-async";
import shopbannerimage from "../../assets/shop/banner2.jpg";
import MenuCover from "../../components/MenuCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ReactTab.css"
import useMenu from "../../hooks/MenuHooks";
import VertcalMenuCard from "../../components/VertcalMenuCard";
import { useState } from "react";
const Shop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log("tab index =>",tabIndex);
  const [menus]=useMenu()
  const drinkItems=menus.filter(menu=>menu.category==="drinks")
  const dessertItems=menus.filter(menu=>menu.category==="dessert")
  const saladItems=menus.filter(menu=>menu.category==="salad")
  const soupItems=menus.filter(menu=>menu.category==="soup")
  const pizzaItems=menus.filter(menu=>menu.category==="soup")

  return (
    <>
      <Helmet>
        <title>Captain Culinay | Our Shop </title>
      </Helmet>
      <MenuCover
        image={shopbannerimage}
        isCoverBanner="true"
        title="OUR shop"
        subtitle="would you like to try a dish"
      ></MenuCover>
      <div className="max-width-container my-20">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-3 gap-5">
            {saladItems.map((item)=><VertcalMenuCard key={item._id} data={item}></VertcalMenuCard>)}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-3 gap-5">
            {pizzaItems.map((item)=><VertcalMenuCard key={item._id} data={item}></VertcalMenuCard>)}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-3 gap-5">
            {soupItems.map((item)=><VertcalMenuCard key={item._id} data={item}></VertcalMenuCard>)}
            </div>
          </TabPanel>


          <TabPanel>
            <div className="grid grid-cols-3 gap-5">
            {dessertItems.map((item)=><VertcalMenuCard key={item._id} data={item}></VertcalMenuCard>)}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-3 gap-5">
            {drinkItems.map((item)=><VertcalMenuCard key={item._id} data={item}></VertcalMenuCard>)}
            </div>
          </TabPanel>

        </Tabs>
      </div>
    </>
  );
};

export default Shop;
