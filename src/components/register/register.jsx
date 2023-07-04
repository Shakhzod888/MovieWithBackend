import React from "react";
import "../register/register.scss";

export default class Register extends React.Component {
  render() {
    return (
      <>
        <div className="registerContainer">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Shakhzod
              </a>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link login" aria-current="page" href="#">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link register" href="#">
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="main">
            <form className="regForm">
              <h2>Register</h2>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control password"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  Name
                </label>
                <input
                  type="password"
                  className="form-control name"
                  id="exampleInputPassword2"
                />
              </div>
              <button type="submit" className="btn btn-primary registerBtn">
                Register
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
