import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DetailBanner from '../components/DetailBanner'
import DetailMovie from '../components/DetailMovie'

function Detail() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
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

    useEffect(() => {
        getDetailMovie();
    }, [id]);

    return (
        <div className='container-fluid text-white bg-dark'>
            <div className="row">
                {
                    movie ? (
                        <>
                            <DetailBanner movie={movie} />
                            <DetailMovie movie={movie} />
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