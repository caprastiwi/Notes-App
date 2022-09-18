import React from 'react';

function SearchNote({ searchByTitle, onSearchChange }) {
    return(
        <div className='note-search'>
            <input
                type='text'
                placeholder='Search note...'
                value={searchByTitle}
                onChange={(event) => onSearchChange(event)}
            />
        </div>
    )
}

export default SearchNote;