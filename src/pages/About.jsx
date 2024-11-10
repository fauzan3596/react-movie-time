import React from 'react';
import { MdLocalMovies } from "react-icons/md";
import { BsFillTicketDetailedFill } from "react-icons/bs";
import { MdOutlineSavedSearch } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdGeneratingTokens } from "react-icons/md";

function About() {
  return (
    <div className='container-fluid text-white' style={{
      background: "rgb(35, 52, 88)",
      background: "linear-gradient(150deg, rgba(35, 52, 88, 1) 0%, rgba(17, 24, 39, 1) 100%)"
    }}>
      <div className="container d-flex flex-column gap-3 pt-4 text-center">
        <h2 className="display-4 font-weight-bold">About MovieTime</h2>
        <p className="lead">
          <strong>MovieTime</strong> is your ultimate destination for discovering, exploring, and enjoying movies and TV shows. It provides a seamless experience with access to trending and popular movies, detailed descriptions, genres, trailers, and more. Whether you're in the mood for a blockbuster or a hidden gem, MovieTime brings the world of movies right to your fingertips.
        </p>
        <h2>Key Features</h2>
        <div className="row row-cols-3 row-cols-sm-3">
          <div className="col">
            <MdLocalMovies size={60} color='orange' />
            <h4>Popular and Trending Movies</h4>
            <p>Explore what's currently popular and dive into movies that others are enjoying.</p>
          </div>
          <div className="col">
            <BsFillTicketDetailedFill size={60} color='brown' />
            <h4>Movie Details and Overviews</h4>
            <p>Get detailed information about each movie, including cast, crew, and ratings.</p>
          </div>
          <div className="col">
            <MdOutlineSavedSearch size={60} color='cyan' />
            <h4>Search Functionality</h4>
            <p>Easily look up specific movies to helps users quickly find the content they're interested in.</p>
          </div>
          <div className="col mt-5">
            <MdCategory size={60} color='green' />
            <h4>Genres and Categories</h4>
            <p>Explore movies by genre or category to find movies that suits your mood.</p>
          </div>
          <div className="col mt-5">
            <MdFavorite size={60} color='maroon' />
            <h4> My Favorites</h4>
            <p>Easy to keep track of interesting movies and build a personal collection over time.</p>
          </div>
          <div className="col mt-5">
            <MdGeneratingTokens size={60} color='yellow' />
            <h4>Ratings</h4>
            <p>Know the others' thoughts on each movie based on peer feedback.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <h2>Tech. Stack</h2>
            <ul className='list-unstyled mt-4' style={{ textAlign: 'left' }}>
              <li><strong>React</strong> for the frontend, providing a dynamic and responsive user interface.</li>
              <li><strong>Bootstrap</strong> for responsive and styled components.</li>
              <li><strong>Axios</strong> for making API requests to movie databases like TMDb.</li>
            </ul>
          </div>
          <div className="col">
            <h2>Potential Uses</h2>
            <ul className='list-unstyled mt-4' style={{ textAlign: 'left' }}>
              <li><strong>A Movie Discovery Tool:</strong> Perfect for movie enthusiasts who want to explore new films based on genre, popularity, or recommendations.</li>
              <li><strong>A Personal Watchlist Manager:</strong> A convenient way for users to track movies they want to watch in the future.</li>
              <li><strong>An Information Resource:</strong> With detailed movie descriptions, cast information, and more, users can use MovieTime to learn about various films.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
