import AuthButton from "../assets/authButton/AuthButton";

export default function Auth() {
  return (
    <div className="font-bold">
      <div className="pl-7 text-[#1e1e2d] text-[24px] ">Выберите действие</div>
      <div className="flex flex-col gap-5  justify-center items-center mt-20  text-white text-[14px]">
        <AuthButton
          name="Login"
          bgcolor="[background:linear-gradient(180deg,rgb(255,197,67)_0%,rgb(255,131.79,18.06)_100%)]"
        />
        <AuthButton
          name="Registration"
          bgcolor="[background:linear-gradient(180deg,rgb(104,109,224)_0%,rgb(72,52,212)_100%)]"
        />
      </div>
    </div>
  );
}
