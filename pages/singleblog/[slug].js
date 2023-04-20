import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [singleBlog, setSingleBlog] = useState({});

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    const data = await res.json();
    setSingleBlog(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="max-w-2xl mx-auto py-7 mt-5">
        <h2 className="text-center text-3xl mb-5">{singleBlog.title}</h2>
        <p>{singleBlog.content}</p>
        <p className="mt-5">
          Author:{" "}
          <span className="cursor-pointer font-serif font-bold">
            {singleBlog.author}
          </span>
        </p>
      </div>
    </>
  );
};

export default Slug;
