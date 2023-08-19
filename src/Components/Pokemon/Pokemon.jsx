// Import necessary dependencies
import React from 'react';
import './Pokemon.css';
import { Link } from 'react-router-dom';

// Component to display individual Pokemon
function Pokemon({ name, url, id }) {
  return (
    // Wrap each Pokemon in a link that navigates to its details page
    <Link to={`pokemon/${id}`} className='pokemon-wrapper'>
      <div className='pokemon-container'>
        {/* Display Pokemon name */}
        <div className='pokemon-name'>{name}</div>
        {/* Display Pokemon image */}
        <img className='pokemon-image' src={url} alt="img" />
      </div>
    </Link>
  );
}

export default Pokemon;