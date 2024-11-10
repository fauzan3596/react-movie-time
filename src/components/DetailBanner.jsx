import React, { useEffect, useState } from 'react'
import { MdFavorite } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { BiMovie } from "react-icons/bi";
import { useFavoriteContext } from '../hooks/useFavoriteContext';

function DetailBanner(props) {
    const [progress, setProgress] = useState(0);
    const [clicked, setClicked] = useState(false);
    const { poster_path, title, vote_average } = props.movie;
    const { addFavorite, removeFavorite, favorite } = useFavoriteContext();

    const isFavorite = favorite.find((fav) => fav.id === props.movie.id);

    const handleFavorite = () => {
        setClicked(true)
        if (isFavorite) {
            removeFavorite(props.movie.id);
        } else {
            addFavorite(props.movie)
        }
    };

    useEffect(() => {
        if (clicked) {
            const animation = setTimeout(() => setClicked(false), 500);
            return () => clearTimeout(animation);
        }
    }, [clicked]);

    const percentage = Math.floor(vote_average * 10)

    useEffect(() => {
        setProgress(percentage);
    }, [percentage]);

    const red = percentage < 50 ? 255 : Math.round(255 - (percentage - 50) * 2.55);
    const green = percentage < 50 ? Math.round(percentage * 2.55) : 255;
    const blue = percentage > 50 ? Math.round((percentage - 50) * 2.55) : 0;

    const getColor = `rgb(${red}, ${green}, ${blue})`;

    return (
        <div className='col-12 col-md-6 col-lg-4 d-flex align-item-center flex-column'>
            <div className="card text-white bg-transparent border-0 align-self-center">
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    className='card-img-top rounded-4'
                    style={{
                        height: "26rem",
                        width: "20rem",
                    }} />
                <div className="card-img-overlay d-flex justify-content-end" style={{
                    height: "26rem",
                    width: "20rem",
                    backgroundImage: "linear-gradient(210deg, rgba(10, 10, 10, .5) 0%, rgba(255, 255, 255, 0) 100%)",
                }}>
                    <div className="rounded-circle fw-bold"
                        style={{
                            width: '4rem',
                            height: '4rem',
                            backgroundColor: '#081c22',
                        }}>
                        <CircularProgressbar
                            value={progress}
                            text={`${progress}%`}
                            styles={buildStyles({
                                strokeLinecap: 'round',
                                pathTransitionDuration: 3,
                                pathColor: getColor,
                                textColor: 'white',
                                trailColor: '#d6d6d6',
                                textSize: '1.5rem',
                            })}
                        />
                    </div>
                </div>
                <div className="card-body text-center p-0">
                    <button type="button" className="btn w-100 my-3 rounded-4 d-flex justify-content-center 
                    align-items-center gap-2 fw-bold p-2 text-primary"
                        style={{ backgroundColor: "rgba(255,255,255,.06)" }}>
                        <BiMovie />
                        Trailer
                    </button>
                    <div className="d-flex justify-content-around my-1">
                        <div className="col">
                            <MdFavorite
                                className={`my-3 favorite-icon-${clicked ? 'clicked' : ''}`}
                                onClick={handleFavorite}
                                size={25}
                                style={{ cursor: 'pointer',
                                    transition: 'transform 0.5s ease, color 0.3s ease',
                                 }}
                                color={isFavorite ? 'red' : 'white'} />
                            <p>Favorite</p>
                        </div>
                        <div className="col">
                            <FaBookmark className='my-3' size={25} />
                            <p>Watch Later</p>
                        </div>
                        <div className="col">
                            <IoEyeSharp className='my-3' size={25} />
                            <p>Watched</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailBanner