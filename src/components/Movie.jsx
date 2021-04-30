import React from 'react'

const Movie = ({title, poster, year}) => {
  return (
    <div>
      <p>{title}</p>
      <img src={poster} alt={title}/>
      <p>{year}</p>
    </div>
  )
}

export default Movie
