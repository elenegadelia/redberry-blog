"use client";
import CreateBlogForm from "@/components/__molecules/CreateBlogForm/CreateBlogForm";
import SuccessModal from "@/components/__molecules/SuccessModal/SuccessModal";
import Header from "@/components/__organisms/Header/Header";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

const CreateBlog = () => {
  const router = useRouter();
  const [isModalActive, setIsModalActive] = useState(false);
  const auth = useSelector((state: RootState) => state.auth.isAuth);

  const returnToHomePage = () => {
    router.replace("/");
  };
  useLayoutEffect(() => {
    if (!auth) {
      return redirect("/");
    }
  }, []);
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
