import React from 'react'
import useSearchMovie from '../hooks/useSearchMovie'
import { useLocation } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import ErrorPage from './ErrorPage';

function SearchResult() {
    const location = useLocation()
    const query = location.state.query || ""

    const { results, loading, error } = useSearchMovie(query)

    const showFormattedDate = (date) => {
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
        return new Date(date).toLocaleDateString("en-US", options)
    }

    return (
        <div className='container-fluid text-white' style={{
            background: "rgb(35, 52, 88)",
            background: "linear-gradient(150deg, rgba(35, 52, 88, 1) 0%, rgba(17, 24, 39, 1) 100%)"
        }}>
            <h2 className='py-3 mx-3' >Search Results for "{query}" movies</h2>
            {
                results.length === 0 ? <ErrorPage type="search" /> : <MovieCard movies={results} showFormattedDate={showFormattedDate} />
            } 
        </div>
    )
}

export default SearchResult