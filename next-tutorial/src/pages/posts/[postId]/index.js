const PostItem = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const repsonse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  return { props: { post: data } };
};
