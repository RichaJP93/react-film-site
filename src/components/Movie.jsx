import React from 'react'

const Movie = ({title, poster, year, type, setSelectedMovie}) => {

  const isMovie = type === 'movie';

  return (
    <>
      {isMovie ? 
        <div>
          <p>{title}</p>
          <img src={poster} alt={title} onClick={()=> {setSelectedMovie(title)}}/>
          <p>{year}</p>
        </div>
      :
        <div></div>
      }
    </>
  )
}

export default Movie
