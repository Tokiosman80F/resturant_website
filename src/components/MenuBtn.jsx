import React from "react";

const MenuBtn = ({onClick,naming}) => {
  return (
    <>
      <button onClick={onClick} className="border-black border-b-4 rounded-lg px-5 py-2 uppercase bg-slate-100  hover:bg-yellow-400">
        {naming}
      </button>
    </>
  );
};

export default MenuBtn;
