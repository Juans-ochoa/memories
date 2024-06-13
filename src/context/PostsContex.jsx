import React, { useReducer } from "react";
import { reducerPosts } from "../state/postsState";

const PostContext = React.createContext(null);

export const PostContextProvider = ({ children }) => {
  const [postsState, dispatchPosts] = useReducer(reducerPosts, {
    posts: [],
    currentIdPost: "",
  });

  return (
    <PostContext.Provider value={{ postsState, dispatchPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
