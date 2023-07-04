import React from "react";
import Login from "../login/login";
import Register from "../register/register";
import axios from "axios";

export default class Main extends React.Component {
  state = {
    user: [],
    searchValue: "",
    selectedGenre: null,
    createS: { display: "none" },
  };
  //
  componentDidMount() {
    axios
      .get("https://pdp-movies-78.onrender.com/api/movies")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ user: data });
      });
  }

  handleSearchChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleGenres = () => {
    this.setState({ selectedGenre: null });
  };

  handleAction = () => {
    this.setState({ selectedGenre: "Action" });
  };

  handleComedy = () => {
    this.setState({ selectedGenre: "Comedy" });
  };

  handleRomance = () => {
    this.setState({ selectedGenre: "Romance" });
  };

  handleThriller = () => {
    this.setState({ selectedGenre: "Thriller" });
  };

  handleLogin = () => {
    // Logic for handling login
  };

  handleCreateM = () => {
    this.setState({ createS: { display: "block" } });
  };

  inputNameRef = React.createRef();
  inputStockRef = React.createRef();
  inputRateRef = React.createRef();
  inputGenreRef = React.createRef();

  createMovie = () => {
    console.log("Name:", this.inputNameRef.current.value);
    console.log("Stock:", this.inputStockRef.current.value);
    console.log("Rate:", this.inputRateRef.current.value);
    console.log("Genre:", this.inputGenreRef.current.value);
  };

  handleBack = () => {
    this.setState({ createS: { display: "none" } });
    console.log(this.state.selectedValue);
  };

  handleDelete = (movieId) => {
    this.setState((prevState) => {
      const updatedUser = prevState.user.filter(
        (movie) => movie._id !== movieId
      );
      return { user: updatedUser };
    });
  };

  render() {
    const { user, searchValue, selectedGenre } = this.state;

    const filteredUsers = user.filter((user) => {
      if (!selectedGenre) {
        return true;
      }
      return user.genre.name === selectedGenre;
    });

    const filteredMovies = filteredUsers.filter((user) =>
      user.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Shakhzod
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link loginPage"
                    aria-current="page"
                    href="#"
                    onClick={this.handleLogin}
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link registerPage" href="#">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="main">
          <div className="list">
            <ul className="list-group">
              <li
                onClick={this.handleGenres}
                className={`list-group-item ${
                  selectedGenre === null ? "active" : ""
                }`}
                aria-current="true"
              >
                All Genres
              </li>
              <li
                className={`list-group-item action ${
                  selectedGenre === "Action" ? "active" : ""
                }`}
                onClick={this.handleAction}
              >
                Action
              </li>
              <li
                className={`list-group-item comedy ${
                  selectedGenre === "Comedy" ? "active" : ""
                }`}
                onClick={this.handleComedy}
              >
                Comedy
              </li>
              <li
                className={`list-group-item romance ${
                  selectedGenre === "Romance" ? "active" : ""
                }`}
                onClick={this.handleRomance}
              >
                Romance
              </li>
              <li
                className={`list-group-item thriller ${
                  selectedGenre === "Thriller" ? "active" : ""
                }`}
                onClick={this.handleThriller}
              >
                Thriller
              </li>
            </ul>
          </div>
          <div className="tablee">
            <button
              className="btn btn-primary newMoviBtn"
              onClick={this.handleCreateM}
            >
              New Movie
            </button>
            <p>
              Showing <span className="countMov">{filteredMovies.length}</span>{" "}
              movies in the database.
            </p>
            <input
              className="form-control me-2 search"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              value={searchValue}
              onChange={this.handleSearchChange}
            />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="titleTh">
                    Title
                  </th>
                  <th scope="col" className="genreTh">
                    Genre
                  </th>
                  <th scope="col" className="stockTh">
                    Stock
                  </th>
                  <th scope="col" className="rateTh">
                    Rate
                  </th>
                  <th scope="col"></th>
                </tr>
              </thead>

              <tbody>
                {filteredMovies.map((movie) => (
                  <tr key={movie._id}>
                    <th scope="row">{movie.title}</th>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <button
                      className="btn deleteBtn btn-primary"
                      onClick={() => this.handleDelete(movie._id)}
                    >
                      delete
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item" aria-current="page">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="createMBox" style={this.state.createS}>
            <input
              className="form-control me-2 search"
              type="search"
              placeholder="Movie Name"
              ref={this.inputNameRef}
            />
            <div className="input-group mb-3">
              <select
                className="form-select"
                id="inputGroupSelect01"
                value={this.state.selectedValue}
                onChange={this.handleSelectChange}
                ref={this.inputGenreRef}
              >
                <option selected>Genre</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Romance">Romance</option>
                <option value="Thriller">Thriller</option>
              </select>
            </div>
            <input
              className="form-control me-2 search"
              type="number"
              placeholder="Stock"
              ref={this.inputStockRef}
            />
            <input
              className="form-control me-2 search"
              type="number"
              placeholder="Rate"
              ref={this.inputRateRef}
            />
            <div>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={this.handleBack}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={this.createMovie}
              >
                New Movie
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
