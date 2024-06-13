import usePostsActions from "../../../actions/post/usePosts";
import "./index.css";

export default function Post({ post }) {
  const { selectCurrentIdPost, deletePost } = usePostsActions();
  const { title, creator, tags, message, _id, selectFile } = post;

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
          🪝 Select
        </button>
        <button
          type="button"
          className="btn-delete"
          onClick={() => deletePost(_id)}
        >
          🗑️ Delete
        </button>
      </footer>
    </article>
  );
}
