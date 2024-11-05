import React from 'react'
import DiscoverMovieSlider from './DiscoverMovieSlider';

function Discover(props) {
  const { movies, showFormattedDate } = props;

  return (
    <div className='container-fluid text-white'>
      <h2 className='my-3 mx-3' >Discover Your Movies</h2>
      <DiscoverMovieSlider movies={movies} showFormattedDate={showFormattedDate} />

    </div>
  )
}

export default Discover