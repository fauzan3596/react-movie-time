import React from 'react'
import { Link } from 'react-router-dom';

function MovieCard(props) {
    const { movies, showFormattedDate } = props;

    return (
        <div className="row row-cols-2 row-cols-sm-4 row-cols-lg-5 mx-1 mt-4">
            {
                movies.map((movie) => {
                    const { id, title, poster_path, release_date } = movie;
                    return (
                        <div className="col mb-1" key={id}>
                            <Link to={`/movie/${id}`}>
                                <div className="card h-100 text-white bg-dark border-0">
                                    <img src={`https://image.tmdb.org/t/p/original${poster_path}`}
                                        alt={title}
                                        className='card-img-top rounded-4' />
                                    <div className="card-body px-0">
                                        <h5 className="card-title" style={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>{title}</h5>
                                        <div className="card-text">
                                            <p>{showFormattedDate(release_date)}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MovieCard