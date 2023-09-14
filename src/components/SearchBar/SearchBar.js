import React from 'react'
import './SearchBar.css'

function SearchBar() {
  return (
    <div className='SearchContainer'>
      <input type='text' placeholder='Mot clés: ville' className='searchInput'/>
    </div>
  )
}

export default SearchBar