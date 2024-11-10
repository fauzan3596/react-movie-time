import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DetailBanner from '../components/DetailBanner'
import DetailMovie from '../components/DetailMovie'
import DetailCastMovie from '../components/DetailCastMovie'

function Detail(props) {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [credits, setCredits] = useState(null)
    const { favorites, setFavorites } = props
    const URL = "https://api.themoviedb.org/3/";

    const getDetailMovie = async () => {
        try {
            let movie = await axios({
                method: "GET",
                url: `${URL}movie/${id}`,
                params: {
                    api_key: import.meta.env.VITE_API_KEY
                }
            });
            setMovie(movie.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getCreditsMovie = async () => {
        try {
            let credits = await axios({
                method: "GET",
                url: `${URL}movie/${id}/credits`,
                params: {
                    api_key: import.meta.env.VITE_API_KEY
                }
            });
            setCredits(credits.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDetailMovie();
        getCreditsMovie()
    }, [id]);

    const getYear = (date) => {
        const year = new Date(date)
        return year.getFullYear();
    }

    const showFormattedDate = (date) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
        return new Date(date).toLocaleDateString("en-US", options)
    }

    const getDirectorName = () => {
        if (credits) {
            const director = credits.crew.find(people => people.job === 'Director')
            return director ? director.name : '-'
        }
    }

    const getFavorite = (movie) => {
        if (!favorites.some((fav) => fav.id === movie.id)) {
            setFavorites([...favorites, movie]); // Add movie to favorites if it's not already there
        }
    };

    return (
        <div className='container-fluid text-white py-5' style={{
            background: "rgb(35, 52, 88)",
            background: "linear-gradient(150deg, rgba(35, 52, 88, 1) 0%, rgba(17, 24, 39, 1) 100%)"
        }}>
            <div className="row">
                {
                    movie && credits ? (
                        <>
                            <DetailBanner movie={movie} getFavorite={() => getFavorite(movie)} />
                            <DetailMovie movie={movie} getYear={getYear} showFormattedDate={showFormattedDate} getDirectorName={getDirectorName()} />
                            <DetailCastMovie credits={credits} />
                        </>
                    ) : (
                        <p></p>
                    )
                }
            </div>
        </div>
    )
}

export default Detail