import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <div className="max-w-2xl mx-auto py-7">
        <h2 className="text-center text-3xl mb-5">Title of the blog</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          necessitatibus velit odit quasi, consequatur ex earum doloribus
          maiores, cumque nostrum possimus vero? Sed mollitia voluptates iusto
          nostrum, distinctio voluptate voluptas! Voluptates architecto dicta
          quae soluta laborum accusamus culpa unde debitis suscipit hic
          molestias, esse numquam nesciunt libero sunt ducimus praesentium,
          laudantium ab consequuntur facere provident fugit. Temporibus dicta a
          ipsa ea, similique nostrum consectetur corrupti quas, qui dolores
          laudantium delectus.
        </p>
        <p className="mt-5">
          Author:{" "}
          <span className="cursor-pointer font-serif font-bold">
            Aditya Raj
          </span>
        </p>
      </div>
    </>
  );
};

export default Slug;
