import Link from "next/link";
import styles from "../../styles/PostsIndex.module.css";

export default function PostsIndex({ posts }) {
  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <div className={styles.list}>
        {posts.map((post) => {
          return (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <h4>{post.title}</h4>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const repsonse = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await repsonse.json();

  console.log(data.slice(0, 3));

  return { props: { posts: data.slice(0, 3) } };
};
