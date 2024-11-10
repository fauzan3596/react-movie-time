import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GiSurprisedSkull } from "react-icons/gi";
import { Link } from 'react-router-dom';

function RandomMovieDetail() {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState('')
  const URL = "https://api.themoviedb.org/3/";

  const getMovies = async (genreId) => {
    try {
      let movies = await axios({
        method: "GET",
        url: `${URL}discover/movie`,
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          with_genres: genreId
        }
      });
      setMovies(movies.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const getGenres = async () => {
    try {
      let genres = await axios({
        method: "GET",
        url: `${URL}genre/movie/list`,
        params: {
          api_key: import.meta.env.VITE_API_KEY
        }
      });
      setGenres(genres.data.genres);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    if (selectedGenre) {
      getMovies(selectedGenre);
    }
  }, [selectedGenre])

  const getRandomMovie = () => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      return movies[randomIndex].id;
    }
  }

  const selectedGenreHandler = (e) => {
    setSelectedGenre(e.target.value);
  }

  return (
    <div className='container-fluid text-white' style={{
      background: "rgb(35, 52, 88)",
      background: "linear-gradient(150deg, rgba(35, 52, 88, 1) 0%, rgba(17, 24, 39, 1) 100%)"
    }}>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "87.2vh" }}>
        <h2 className='text-warning'><GiSurprisedSkull size={50} />Choose Your Genre<GiSurprisedSkull size={50} /></h2>
        <select className="form-select my-3 w-25 rounded-5 border-0" aria-label="Default select example"
          value={selectedGenre} onChange={selectedGenreHandler}>
          <option value='' disabled>Select a Genre</option>
          {genres.map(genre => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
        {
          selectedGenre ? <Link to={`/movie/${getRandomMovie()}`}>
            <button type="button" className="btn btn-lg btn-warning my-3">Click me for a Surprise!</button>
          </Link> : <button type="button" className="btn btn-lg btn-warning my-3" disabled>Please Select a Genre</button>
        }

      </div>
    </div>
  )
}

export default RandomMovieDetail