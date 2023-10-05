import React from "react";

const IconButton = ({ srcUrl, name }) => {
  return (
    <button className="flex flex-col justify-center items-center">
      <img className=" w-[22px] h-[20px]" src={srcUrl}></img>
      <div>{name}</div>
    </button>
  );
};

export default IconButton;
