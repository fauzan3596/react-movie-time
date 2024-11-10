import React, { useState } from 'react'
import photo from '../assets/default_pfp.jpg'

function DetailCastMovie(props) {
    let { cast } = props.credits;
    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    let isShowMore = showMore ? cast : cast.slice(0, 4)

    return (
        <div className='col-12 col-md-12 col-lg-4 d-flex align-item-center justify-content-center flex-column'>
            <h4>Casted by</h4>
            <div
                className="scrollable-container"
                style={{
                    maxHeight: "23.8rem",
                    overflowY: "auto",
                    width: "100%",
                }}
            >
                {
                    isShowMore.map((person) => {
                        const { id, name, character, profile_path } = person;
                        return (
                            <div className="card my-2 mx-2 text-white rounded-4" key={id} style={{
                                backgroundColor: "rgba(217,217,217,.08)"
                            }}>
                                <div className="row mx-3 g-0">
                                    <div className="col-auto d-flex align-items-center">
                                        <img src={profile_path ? `https://image.tmdb.org/t/p/original${profile_path}}` : photo}
                                            className="img-fluid rounded-circle" alt={name} style={{
                                                width: "4rem",
                                                height: "4rem",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>
                                    <div className="col">
                                        <div className="card-body">
                                            <h6 className="card-title">{name}</h6>
                                            <p className="card-text character">as {character}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='d-flex justify-content-end mx-3 mt-3' >
                <p className='text-right text-primary' onClick={() => handleShowMore()}
                    style={{ cursor: "pointer" }}>
                    <u>{showMore ? 'Show Less' : 'Show More'}</u>
                </p>
            </div>
        </div>
    )
}

export default DetailCastMovie