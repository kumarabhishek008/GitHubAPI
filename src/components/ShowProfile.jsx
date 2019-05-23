import React, { Fragment } from "react";
import { connect } from "react-redux";
import "../App.css";

const ShowProfile = props => {
  return (
    <div className="getData">
      <img src={props.image_url} alt="" />
      <h1>Username : {props.username}</h1>
      <h2>Repositories : {props.repos}</h2>
      <h2>Following : {props.following}</h2>
      <h2>Followers : {props.followers}</h2>
      <br />
      <a href="/">HOME</a>
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
    image_url: state.image_url
  };
};

export default connect(
  mapStateToProps,
  null
)(ShowProfile);
