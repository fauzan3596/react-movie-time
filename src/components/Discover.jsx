import React, { forwardRef } from 'react'
import DiscoverMovieSlider from './DiscoverMovieSlider';

const Discover = forwardRef((props, ref) => {
  const { movies, genreName, getYear } = props;
  
  return (
    <div ref={ref} className="container-fluid text-white">
      <h2 className='mb-3 mt-5 mx-3' >Discover Your Movies</h2>
      <DiscoverMovieSlider movies={movies} genreName={genreName} getYear={getYear} />
    </div>
  )
});

export default Discover