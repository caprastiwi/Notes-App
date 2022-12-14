import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesApp from './components/NotesApp';
import './styles/style.css';
import './styles/noteItem.css';
import './styles/noteInput.css';
import './styles/responsive.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <NotesApp />
);