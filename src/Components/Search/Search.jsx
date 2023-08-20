// Import necessary dependencies and associated CSS for styling
import useDebounce from '../../hooks/useDebounce'; // Custom Hook for debouncing
import './Search.css'; // Import associated CSS for styling

// Define the Search component
function Search({ updateSearchTerm }) {
    // Use the debounce hook to delay the update of search term
    const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value));

    return (
        // Input field for searching for a Pokemon
        <input 
            id='search-pokemon'
            type="text" 
            placeholder="Which Pokemon are you looking for?" 
            onChange={debounceUpdateSearch} // Attach the debounced event handler for updating the search term
        />
    )
}

// Export the Search component as the default export
export default Search;