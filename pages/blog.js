import BlogCard from "@/components/BlogCard";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/blog");
    const data = await res.json();
    setBlog(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2 className="text-center text-3xl font-bold my-7">Our Blogs</h2>
      <BlogCard blogData={blog} />
    </>
  );
};

export default Blog;
