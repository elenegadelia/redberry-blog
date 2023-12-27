"use client";
import CreateBlogForm from "@/components/__molecules/CreateBlogForm/CreateBlogForm";
import SuccessModal from "@/components/__molecules/SuccessModal/SuccessModal";
import Header from "@/components/__organisms/Header/Header";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateBlog = () => {
  const router = useRouter();
  const [isModalActive, setIsModalActive] = useState(false);

  const returnToHomePage = () => {
    router.replace("/");
  };
  return (
    <>
      <Header isButtonActive={false} />
      <CreateBlogForm
        setIsModalActive={(isActive: boolean) => setIsModalActive(isActive)}
      />
      {isModalActive && (
        <SuccessModal
          setIsModalActive={setIsModalActive}
          returnToHomePage={returnToHomePage}
        />
      )}
    </>
  );
};

export default CreateBlog;
