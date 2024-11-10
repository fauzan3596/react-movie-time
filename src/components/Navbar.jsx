import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  const [query, setQuery] = useState("")

  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  const submitHandler = (e) => {
    if (e.key === 'Enter' || e.type === 'submit') {
      e.preventDefault()
      document.querySelector("#search-navigate").click();
      setQuery("");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top" data-bs-theme="dark" style={{
      background: "rgb(35, 52, 88)",
      background: "linear-gradient(150deg, rgba(35, 52, 88, 1) 0%, rgba(17, 24, 39, 1) 100%)",
      borderBottom: "2px solid #535F77"
    }}>
      <div className="container-fluid mx-3">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Movie Time Logo" width="50" height="50" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Movies
              </a>
              <ul className="dropdown-menu" style={{
                background: "rgb(35, 52, 88)",
                background: "linear-gradient(150deg, rgba(35, 52, 88, 1) 0%, rgba(17, 24, 39, 1) 100%)",
              }}>
                <li><Link className="dropdown-item" to="/movie/popular">Popular</Link></li>
                <li><Link className="dropdown-item" to="/movie/now_playing">Now Playing</Link></li>
                <li><Link className="dropdown-item" to="/movie/upcoming">Upcoming</Link></li>
                <li><Link className="dropdown-item" to="/movie/top_rated">Top Rated</Link></li>
              </ul>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                TV Shows
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/tv/popular">Popular</Link></li>
                <li><Link className="dropdown-item" to="/tv/airing_today">Airing Today</Link></li>
                <li><Link className="dropdown-item" to="/tv/on_the_air">On TV</Link></li>
                <li><Link className="dropdown-item" to="/tv/top_rated">Top Rated</Link></li>
              </ul>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/favorite">Favorite</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/surprise me">Surprise Me★</Link>
            </li>
          </ul>

          <form className="d-flex search-form" role="search" onSubmit={submitHandler}>
            <input className="form-control me-2 rounded-pill border-0 py-2 px-3" type="search" placeholder="Search"
              aria-label="Search" value={query} onChange={searchHandler}  onKeyDown={submitHandler} style={{
                backgroundColor: "#192642"
              }} />

            <Link to={`search/movie`} id="search-navigate" state={{query}}>
              <button className="btn rounded-pill py-2 px-3 text-white btn-submit" type="submit" style={{ backgroundColor: "#1D4ED8" }}>Search</button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar