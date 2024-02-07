import { useEffect, useState } from "react";
import VertcalMenuCard from "../../components/VertcalMenuCard";

const ChefRecommanded = () => {
  const [menu, setMenu] = useState([]);
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
    <div className="max-width-container">
    
      <div className="flex justify-between">
      {menu.slice(0,3).map((item)=><VertcalMenuCard key={item._id} data={item}></VertcalMenuCard>)}
      </div>
    </div>
  );
};

export default ChefRecommanded;
