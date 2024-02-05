const MenuCard = ({ menu }) => {
  return (
    <div className="flex gap-4  justify-between">
      {/* img */}

      <img
        src={menu.image}
        alt=""
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[118px] h-[104px]"
      />

      {/* detail */}
      <div>
        <p className="logo text-xl">{menu.name}</p>
        <p className="text-gray-500">{menu.recipe}</p>
      </div>
      {/* price */}
      <div className="text-[#BB8506] text-xl">${menu.price}</div>
    </div>
  );
};

export default MenuCard;
