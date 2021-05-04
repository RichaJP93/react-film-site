import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button} from '@material-ui/core'
import './MovieDetails.css'

const MovieDetails = ({movie, setSelectedMovie}) => {

  const [movieInfo, setMovieInfo] = useState({})

  const url = 'http://www.omdbapi.com/?t=' + movie + '&apikey=976c40fe';

  useEffect(() => {
    axios.get(url)
      .then(res => {        
        setMovieInfo(res.data);
      })    
  }, [movie])

  return (
    <div className="movie-details-container">
      <h1 className="movie-details-title">{movieInfo.Title}</h1>
      <div className="movie-details-poster-container">
        <img className="movie-details-poster" src={movieInfo.Poster} alt={movieInfo.Title}/>
      </div>
      <div className="movie-details-details">
        <h3>Details</h3>
        <ul className="movie-details-list">
          <li>Released: {movieInfo.Released}</li>
          <li>Genre: {movieInfo.Genre}</li>
          <li>Rated: {movieInfo.Rated}</li>
          <li>Runtime: {movieInfo.Runtime}</li>
          <li>Director: {movieInfo.Director}</li>
          <li>IMDB Rating: {movieInfo.imdbRating}</li>
        </ul>
      </div>  
      <div className="movie-details-summary">
        <h3>Summary</h3>
        <p>{movieInfo.Plot}</p>
      </div>          
      <Button className="movie-details-button" variant="contained" color="Primary" onClick={()=> {setSelectedMovie('')}} >
        Back
      </Button>
    </div>
  )
}

export default MovieDetails
