import MenuCard from "../../components/MenuCard";
import MenuBtn from "../../components/MenuBtn";
import useMenu from "../../hooks/MenuHooks";


const PopularMenuSection = () => {
  const [menus]=useMenu()
  const popularMenu=menus.filter((menu)=>menu.category==="popular" )
  console.log("the popular menu",popularMenu);
  const handleClick=()=>{
    console.log("hi");
  }
  
  return (
    <>
      <div className="max-width-container my-10">
        <div className="grid grid-cols-2 gap-10">
          {popularMenu.map((item) => (
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

export default PopularMenuSection;
