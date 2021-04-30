import React from 'react'
import Carousel from './components/Carousel';
import MovieList from './components/MovieList';
import Header from './components/Header';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div className="carousel-container" >
        <Carousel />
      </div>
      <div className="film-grid-container" >
        <MovieList title='Star Wars' />
      </div>
      <div className="film-grid-container" >
        <MovieList title='Alien'/>
      </div>
      <div className="film-grid-container" >
        <MovieList title='Jurassic Park'/>
      </div>
    </div>
  );
}

export default App;
