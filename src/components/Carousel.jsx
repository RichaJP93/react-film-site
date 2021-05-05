import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {

  const [movies, setMovies] = useState([]);

  const url = 'http://www.omdbapi.com/?s=avengers&apikey=976c40fe';

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setMovies(res.data.Search)
      })    
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div>
      {movies.length === 0 ? <></>
      : 
      <div className="carousel-slideshow-container">
        <Slider {...settings}>
          {movies.map((movie)=> {
            if(movie.Type ==='movie'){
              return (
                <div key={movie.imdbID}>
                  <img className="carousel-image" src={movie.Poster} alt={movie.Title}/>
                </div>
              )
            }            
          })}          
        </Slider>
      </div> 
      }     
    </div>
  )
}

export default Carousel
