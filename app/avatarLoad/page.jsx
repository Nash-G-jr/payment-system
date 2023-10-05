import React from "react";
import AvatarButton from "../assets/authButton/AvatarButton";

const AvatarLoad = () => {
  return (
    <div className="font-bold">
      <p className="pl-7 text-[#1e1e2d] text-[24px] ">Загрузка аватара</p>
      <p className=" pl-7 mt-8 w-[252px] h-[34px] font-medium text-[#1e1e2d] text-[14px]">
        Загрузите файл размером до 5Мб По формату: JPG, PNG, GIF
      </p>
      <div className="flex justify-center items-center mt-20  text-white text-[14px]">
        <AvatarButton
          name="Выбрать файл"
          bgcolor="[background:linear-gradient(180deg,rgb(104,109,224)_0%,rgb(72,52,212)_100%)]"
        />
      </div>
    </div>
  );
};

export default AvatarLoad;
