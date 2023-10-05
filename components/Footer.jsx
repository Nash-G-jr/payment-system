import IconButton from "@/app/assets/iconButton/IconButton";

const Footer = () => {
  return (
    <footer className="absolute w-[100%] h-[80px] left-0 bottom-0">
      <div className="shadow-[0px_-5px_20px_#0000001a] [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgb(229,241,251)_100%)] h-[80px]">
        <div className="pr-6 pl-6 pt-5 pb-3 flex flex-row justify-between w-full items-center">
          <IconButton
            name="Home"
            srcUrl="https://c.animaapp.com/1eJthQsW/img/vector-4.svg"
          />
          <IconButton
            name="Сard"
            srcUrl="https://c.animaapp.com/1eJthQsW/img/vector-5.svg"
          />
          <IconButton
            name="Transfer"
            srcUrl="https://c.animaapp.com/1eJthQsW/img/vector-6.svg"
          />
          <IconButton
            name="Wallet"
            srcUrl="https://c.animaapp.com/1eJthQsW/img/vector-7.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export { Footer };
