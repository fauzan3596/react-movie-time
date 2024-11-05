import React from 'react'

function DiscoverMovieSlider(props) {
    const { movies, showFormattedDate } = props;

    return (
        <div className="row row-cols-2 row-cols-sm-4 row-cols-lg-5 mx-1 mt-4">
            {
                movies.map((movie) => {
                    const { id, title, poster_path, release_date, overview } = movie;
                    return (
                        <div className="col mb-1" key={id}>
                            <div className="card h-100 text-white bg-dark border-dark">
                                <img src={`https://image.tmdb.org/t/p/original${poster_path}`}
                                    alt={title}
                                    className='card-img rounded-5' />
                                <div className="card-img-overlay rounded-5">
                                    <div className="card-body d-flex flex-column justify-content-end px-0 py-0 h-100">
                                        <button className="btn rounded-5 text-white mb-3" disabled style={{
                                            backgroundColor: "rgba(50, 50, 50, .8)",
                                            backdropFilter: "blur(10px)",
                                            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                            border: "none",
                                            width: "8.1rem"
                                        }}>{showFormattedDate(release_date)}</button>
                                        <h5 className="card-title" style={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>{title}</h5>
                                        <div className="card-text discover-desc">
                                            <p>{overview}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DiscoverMovieSlider