export const ACTIONS_POSTS = {
  GET_POSTS: "GET_POSTS",
  CREATE_POST: "CREATE_POST",
  UPDATE_POST: "UPDATE_POST",
  DELETE_POST: "DELETE_POST",
  SELECT_CURRENT_ID: "SELECT_CURRENT_ID",
};

export const reducerPosts = (state, actions) => {
  switch (actions.type) {
    case ACTIONS_POSTS.GET_POSTS:
      return { ...state, posts: actions.payload };

    case ACTIONS_POSTS.CREATE_POST:
      return { ...state, posts: [...state.posts, actions.payload] };

    case ACTIONS_POSTS.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === actions.payload._id ? actions.payload : post
        ),
      };

    case ACTIONS_POSTS.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== actions.payload),
      };

    case ACTIONS_POSTS.SELECT_CURRENT_ID:
      return { ...state, currentIdPost: actions.payload };

    default:
      break;
  }
};
