import React from 'react'
import Movie from './Movie'


const MovieList = ({title, movies}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className='movie-list'>
        {movies.map((movie) => {
          return <Movie key={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year}/>
        })}    
      </div>
    </div>
  )
}

export default MovieList
