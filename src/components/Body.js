import NoteInput from './NoteInput';
import NoteList from './NoteList';
import EmptyMessage from './EmptyMessage';

function NoteBody({ notes, searchedNotes, searchedTitle, onDelete, addNote, onArchive, showDate }) {
    let activeNotes = null;
    let archivedNotes = null;
    
    if (searchedTitle.length > 0) {
        activeNotes = searchedNotes.filter((note) => note.archived === false);
        archivedNotes = searchedNotes.filter((note) => note.archived === true);
    } else {
        activeNotes = notes.filter((note) => note.archived === false);
        archivedNotes = notes.filter((note) => note.archived === true);
    }
    
    return (
    <div className='note-body'>
        <NoteInput addNote={addNote} />
        <h2>Active Note</h2>
        {activeNotes.length > 0 ?
            <NoteList
                notes={activeNotes}
                onDelete={onDelete}
                onArchive={onArchive}
                showDate={showDate}
            />:
            <EmptyMessage />}
        <h2>Archive</h2>
        {archivedNotes.length > 0 ?
            <NoteList
                notes={archivedNotes}
                onDelete={onDelete}
                onArchive={onArchive}
                showDate={showDate}
            />:
            <EmptyMessage />
        }
    </div>
    );
  }

  export default NoteBody;