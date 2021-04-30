import React, {useState, useEffect}from 'react';
import axios from 'axios';
import Movie from './Movie';


const MovieList = ({title, setSelectedMovie}) => {

  const [movies, setMovies] = useState([]);

  const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=976c40fe';

  useEffect(() => {
    axios.get(url)
      .then(res => {
        const movies = res.data;        
        setMovies(movies.Search)
      })    
  }, [])

  return (
    <div>
      <h1>{title}</h1>
      <div className='movie-list'>
        {movies.map((movie) => {
          return <Movie 
            key={movie.imdbID} 
            title={movie.Title} 
            poster={movie.Poster} 
            year={movie.Year} 
            type={movie.Type}
            setSelectedMovie={setSelectedMovie}
          />
        })}    
      </div>
    </div>
  )
}

export default MovieList
