import React from 'react'
import DiscoverMovieSlider from './DiscoverMovieSlider';

function Discover(props) {
  const { movies, genreName, getYear } = props;

  return (
    <div className='container-fluid text-white'>
      <h2 className='mb-3 mt-5 mx-3' >Discover Your Movies</h2>
      <DiscoverMovieSlider movies={movies} genreName={genreName} getYear={getYear} />
    </div>
  )
}

export default Discover