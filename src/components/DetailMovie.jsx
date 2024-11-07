import React from 'react'

function DetailMovie(props) {
    const {title, overview} = props.movie;

    return (
        <div className='col-5 d-flex justify-content-center align-item-center flex-column h-100'>
            <h1>{title}</h1>
            <p>asdasdsa</p>
            <h3>Storyline</h3>
            <p>{overview}</p>
        </div>
    )
}

export default DetailMovie