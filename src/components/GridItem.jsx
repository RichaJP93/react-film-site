import React from 'react'

const GridItem = ({title, poster, year}) => {
  console.log(title)
  return (
    <div>
      <p>{title}</p>
      <img src={poster} alt={title}/>
      <p>{year}</p>
      <hr />
    </div>
  )
}

export default GridItem
