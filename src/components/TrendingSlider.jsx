import React from 'react'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function TrendingSlider(props) {
    const { trendingMovies, trendingGenreName, getYear } = props;

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
        slidesToScroll: 5,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

    return (
        <div className="p-0">
            <Slider {...settings}>
                {
                    trendingMovies.map((trending, index) => {
                        const { id, title, poster_path, release_date, overview } = trending;
                        return (
                            <div className="p-2" key={id}>
                                <div className="card h-100 text-white bg-dark border-0">
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
                                            }}>{trendingGenreName[index]}</button>
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
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default TrendingSlider