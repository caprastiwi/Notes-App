import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NoteFooter() {
    return (
        <div className='note-footer'>
            <div className='footer-left'>
                <h1>Azhari</h1>
                <p>All I wanna do is, <span>fly high!</span></p>
            </div>
            <div className='footer-right'>
                <a
                className='footer-icon'
                href='https://twitter.com/Azhprstw'>
                    <FontAwesomeIcon className='social-icon' icon='fab fa-twitter' />
                </a>
                <a
                className='footer-icon'
                href='https://instagram.com/Azhprstw'>
                    <FontAwesomeIcon className='social-icon' icon='fab fa-instagram' />
                </a>
                <a
                className='footer-icon'
                href='https://linkedin.com/in/caprastiwi'>
                    <FontAwesomeIcon className='social-icon' icon='fab fa-linkedin-in' />
                </a>
                <a
                className='footer-icon'
                href='https://github.com/caprastiwi'>
                    <FontAwesomeIcon className='social-icon' icon='fab fa-github' />
                </a>
            </div>
        </div>
    );
}

export default NoteFooter;