import React from 'react'
import 'react-circular-progressbar/dist/styles.css';

function DetailMovie(props) {
    const { title, overview, release_date, genres, production_countries, status, runtime, tagline } = props.movie;
    const { getYear, showFormattedDate, getDirectorName } = props;

    const getHours = (runtime) => {
        const hours = Math.floor(runtime / 60);
        if (hours <= 1) {
            return `${hours} hour`
        } else {
            return `${hours} hours`
        }
    }

    const getMinutes = (runtime) => {
        const minutes = runtime % 60;
        if (minutes <= 1) {
            return `${minutes} minute`
        } else {
            return `${minutes} minutes`
        }
    }

    return (
        <div className='col-12 col-md-6 col-lg-4 d-flex align-item-center flex-column'>
            <h2 className='p-0 m-0'>{title} ({getYear(release_date)})</h2>
            <div className='d-flex justify-center align-items-center mx-0 my-2 gap-2' style={{flexWrap: "wrap"}}>
                {
                    genres.map(genre => (
                        <div key={genre.id}>
                            <button type="button" className="btn rounded-4 text-white" disabled style={{
                                backgroundColor: "rgba(100, 100, 100, .8)",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                border: "none"
                            }}>{genre.name}</button>
                        </div>
                    ))
                }
            </div>
            <h4>Storyline</h4>
            <p className='fst-italic tagline mt-2' style={{ fontSize: "1.1rem" }}>{tagline}</p>
            <p>{overview}</p>
            <div className="row">
                <div className="col-4">
                    <p className='movie-details'>Release Date</p>
                </div>
                <div className="col-8">
                    <p>{showFormattedDate(release_date)}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <p className='movie-details'>Duration</p>
                </div>
                <div className="col-8">
                    <p>{getHours(runtime) + ' ' + getMinutes(runtime)}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <p className='movie-details'>Status</p>
                </div>
                <div className="col-8">
                    <p>{status}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <p className='movie-details'>Countries</p>
                </div>
                <div className="col-8">
                    <p>{production_countries.map((country, index) => {
                        return index < production_countries.length - 1 ? country.name + ', ' : country.name
                    })}
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <p className='movie-details'>Director</p>
                </div>
                <div className="col-8">
                    <p>{getDirectorName}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailMovie