import React from 'react';
import SearchBox from './SearchBox';

const Header = ({setSelectedMovie}) => {

  return (
    <div className='header'>
      <h1>Flix Buster</h1>
      <div className='search-box-container'>
        <SearchBox setSelectedMovie={setSelectedMovie} ></SearchBox>
      </div>
    </div>
  )
}

export default Header
