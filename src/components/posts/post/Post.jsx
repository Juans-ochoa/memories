import usePostsActions from "../../../actions/post/usePosts";
import "./index.css";

export default function Post({ post }) {
  const { selectCurrentIdPost, deletePost, likePost } = usePostsActions();
  const { title, creator, tags, message, _id, selectFile, likeCount } = post;

  return (
    <article className="card">
      <div className="card-image">
        <img src={selectFile} alt="Image" width="100%" height="100%" />
      </div>
      <article className="card-content">
        <h5 className="card-title">{title}</h5>
        <p>{creator}</p>
        {tags.length > 0 && (
          <ul className="tags">
            {tags.map((e, i) => (
              <li key={i}>#{e}</li>
            ))}
          </ul>
        )}
        <p>{message}</p>
      </article>
      <footer className="card-actions">
        <button
          type="button"
          className="btn-select"
          onClick={() => selectCurrentIdPost(_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
        <button
          type="button"
          className="btn-delete"
          onClick={() => deletePost(_id)}
        >
          🗑️ Delete
        </button>
        <button type="button" className="likes" onClick={() => likePost(_id)}>
          👍
          <span>{likeCount || 0}</span>
        </button>
      </footer>
    </article>
  );
}
