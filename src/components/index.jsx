import React from "react";
import Login from "./login/login";
import Main from "./main/main";
import Register from "./register/register";

export default class Index extends React.Component {
  render() {
    return (
      <>
        <Login />
        <Main />
        <Register />
      </>
    );
  }
}
