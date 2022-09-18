import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.maxChar = 50;

        this.state = {
            title: '',
            body: '',
            charRemain: this.maxChar,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const limit = 50;
        const titleInput = event.target.value.slice(0, limit);
        const titleInputLength = titleInput.length;

        this.setState(() => {
            return {
                title: titleInput,
                charRemain: limit - titleInputLength,
            };  
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        const date = new Date();

        this.props.addNote({
            id: +new Date(),
            title: this.state.title,
            body: this.state.body,
            archived: false,
            createDate: date.toISOString(),
        });
        this.onResetEventHandler();
        this.setState(() => {
            return {
                charRemain: this.maxChar,
            };
        });
        alert('Your note is succesful added.');
    }

    onResetEventHandler() {
        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        });
    }

    render() {
        return(
            <div className='note-input'>
                <h2>
                    <FontAwesomeIcon className='icon' icon="fas fa-plus-square" />
                    Add Note
                </h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <input 
                        className='noteInput-title' 
                        type='text' 
                        placeholder='Add title...'
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                        onInput={this.onInputChangeHandler}
                        required
                    />
                    <p className='noteInput-titleCharLimit'>
                        Title remain: <span>{this.state.charRemain }</span>
                    </p>
                    <textarea 
                        className='noteInput-body' 
                        type='text' 
                        placeholder='Write note here...' 
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler}
                        required
                    >
                    </textarea>
                    <div className='noteInput-btn'>
                        <button type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NoteInput;