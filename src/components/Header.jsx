import React, { useEffect, useState } from 'react'
import { RiMovie2Line } from "react-icons/ri";

function Header(props) {
  const { movies, onExploreClick } = props;
  const [backgroundImage, setBackgroundImage] = useState('')

  const getBackgroundImage = () => {
    try {
      if (movies.length > 0) {
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setBackgroundImage(`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBackgroundImage();
  }, [movies]);

  return (
    <header className='container-fluid d-flex justify-content-center align-items-center text-center text-white'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="z-2">
      <RiMovie2Line className='img-logo' />
        <h1 className="display-4 fw-bold mb-3">It's MovieTime</h1>
        <p className="lead mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Movie Time is your ultimate destination for discovering, exploring, and enjoying movies and TV shows. Whether you're in the mood for a blockbuster or a hidden gem, Movie Time brings the world of movies right to your fingertips.
        </p>
        <button className="btn btn-danger btn-lg" onClick={onExploreClick}>Explore Now</button>
      </div>

    </header>
  )
}

export default Header