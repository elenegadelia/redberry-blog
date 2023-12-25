import CreateBlogForm from "@/components/__molecules/CreateBlogForm/CreateBlogForm";
import Header from "@/components/__organisms/Header/Header";
import React from "react";

const CreateBlog = () => {
  return (
    <>
      <Header isButtonActive={false} />
      <CreateBlogForm />
    </>
  );
};

export default CreateBlog;
