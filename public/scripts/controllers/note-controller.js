import {noteService} from '../services/note-service.js';

const btnSave = document.getElementById('btnSave');

function refreshNoteView(note) {
  console.log('refresh', note);
  document.getElementById('#title').value = note.title;
  document.getElementById('#description').value = note.description;
  document.getElementById('#importance').value = note.importance;
  document.getElementById('#dueAt').value = note.dueAt;
}

function initEventHandlers() {
  btnSave.addEventListener('click', (event) => {
    console.log('save Clicked', event);
  });
}

function initialize() {
  initEventHandlers();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const note = noteService.getNote(urlParams.get('id'));
  refreshNoteView(note);
}

initialize();
