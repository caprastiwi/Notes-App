import React from 'react';
import SearchNote from './SearchNote';

function NoteHeader({ onSearchChange, searchByTitle }) {
    return(
        <div className='note-header'>
            <h1>Notes</h1>
            <SearchNote
                onSearchChange={onSearchChange}
                searchByTitle={searchByTitle}
            />
        </div>
    )
}

export default NoteHeader;