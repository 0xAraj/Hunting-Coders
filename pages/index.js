import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coders</title>
      </Head>
      <HeroSection />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </>
  );
}
