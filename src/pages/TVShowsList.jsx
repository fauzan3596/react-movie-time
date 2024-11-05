import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TVShowsCard from '../components/TVShowsCard';

function TVShowsList(props) {
    const { type } = props;
    const [tvShows, setTvShows] = useState([]);
    let URL = "https://api.themoviedb.org/3/";

    switch (type) {
        case 'Popular':
            URL = `${URL}tv/popular`;
            break;
        case 'Airing Today':
            URL = `${URL}tv/airing_today`;
            break;
        case 'On TV':
            URL = `${URL}tv/on_the_air`;
            break;
        case 'Top Rated':
            URL = `${URL}tv/top_rated`;
            break;
        default:
            break;
    }

    const getTvShows = async () => {
        try {
            let tvShows = await axios({
                method: "GET",
                url: `${URL}`,
                params: {
                    api_key: import.meta.env.VITE_API_KEY
                }
            });
            setTvShows(tvShows.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTvShows();
    }, [type]);

    const showFormattedDate = (date) => {
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
        return new Date(date).toLocaleDateString("en-US", options)
    }
    return (
        <div className='container-fluid text-white bg-dark'>
            <h2 className='py-3 mx-3'>{type == 'On TV' ? `${type} Shows` : `${type} TV Shows`}</h2>
            <TVShowsCard tvShows={tvShows} showFormattedDate={showFormattedDate} />
        </div>
    )
}

export default TVShowsList