import React, {useState} from 'react'

const SearchBox = ({setSelectedMovie}) => {

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedMovie(inputValue)
  }

  return (
    <div className='search-box'>
      <form onSubmit={handleSubmit}>
        <input
          className='form-control'
          onChange={(event) => setInputValue(event.target.value)}
          placeholder='Type to search...'
			  ></input>
        <button>Submit</button>
      </form>
			
    </div>
  )
}

export default SearchBox
