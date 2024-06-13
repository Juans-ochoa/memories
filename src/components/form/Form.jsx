import { useEffect, useState } from "react";
import InputFile from "../../UI/Form/InputFile";
import InputText from "../../UI/Form/InputText";
import TextArea from "../../UI/Form/TextArea";
import usePostsActions from "../../actions/post/usePosts";
import "./index.css";

const STATE_FORM = {
  data: {
    creator: "",
    title: "",
    tags: "",
    message: "",
    selectFile: "",
  },
};

export default function Form() {
  const { createPost, currentIdPost, postsState, updatePost } =
    usePostsActions();
  const [form, setForm] = useState({ ...STATE_FORM });
  const { data } = form;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, data: { ...prev.data, [name]: value } }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentIdPost) {
      await createPost({
        ...data,
        tags: form.data.tags.split(","),
      });

      setForm((prev) => ({ ...prev, ...STATE_FORM }));
    } else {
      await updatePost(data);
    }
  };

  useEffect(() => {
    if (!currentIdPost) return;
    const post = postsState.posts.find(({ _id }) => _id === currentIdPost);
    if (post) {
      setForm((prev) => ({
        ...prev,
        data: { ...prev.data, ...post, tags: post.tags.join(",") },
      }));
    }
  }, [currentIdPost]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <InputText
        name="creator"
        label={"Creator"}
        onChange={handleChange}
        value={data.creator}
      />
      <InputText
        name="title"
        label={"Title"}
        value={data.title}
        onChange={handleChange}
      />
      <InputText
        name={"tags"}
        label={"Tags"}
        placeholder="Title,Music"
        value={data.tags}
        onChange={handleChange}
      />
      <TextArea
        name={"message"}
        label={"Message"}
        value={data.message}
        placeholder="Input message..."
        onChange={handleChange}
      />
      <InputFile
        selectFile={(file) =>
          setForm((prev) => ({
            ...prev,
            data: { ...prev.data, selectFile: file },
          }))
        }
      />
      <div className="action-form">
        <button className="btn-save" type="submit">
          {currentIdPost ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
}
