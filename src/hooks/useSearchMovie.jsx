import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = `https://api.themoviedb.org/3/search/movie`;

function useSearchMovie(query) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const fetchMovies = async () => {
            setLoading(true);
            setError(null);

            try {
                const movies = await axios({
                    method: "GET",
                    url: URL,
                    params: {
                        api_key: import.meta.env.VITE_API_KEY,
                        query: query,
                    },
                });

                if (movies.data.results) {
                    setResults(movies.data.results);
                } else {
                    setError('No results found')
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [query]);

    return {
        results,
        loading,
        error,
    };
}

export default useSearchMovie;