import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Carousel from './components/Carousel';
import Grid from './components/Grid';
import Header from './components/Header';
// import API_KEY from './config/config.env';


const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    axios.get(`http://www.omdbapi.com/?s=star_wars&apikey=976c40fe`)
      .then(res => {
        const movies = res.data;        
        setMovies(movies.Search)
      })    
  }, [])

  console.log(movies)
  return (
    <div className="App">
      <div className="navbar-container">
        <Header />
      </div>
      <div className="carousel-container" >
        <Carousel />
      </div>
      <div className="film-grid-container" >
        <Grid title='Star Wars' movies={movies}/>
      </div>
      {/* <div className="film-grid-container" >
        <Grid />
      </div> */}
    </div>
  );
}

export default App;
