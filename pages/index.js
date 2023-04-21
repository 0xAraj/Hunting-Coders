import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import { useState } from "react";

export default function Home(props) {
  const [blog, setBlog] = useState(props.data);
  return (
    <>
      <Head>
        <title>Hunting Coders</title>
      </Head>
      <HeroSection />
      <BlogCard blogData={blog} />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/blog");
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
