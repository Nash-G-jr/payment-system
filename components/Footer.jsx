const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-row justify-between w-full">
        <img
          className=" w-[26px] h-[24px]"
          src="https://c.animaapp.com/1eJthQsW/img/vector-4.svg"
        />
        <img
          className="w-[21px] h-[17px]"
          src="https://c.animaapp.com/1eJthQsW/img/vector-5.svg"
        />
        <img
          className="w-[19px] h-[14px]"
          src="https://c.animaapp.com/1eJthQsW/img/vector-6.svg"
        />
        <img
          className="w-[22px] h-[20px]"
          src="https://c.animaapp.com/1eJthQsW/img/vector-7.svg"
        />
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="text-[#4835d4] [font-family:'Montserrat',Helvetica] font-medium text-[12px] text-left tracking-[0] leading-[normal] [direction:rtl]">
          Home
        </div>
        <div className="text-[#1e1e2d80] [font-family:'Montserrat',Helvetica] font-medium text-[12px] text-left tracking-[0] leading-[normal] [direction:rtl]">
          Сard
        </div>
        <div className="text-[#1e1e2d80] [font-family:'Montserrat',Helvetica] font-medium text-[12px] text-left tracking-[0] leading-[normal] [direction:rtl]">
          Transfer
        </div>
        <div className=" text-[#1e1e2d80] [font-family:'Montserrat',Helvetica] font-medium  text-[12px] text-left tracking-[0] leading-[normal] [direction:rtl]">
          Wallet
        </div>
      </div>
    </footer>
  );
};

export { Footer };
