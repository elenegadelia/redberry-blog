"use client";
import PrimaryButton from "@/components/__atoms/PrimaryButton/PrimaryButton";
import Image from "next/image";
import React, { useState } from "react";
import RedberryLogo from "../../../../public/images/RedberryLogo.png";
import Link from "next/link";

interface HeaderProps {
  handleModal?: (isActive: boolean) => void;
  isButtonActive: boolean;
}

const Header = ({ handleModal, isButtonActive }: HeaderProps) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <header
      className={`mx-auto flex  items-center bg-white py-5 px-[76px] ${
        !isButtonActive ? "justify-center" : "justify-between"
      }`}
    >
      <div>
        <Link href={"/"}>
          <Image
            width={150}
            height={24}
            src={RedberryLogo}
            alt="redberry logo"
          />
        </Link>
      </div>
      {isButtonActive && (
        <PrimaryButton
          onclick={handleModal}
          styles={!isAuth ? "w-[93px] h-[40px]" : "w-[153px] h-[40px]"}
          text={!isAuth ? "შესვლა" : "დაამატე ბლოგი"}
          disabled={false}
        />
      )}
    </header>
  );
};

export default Header;
