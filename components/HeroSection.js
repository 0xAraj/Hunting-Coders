import React from "react";
import Image from "next/image";
import bannerImg from "../public/Banner Img.webp";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center my-5">
        <Image src={bannerImg} alt="Banner Image" width={300} height={175} />
      </div>
      <div className="my-3 text-center space-y-4">
        <h1 className="font-bold text-4xl">&lt;HuntingCoders/&gt;</h1>
        <p>
          Code smarter, not harder: tips, tricks, and insights for developers.
        </p>
      </div>
      <h2 className="text-center text-3xl mt-10 font-bold">Latest Blogs</h2>
    </>
  );
};

export default HeroSection;
