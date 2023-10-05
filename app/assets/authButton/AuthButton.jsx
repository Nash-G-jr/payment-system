import React from "react";

const AuthButton = ({ name, bgcolor }) => {
  return (
    <button
      className={`p-5 flex justify-center items-center  shadow-[0px_4px_8px_#42287c40] ${bgcolor} w-[345px]  h-[65px] rounded-[50px] `}
    >
      <div>{name}</div>
    </button>
  );
};

export default AuthButton;
