
const MenuCard = ({menu}) => {
    return (
        <div className="flex gap-4 bg-slate-100  justify-between">
            {/* img */}
            <div className="w-[118px] h-[104px]">
            <img src={menu.image} alt=""  />
            </div>
            {/* detail */}
            <div>
                <p className='logo text-xl'>{menu.name}</p>
                <p className='text-gray-500'>{menu.recipe}</p>
            </div>
            {/* price */}
            <div className='text-[#BB8506] text-xl'>${menu.price}</div>
        </div>
    );
};

export default MenuCard;