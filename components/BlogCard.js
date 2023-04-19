import React from "react";

const BlogCard = ({ blogData }) => {
  return (
    <>
      {blogData.map((e) => {
        return (
          <div className="max-w-2xl mx-auto my-4" key={e.title}>
            <h3 className="text-xl">{e.title}</h3>
            <p>
              {e.content.substr(0, 150)}...
              <span className="text-sm text-blue-500 cursor-pointer hover:underline">
                Read more
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
