import React from 'react'
import './Pokemon.css'
import { Link } from 'react-router-dom'

function Pokemon({ name, url, id }) {
  return (
    <Link to={`pokemon/${id}`} className='pokemon-wraaper'>
    <div className='pokemon-container'>
      <div className='pokemon-name'>{name}</div>
      <img className='pokemon-image' src={url} alt="img" />
    </div>
      </Link>
  )
}

export default Pokemon;