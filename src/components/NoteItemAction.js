import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NoteItemAction({ id, onDelete, onArchive }) {
    return(
        <div className='noteItem-btn'>
            <button
                className='noteItem-deleteBtn'
                onClick={() => onDelete(id)}>
                    <FontAwesomeIcon className='icon' icon='trash-alt' />
                    Delete
            </button>
            <button
                className='noteItem-archiveBtn'
                onClick={() => onArchive(id)}>
                    <FontAwesomeIcon className='icon' icon='archive' />
                    Archive
            </button>
        </div>
    )
}

export default NoteItemAction;