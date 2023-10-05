import React from "react";

const AvatarButton = ({ name, bgcolor }) => {
  return (
    <button
      className={` flex justify-center items-center  shadow-[0px_4px_8px_#42287c40] ${bgcolor} w-[345px]  h-[65px] rounded-[50px] `}
    >
      <div className="flex ">
        <div></div>
        <div>{name}</div>
      </div>
    </button>
  );
};

export default AvatarButton;
