import React from 'react'

function TVShowsCard(props) {
    const { tvShows, showFormattedDate } = props;

    return (
        <div className="row row-cols-2 row-cols-sm-4 row-cols-lg-5 mx-1 mt-4">
            {
                tvShows.map((tvShow) => {
                    const { id, name, poster_path, first_air_date } = tvShow;
                    return (
                        <div className="col mb-1" key={id}>
                            <div className="card h-100 text-white bg-dark border-0">
                                <img src={`https://image.tmdb.org/t/p/original${poster_path}`}
                                    alt={name}
                                    className='card-img-top rounded-4' style={{minHeight: "23rem"}} />
                                <div className="card-body px-0">
                                    <h5 className="card-title" style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>{name}</h5>
                                    <div className="card-text">
                                        <p>{showFormattedDate(first_air_date)}</p>
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

export default TVShowsCard