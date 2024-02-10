import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div id="search-bar">
     <form action="" id="search-form">
       <input
        id="search-input"
        type="text"
        placeholder="Enter your search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
       />
       <button id="search-btn" onClick={handleSearch}>GO</button>
      </form>
    </div>
  );
}

export default Search;
