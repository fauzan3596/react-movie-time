import React from 'react';
import { useFavoriteContext } from '../hooks/useFavoriteContext';
import ErrorPage from './ErrorPage';
import MovieCard from '../components/MovieCard';

function Favorite() {
  const { favorite } = useFavoriteContext();

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
      {
        favorite.length === 0 ? <ErrorPage type="favorite" /> : (
          <>
            <h2 className='py-3 mx-3' >My Favorite Movies</h2>
            <MovieCard movies={favorite} showFormattedDate={showFormattedDate} />
          </>
        )
      }
    </div>
  );
}

export default Favorite;
