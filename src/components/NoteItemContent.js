import React from 'react';
 
function NoteItemContent({ title, createDate, body }) {
 return (
   <div className='noteItem-content'>
     <h3 className='noteItem-title'>{title}</h3>
     <p className='noteItem-date'>{createDate}</p>
     <p className='noteItem-body'>{body}</p>
   </div>
 );
}
 
export default NoteItemContent;