import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
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
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/movie/popular">Popular</Link></li>
                <li><Link className="dropdown-item" to="/movie/now_playing">Now Playing</Link></li>
                <li><Link className="dropdown-item" to="/movie/upcoming">Upcoming</Link></li>
                <li><Link className="dropdown-item" to="/movie/top_rated">Top Rated</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                TV Shows
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/tv/popular">Popular</Link></li>
                <li><Link className="dropdown-item" to="/tv/airing_today">Airing Today</Link></li>
                <li><Link className="dropdown-item" to="/tv/on_the_air">On TV</Link></li>
                <li><Link className="dropdown-item" to="/tv/top_rated">Top Rated</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Favorite</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">Surprise Me★</a>
            </li>
          </ul>

          <form className="d-flex search-form" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar