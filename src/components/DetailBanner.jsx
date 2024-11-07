import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";

function DetailBanner(props) {

    const { poster_path, title } = props.movie;


    return (
        <div className='col-4 d-flex justify-content-center align-item-center flex-column'>
            <div className="card text-white bg-dark border-0 align-self-center my-3">
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    className='card-img-top rounded-4'
                    style={{
                        height: "26rem",
                        width: "20rem",
                    }} />
                <div className="card-body text-center p-0">
                    <button type="button" className="btn btn-primary w-100 my-3 rounded-4">Trailer</button>
                    <div className="d-flex justify-content-around my-1">
                        <div className="col">
                            <FaStar className='my-3' />
                            <p>Favorite</p>
                        </div>
                        <div className="col">
                            <FaBookmark className='my-3' />
                            <p>Watch Later</p>
                        </div>
                        <div className="col">
                           <IoEyeSharp className='my-3' />
                           <p>Watched</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailBanner