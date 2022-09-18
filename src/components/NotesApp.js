import React from 'react';
import { getData, showFormattedDate } from '../data';
import NoteHeader from './Header';
import NoteBody from './Body';
import NoteFooter from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTrashAlt, faArchive, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
            searchedNotes: [],
            searchByTitle: '',
        }
        library.add(fab, faTrashAlt, faArchive, faPlusSquare );
        
        this.onDeletedHandler = this.onDeletedHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onDeletedHandler(id) {
        const updatedNotes = this.state.notes.filter(note => note.id !== id);
        this.setState(() => {
            return {
                notes: updatedNotes
            }
        });
    }

    onArchivedHandler(id) {
        const updatedNotes = this.state.notes.filter((note) => note.id === id).map((note) => note.archived = !note.archived);
        this.setState(() => {
            return {
                updatedNotes
            }
        });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createDate: new Date(),
                        archived: false,
                    }
                ]
            }
        });
    }

    onSearchEventHandler(searchedTitle) {
        let searchedNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(searchedTitle.toLocaleLowerCase()));
        if (this.state.searchByTitle.length >= 0) {
          this.setState({ searchedNotes: null });
          this.setState({ searchedNotes: searchedNotes });
        } else {
          this.setState({ searchedNotes: null });
          this.setState({ searchedNotes: this.state.notes });
        }
    }

    onSearchChangeEventHandler(event) {
        this.setState(() => {
          return {
            searchByTitle: event.target.value,
          };
        });
        this.onSearchEventHandler(event.target.value);
    }

    render() {
        return(
            <>
            <NoteHeader
                onSearchChange={this.onSearchChangeEventHandler}
                searchByTitle={this.state.searchByTitle}
            />
            <NoteBody
                notes={this.state.notes}
                onDelete={this.onDeletedHandler}
                onArchive={this.onArchivedHandler}
                addNote={this.onAddNoteHandler}
                showDate={showFormattedDate}
                searchedNotes={this.state.searchedNotes}
                searchedTitle={this.state.searchByTitle}
            />
            <NoteFooter />
            </>
           
        );
    }
}

export default NotesApp;