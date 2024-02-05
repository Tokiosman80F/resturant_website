import { useEffect, useState } from "react";
import MenuCard from "../../components/MenuCard";
import MenuBtn from "../../components/MenuBtn";


const MenuSection = () => {
  const [menu, setMenu] = useState([]);    
  const handleClick=()=>{
    console.log("hi");
  }

  useEffect(() => {
    fetch(`http://localhost:3000/allMenu`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Menu Data Fail to fetch From Menu Section");
        }
        return response.json();
      })
      .then((data) => {
        const popularItems = data.filter(
          (items) => items.category === "popular"
        );
        console.log("popular item =>", popularItems);
        setMenu(popularItems);
      })
      .catch((error) => {
        console.error("Error fetch in menu Data of Menu Section ", error);
      });
  }, []);
  return (
    <>
      <div className="max-width-container my-10">
        <div className="grid grid-cols-2 gap-10">
          {menu.map((item) => (
            <MenuCard key={item._id} menu={item}></MenuCard>
          ))}
        </div>
        <div className="text-center mt-16">
          <MenuBtn onClick={handleClick} naming="view all menu"></MenuBtn>
        </div>
      </div>
    </>
  );
};

export default MenuSection;
