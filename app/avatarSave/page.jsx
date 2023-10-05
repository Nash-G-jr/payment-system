import React from "react";
import AvatarButton from "../assets/authButton/AvatarButton";

import aizenImage from "../assets/images/Aizen.jpg";

const AvatarSave = () => {
  return (
    <div className="font-bold">
      <p className="pl-7 text-[#1e1e2d] text-[24px] ">Фото для аватарки</p>

      <div className="flex flex-col justify-center items-center mt-[20px] text-[14px] gap-5">
        <div className="flex justify-center items-center w-[355px] h-[178px] bg-[#f3f5f5] rounded-[12px]">
          <div>Картинка Епта</div>
        </div>
        <AvatarButton
          name="Сохранить"
          bgcolor="[background:linear-gradient(180deg,rgb(104,109,224)_0%,rgb(72,52,212)_100%)]"
        />
        <AvatarButton
          name="Отменить"
          bgcolor="[background:linear-gradient(180deg,rgb(237,235,251)_0%,rgb(240,240,252)_100%)]"
        />
      </div>
    </div>
  );
};

export default AvatarSave;
