import { useState } from "react";

const Slug = (props) => {
  const [singleBlog, setSingleBlog] = useState(props.data);

  // const fetchData = async () => {
  //   const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  //   const data = await res.json();
  //   setSingleBlog(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
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
export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/getblog?slug=${context.query.slug}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
export default Slug;
