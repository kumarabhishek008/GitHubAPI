export const handleUsername = e => {
  return {
    type: "HANDLE_USERNAME",
    e: e
  };
};

export const submitForm = (e, username) => {
  e.persist();
  return async dispatch => {
    try {
      const resp = await fetch(`https://api.github.com/users/${username}`);
      const data = await resp.json();
      dispatch({
        type: "SUBMIT_FORM",
        e: e,
        data
      });
    } catch (er) {
      console.log(er);
    }
  };
};
