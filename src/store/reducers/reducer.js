let initState = {
  username: "",
  repos: "",
  following: "",
  followers: "",
  grabbedData: false,
  message: "",
  image_url: ""
};

const reducer = (state = initState, action) => {
  if (action.type === "HANDLE_USERNAME") {
    return {
      ...state,
      username: action.e.target.value
    };
  } else if (action.type === "SUBMIT_FORM") {
    let ch = action.data;
    if (ch.public_repos) {
      return {
        ...state,
        repos: ch.public_repos,
        following: ch.following,
        followers: ch.followers,
        image_url: ch.avatar_url,
        message: "",
        grabbedData: true
      };
    } else {
      return {
        ...state,
        message: "User Not Found."
      };
    }
  }
  return state;
};

export default reducer;
