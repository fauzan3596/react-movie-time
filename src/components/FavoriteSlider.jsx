import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom';

function FavoriteSlider(props) {
    const { favoriteGenreName, getYear, favorite } = props;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className={'custom-arrow'}
                style={{
                    left: '2%',
                }}
                onClick={onClick}
            >
                &#10094;
            </div>
        );
    }

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className={'custom-arrow'}
                style={{
                    right: '2%',
                }}
                onClick={onClick}
            >
                &#10095;
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const displayWindowSize = () => {
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", displayWindowSize);
    }, []);

    let currenSlideToShow = 5;

    if (screenWidth < 480) {
        currenSlideToShow = 1;
    } else if (screenWidth >= 480 && screenWidth <= 600) {
        currenSlideToShow = 2;
    } else if (screenWidth >= 600 && screenWidth <= 850) {
        currenSlideToShow = 3;
    } else if (screenWidth >= 850 && screenWidth <= 1024) {
        currenSlideToShow = 4;
    } else {
        currenSlideToShow = 5;
    }

    return (
        <div className='container-fluid text-white'>
            <h2 className='mx-3 mt-5 mb-3' >Favorite Movies</h2>
            {
                favorite.length == 0 ? (<p className='mx-3'>No movies yet.</p>) : favorite.length <= currenSlideToShow ? (
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mx-1 mt-4">
                        {
                            favorite.map((favoriteMovie, index) => {
                                const { id, title, poster_path, release_date, overview } = favoriteMovie;
                                return (
                                    <div className="p-2" key={id}>
                                        <Link to={`/movie/${id}`} className='text-decoration-none'>
                                            <div className="card h-100 text-white bg-dark border-0 rounded-5">
                                                <img src={`https://image.tmdb.org/t/p/original${poster_path}`}
                                                    alt={title}
                                                    className='card-img rounded-5' />
                                                <div className="card-img-overlay rounded-5">
                                                    <div className="card-body d-flex flex-column justify-content-end px-0 py-0 h-100">
                                                        <button className="btn rounded-5 text-white mb-2" disabled style={{
                                                            backgroundColor: "rgba(50, 50, 50, .8)",
                                                            backdropFilter: "blur(10px)",
                                                            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                                            border: "none",
                                                            width: "8.1rem"
                                                        }}>{favoriteGenreName[index]}</button>
                                                        <h5 className="card-title" style={{
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis'
                                                        }}>{`${title} (${getYear(release_date)})`}</h5>
                                                        <div className="card-text discover-desc">
                                                            <p>{overview}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : <Slider {...settings}>
                    {
                        favorite.map((favoriteMovie, index) => {
                            const { id, title, poster_path, release_date, overview } = favoriteMovie;
                            return (
                                <div className="p-2" key={id}>
                                    <Link to={`/movie/${id}`} className='text-decoration-none'>
                                        <div className="card h-100 text-white bg-dark border-0 rounded-5">
                                            <img src={`https://image.tmdb.org/t/p/original${poster_path}`}
                                                alt={title}
                                                className='card-img rounded-5' />
                                            <div className="card-img-overlay rounded-5">
                                                <div className="card-body d-flex flex-column justify-content-end px-0 py-0 h-100">
                                                    <button className="btn rounded-5 text-white mb-2" disabled style={{
                                                        backgroundColor: "rgba(50, 50, 50, .8)",
                                                        backdropFilter: "blur(10px)",
                                                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                                        border: "none",
                                                        width: "8.1rem"
                                                    }}>{favoriteGenreName[index]}</button>
                                                    <h5 className="card-title" style={{
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    }}>{`${title} (${getYear(release_date)})`}</h5>
                                                    <div className="card-text discover-desc">
                                                        <p>{overview}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </Slider>
            }
        </div>
    )
}

export default FavoriteSlider