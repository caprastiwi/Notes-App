import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({
    id,
    title,
    createDate,
    showDate,
    body,
    isArchived,
    onDelete,
    onArchive
}) {
    return(
        <div className='note-item'>
            <NoteItemContent
                title={title}
                createDate={showDate(createDate)}
                body={body}
            />
            <NoteItemAction
                id={id}
                onDelete={onDelete}
                onArchive={onArchive}
                isArchived={isArchived}
            />
        </div>
    )
}

export default NoteItem;