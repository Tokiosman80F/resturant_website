import { useEffect, useState } from "react";
import MenuCard from "../../components/MenuCard";

const MenuSection = () => {
    const [menu,setMenu]=useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/allMenu`)
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setMenu(data)
      });
  }, []);
  return (
    <div className="max-width-container">
      {menu.map((item)=><MenuCard key={item._id} menu={item}></MenuCard>)}
    </div>
  );
};

export default MenuSection;
