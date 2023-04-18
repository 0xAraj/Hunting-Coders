import BlogCard from "@/components/BlogCard";
import React from "react";

const blog = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-bold my-7">Our Blogs</h2>
      <BlogCard />
      <BlogCard />
    </>
  );
};

export default blog;
