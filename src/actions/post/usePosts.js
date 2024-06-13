import { useContext } from "react";
import {
  createApiPost,
  deleteApiPost,
  getApiPosts,
  updateApiPost,
} from "../../api/posts";
import PostContext from "../../context/PostsContex";
import { ACTIONS_POSTS } from "../../state/postsState";

const usePostsActions = () => {
  const { postsState, dispatchPosts } = useContext(PostContext);
  const { currentIdPost } = postsState;

  const getAllPosts = async () => {
    try {
      const data = await getApiPosts();

      dispatchPosts({ type: ACTIONS_POSTS.GET_POSTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async (post) => {
    try {
      const data = await createApiPost(post);
      dispatchPosts({ type: ACTIONS_POSTS.CREATE_POST, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (post) => {
    try {
      const data = await updateApiPost(currentIdPost, post);

      dispatchPosts({
        type: ACTIONS_POSTS.UPDATE_POST,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      await deleteApiPost(id);
    } catch (error) {
      console.log(error);
    }
  };

  const selectCurrentIdPost = (id) => {
    dispatchPosts({ type: ACTIONS_POSTS.SELECT_CURRENT_ID, payload: id });
  };

  return {
    getAllPosts,
    postsState,
    createPost,
    updatePost,
    deletePost,
    selectCurrentIdPost,
    currentIdPost,
  };
};

export default usePostsActions;
