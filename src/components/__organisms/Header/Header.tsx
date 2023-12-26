"use client";
import PrimaryButton from "@/components/__atoms/PrimaryButton/PrimaryButton";
import Image from "next/image";
import React, { useState } from "react";
import RedberryLogo from "../../../../public/images/RedberryLogo.png";
import Link from "next/link";
import PrimaryAnchor from "@/components/__atoms/PrimaryAnchor/PrimaryAnchor";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface HeaderProps {
  handleModal?: (isActive: boolean) => void;
  isButtonActive: boolean;
}

const Header = ({ handleModal, isButtonActive }: HeaderProps) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

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
      {isButtonActive && !isAuth && (
        <PrimaryButton
          onclick={() => handleModal?.(true)}
          styles={"w-[93px] h-[40px]"}
          text={"შესვლა"}
          disabled={false}
        />
      )}
      {isButtonActive && isAuth && (
        <PrimaryAnchor
          text="დაამატე ბლოგი"
          path="/create-blog"
          styles="w-[153px] h-[40px] justify-center"
        />
      )}
    </header>
  );
};

export default Header;
