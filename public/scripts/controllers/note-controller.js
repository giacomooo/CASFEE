// import {moment} from '../../../node_modules/moment';
import { noteService } from '../services/note-service.js';

const notesTemplateCompiled = Handlebars.compile(document.getElementById('notes-list-template').innerHTML);

const notesContainer = document.getElementById('notes-container');

function showNotes() {
  notesContainer.innerHTML = notesTemplateCompiled(
      {notes: noteService.notes},
      {allowProtoPropertiesByDefault: true},
  );
}

function initEventHandlers() {
  notesContainer.addEventListener('click', (event) => {
    document.location.href = `../../note.html?id=${event.target.dataset.noteId}`;
  });
}

function refreshNotesView() {
  showNotes();
}

function initialize() {
   // console.log('init notesService', moment().format('YYYY-mm-dd'));
  // const dateStr = new Date().toDateString();
  // console.log(Math.abs(new Date() - new Date(dateStr.replace(/-/g, '/'))));
  initEventHandlers();
  noteService.loadData();
  refreshNotesView();
}

initialize();
