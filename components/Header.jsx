const Header = () => {
  return (
    <header className="flex flex-row justify-between w-full">
      <img
        className="w-[30px] h-[47px]"
        src="https://c.animaapp.com/2iAwgbtI/img/asset-4-4x-1@4x.png"
      />
      <div className="[font-family:'Montserrat',Helvetica] font-bold text-[#4d6ae4] text-[12px] tracking-[0] leading-[normal]">
        СoinsFill
      </div>
      <img
        className="w-[17px] h-[17px]"
        src="https://c.animaapp.com/2iAwgbtI/img/carbon-search.svg"
      />
      <div className="w-[24px] h-[24px] bg-[#d9d9d9] rounded-[12px]"></div>
    </header>
  );
};

export { Header };
