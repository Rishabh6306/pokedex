import React from 'react'
import './Pokemon.css'

function Pokemon({ name, url }) {
  return (
    <div className='pokemon-container'>
      <div className='pokemon-name'>{name}</div>
      <img className='pokemon-image' src={url} alt="img" />
    </div>
  )
}

export default Pokemon
