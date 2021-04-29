import React from 'react'
import Carousel from './components/Carousel';
import Grid from './components/Grid';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="carousel-container" >
        <Carousel />
      </div>
      <div className="film-grid-container" >
        <Grid />
      </div>
      <div className="film-grid-container" >
        <Grid />
      </div>
    </div>
  );
}

export default App;
