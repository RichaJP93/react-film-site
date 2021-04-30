import React, {useState} from 'react'
import Carousel from './components/Carousel';
import MovieList from './components/MovieList';
import MovieDetails from './MovieDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


const App = () => {

  const [selectedMovie, setSelectedMovie] = useState('');

  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div className="carousel-container" >
        <Carousel />
      </div>
      <div className="film-grid-container" >
        <MovieList title='Star Wars' setSelectedMovie={setSelectedMovie}/>
      </div>
      <div className="film-grid-container" >
        <MovieList title='Alien' setSelectedMovie={setSelectedMovie}/>
      </div>
      <div className="film-grid-container" >
        <MovieList title='Harry Potter' setSelectedMovie={setSelectedMovie}/>
      </div>
      <div className="movie-details">
        {selectedMovie !== '' ? 
          <MovieDetails movie={selectedMovie}/>
        :
         <></>
        }
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
