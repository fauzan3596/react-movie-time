import React, { useEffect, useState, useRef } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios'
import Discover from '../components/Discover'
import Trending from '../components/Trending'
import FavoriteSlider from '../components/FavoriteSlider'
import { useFavoriteContext } from '../hooks/useFavoriteContext';

function Home() {
    const [movies, setMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [genreName, setGenreName] = useState([]);
    const [trendingGenreName, setTrendingGenreName] = useState([]);
    const { favorite } = useFavoriteContext();
    const [favoriteGenreName, setFavoriteGenreName] = useState([]);
    const exploreNow = useRef(null); 
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

    useEffect(() => {
        if (favorite.length > 0 && genres.length > 0) {
            const getGenreName = favorite.map(fav => {
                const genreName = genres.find(genre => genre.id === fav.genres[0].id).name;
                return genreName;
            })
            setFavoriteGenreName(getGenreName);
        }
    }, [favorite, genres])

    const getYear = (date) => {
        const year = new Date(date)
        return year.getFullYear();
    }

    const onExploreClick = () => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = exploreNow.current.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      };

    return (
        <>
            <div style={{
                background: "rgb(35, 52, 88)",
                background: "linear-gradient(150deg, rgba(35, 52, 88, 1) 0%, rgba(17, 24, 39, 1) 100%)"
            }}>
                <Header movies={movies} onExploreClick={onExploreClick} />
                <Discover ref={exploreNow} movies={movies} genreName={genreName} getYear={getYear} />
                <Trending trendingMovies={trendingMovies} trendingGenreName={trendingGenreName} getYear={getYear} />
                <FavoriteSlider favorite={favorite} favoriteGenreName={favoriteGenreName} getYear={getYear} />
                <Footer />
            </div>
        </>
    )
}

export default Home