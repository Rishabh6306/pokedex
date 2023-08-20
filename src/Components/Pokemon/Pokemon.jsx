// Import necessary dependencies and CSS for styling
import './Pokemon.css';
import { Link } from 'react-router-dom';

// Define the Pokemon component
function Pokemon({ name, url, id }) {
    return (
        // Create a Link that navigates to the specific Pokemon's details page
        <Link to={`/pokemon/${id}`} className='pokemon-wrapper'>
            {/* Display the individual Pokemon entry */}
            <div className='pokemon'>
                {/* Display the Pokemon's name */}
                <div className='pokemon-name'>{name}</div>
                
                {/* Display the Pokemon's image */}
                <img className='pokemon-image' src={url} alt={name} />
            </div>
        </Link>
    );
}

// Export the Pokemon component as the default export
export default Pokemon;