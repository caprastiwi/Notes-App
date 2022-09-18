import React from 'react';
import NoteItem from './NoteItem';
 
function NoteList({
    notes,
    showDate,
    onDelete,
    onArchive
}) {
    return (
    <div className='notes-list'>
        {notes.map(note => (
        <NoteItem
            key={note.id}
            id={note.id}
            showDate={showDate}
            onDelete={onDelete}
            onArchive={onArchive}
            isArchived={note.archived}
            {...note}
        />
        ))}
   </div>
   );
}

export default NoteList;