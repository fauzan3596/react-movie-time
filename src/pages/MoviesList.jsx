import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard';

function MoviesList(props) {
    const { type } = props;
    const [movies, setMovies] = useState([]);
    let URL = "https://api.themoviedb.org/3/";

    switch (type) {
        case 'Popular':
            URL = `${URL}movie/popular`;
            break;
        case 'Now Playing':
            URL = `${URL}movie/now_playing`;
            break;
        case 'Upcoming':
            URL = `${URL}movie/upcoming`;
            break;
        case 'Top Rated':
            URL = `${URL}movie/top_rated`;
            break;
        default:
            break;
    }

    const getMovies = async () => {
        try {
            let movies = await axios({
                method: "GET",
                url: `${URL}`,
                params: {
                    api_key: import.meta.env.VITE_API_KEY
                }
            });
            setMovies(movies.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies();
    }, [type]);

    const showFormattedDate = (date) => {
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
        return new Date(date).toLocaleDateString("en-US", options)
    }
    return (
        <div className='container-fluid text-white bg-dark'>
            <h2 className='py-3 mx-3' >{type} Movies</h2>
            <MovieCard movies={movies} showFormattedDate={showFormattedDate} />
        </div>
    )
}

export default MoviesList