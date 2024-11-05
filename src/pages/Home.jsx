import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios'
import Discover from '../components/Discover'

function Home() {
    const [movies, setMovies] = useState([]);
    const URL = "https://api.themoviedb.org/3/";

    const getMovies = async () => {
        try {
            let movies = await axios({
                method: "GET",
                url: `${URL}discover/movie`,
                params: {
                    api_key: import.meta.env.VITE_API_KEY
                }
            });
            setMovies(movies.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    const showFormattedDate = (date) => {
        const options = {
          year: "numeric",
          month: "short",
          day: "numeric"
        }
        return new Date(date).toLocaleDateString("en-US", options)
      }

    return (
        <>
        <div className="bg-dark">
            <Header movies={movies} />
            <Discover movies={movies} showFormattedDate={showFormattedDate} />
            <Footer />
        </div>
        </>
    )
}

export default Home