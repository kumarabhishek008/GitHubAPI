import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import * as reactStore from "../store/actions/action";
import ShowProfile from "./ShowProfile";
import "../App.css";

const Api = props => {
  const handleChange = e => {
    props.handleUsername(e);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    props.submitForm(e, props.username);
  };

  if (props.grabbedData === true) {
    return <ShowProfile />;
  }

  return (
    <div className="getData">
      <h3>{props.message}</h3>
      <input
        type="text"
        placeholder="Github Username"
        name="username"
        onChange={handleChange}
        id="username"
        autoComplete="off"
      />
      <br />
      <br />
      <button onClick={handleSubmitForm}>Search</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username,
    repos: state.repos,
    following: state.following,
    followers: state.followers,
    grabbedData: state.grabbedData,
    message: state.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUsername: e => dispatch(reactStore.handleUsername(e)),
    submitForm: (e, username) => dispatch(reactStore.submitForm(e, username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Api);
