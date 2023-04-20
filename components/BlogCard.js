import React from "react";
import Link from "next/link";

const BlogCard = ({ blogData }) => {
  return (
    <>
      {blogData.map((e) => {
        return (
          <div className="max-w-2xl mx-auto my-4" key={e.title}>
            <Link href={`/singleblog/${e.slug}`}>
              <h3 className="text-xl">{e.title}</h3>
            </Link>
            <p>
              {e.content.substr(0, 150)}...
              <span className="text-sm text-blue-500 cursor-pointer hover:underline">
                <Link href={`/singleblog/${e.slug}`}>Read More</Link>
              </span>
            </p>
          </div>
        );
      })}
      ;
    </>
  );
};

export default BlogCard;
