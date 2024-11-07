import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios'
import Discover from '../components/Discover'
import Trending from '../components/Trending'

function Home() {
    const [movies, setMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [genreName, setGenreName] = useState([]);
    const [trendingGenreName, setTrendingGenreName] = useState([]);
    const URL = "https://api.themoviedb.org/3/";

    const getMovies = async () => {
        try {
            let movies = await axios({
                method: "GET",
                url: `${URL}discover/movie`,
                params: {
                    api_key: import.meta.env.VITE_API_KEY
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

    const getTrendingMovies = async () => {
        try {
            let movies = await axios({
                method: "GET",
                url: `${URL}trending/movie/day`,
                params: {
                    api_key: import.meta.env.VITE_API_KEY
                }
            });
            setTrendingMovies(movies.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies();
        getGenres();
        getTrendingMovies();
    }, []);

    useEffect(() => {
        if (movies.length > 0 && genres.length > 0) {
            const getGenreName = movies.map(movie => {
                const genreName = genres.find(genre => genre.id === movie.genre_ids[0]).name;
                return genreName;
            })
            setGenreName(getGenreName);
        }
    }, [movies, genres])

    useEffect(() => {
        if (trendingMovies.length > 0 && genres.length > 0) {
            const getGenreName = trendingMovies.map(trending => {
                const genreName = genres.find(genre => genre.id === trending.genre_ids[0]).name;
                return genreName;
            })
            setTrendingGenreName(getGenreName);
        }
    }, [trendingMovies, genres])

    const getYear = (date) => {
        const year = new Date(date)
        return year.getFullYear();
    }

    return (
        <>
            <div className="bg-dark">
                <Header movies={movies} />
                <Discover movies={movies} genreName={genreName} getYear={getYear} />
                <Trending trendingMovies={trendingMovies} trendingGenreName={trendingGenreName} getYear={getYear} />
                <Footer />
            </div>
        </>
    )
}

export default Home