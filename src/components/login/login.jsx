import React from "react";
import "../login/login.scss";

export default class Login extends React.Component {
  render() {
    return (
      <>
        <div className="loginContainer">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" id="brandName" href="#">
                Shakhzod
              </a>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link login"
                      id="loginPage"
                      aria-current="page"
                      href="#"
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="registerPage" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="main">
            <form id="movieForm">
              <h2>Movie Form</h2>
              <div className="mb-3">
                <label htmlFor="titleInput" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titleInput"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="genrs" className="form-label">
                  Genre
                </label>
                <select
                  name="genreId"
                  id="genrs"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value=""></option>
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Romance">Romance</option>
                  <option value="Thriller">Thriller</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Number In Stock
                </label>
                <input type="number" className="form-control" id="stock" />
              </div>
              <div className="mb-3">
                <label htmlFor="rate" className="form-label">
                  Rate
                </label>
                <input type="number" className="form-control" id="rate" />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
