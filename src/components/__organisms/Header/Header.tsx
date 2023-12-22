import PrimaryButton from "@/components/__atoms/PrimaryButton/PrimaryButton";
import Image from "next/image";
import React, { useState } from "react";
import RedberryLogo from "../../../../public/images/RedberryLogo.png";

interface HeaderProps {
  handleModal?: (isActive: boolean) => void;
}

const Header = ({ handleModal }: HeaderProps) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <header className="mx-auto flex justify-between items-center bg-white py-5 px-[76px]">
      <div>
        <Image src={RedberryLogo} alt="redberry logo" />
      </div>
      <PrimaryButton
        onclick={handleModal}
        styles={!isAuth ? "w-[93px] h-[40px]" : "w-[153px] h-[40px]"}
        text={!isAuth ? "შესვლა" : "დაამატე ბლოგი"}
        disabled={false}
      />
    </header>
  );
};

export default Header;
