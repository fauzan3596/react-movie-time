import React from 'react'
import TrendingSlider from './TrendingSlider';

function Trending(props) {
    const { trendingGenreName, getYear, trendingMovies } = props;

    return (
      <div className='container-fluid text-white'>
        <h2 className='mx-3 mt-5 mb-3' >Trending Movies</h2>
        <TrendingSlider trendingMovies={trendingMovies} trendingGenreName={trendingGenreName} getYear={getYear} />
      </div>
    )
}

export default Trending