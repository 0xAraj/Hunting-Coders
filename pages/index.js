import Head from "next/head";
import Navbar from "/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coders</title>
      </Head>
      <Navbar />
      <HeroSection />
    </>
  );
}
