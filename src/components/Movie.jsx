import React from 'react'

const Movie = ({title, poster, year, type}) => {
  const isMovie = type === 'movie';
  return (
    <>
      {isMovie ? 
        <div>
          <p>{title}</p>
          <img src={poster} alt={title}/>
          <p>{year}</p>
        </div>
      :
        <div></div>
      }
    </>
  )
}

export default Movie
