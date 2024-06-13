import { useEffect } from "react";
import usePostsActions from "../../actions/post/usePosts";
import "./index.css";
import Post from "./post/Post";

export default function Posts() {
  const {
    getAllPosts,
    postsState: { posts },
  } = usePostsActions();

  useEffect(() => {
    (async () => {
      getAllPosts();
    })();
  }, []);

  return (
    <section className="posts">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </section>
  );
}
