import React from 'react'
import GridItem from './GridItem'


const Grid = ({title, movies}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {movies.map((movie) => {
          return <GridItem key={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year}/>
        })}    
      </div>
    </div>
  )
}

export default Grid
