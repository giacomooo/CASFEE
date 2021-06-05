import {noteService} from '../services/note-service.js';

const notesTemplateCompiled = Handlebars.compile(document.getElementById('notes-list-template').innerHTML);

const notesContainer = document.getElementById('notes-container');
const btnSortCreated = document.getElementById('btnSortCreated');
const btnSortFinished = document.getElementById('btnSortFinished');
const btnSortImportance = document.getElementById('btnSortImportance');
const btnTheme = document.getElementById('btnTheme');
const btnShowFinished = document.getElementById('btnShowFinished');

function showNotes() {
  notesContainer.innerHTML = notesTemplateCompiled(
      {notes: noteService.notes},
      {allowProtoPropertiesByDefault: true},
  );
}

function refreshNotesView() {
  showNotes();
}

function sort(fieldId) {
  noteService.sort(fieldId);
  refreshNotesView();
}

function filter() {
  noteService.filter();
  refreshNotesView();
}

function initEventHandlers() {
  function btnEditFunc(element) {
    document.location.href = `${window.location.origin}/note.html?id=${element.dataset.noteId}`;
  }

  btnSortCreated.addEventListener('click', (event) => {
    sort(event.target.dataset.fieldId);
  });

  btnSortFinished.addEventListener('click', (event) => {
    sort(event.target.dataset.fieldId);
  });

  btnSortImportance.addEventListener('click', (event) => {
    sort(event.target.dataset.fieldId);
  });

  btnTheme.addEventListener('change', (event) => {
    document.body.className = '';
    document.body.classList.add(event.target.value);
  });

  btnShowFinished.addEventListener('click', () => {
    filter();
  });

  notesContainer.addEventListener('click', (event) => {
    btnEditFunc(event.target);
  });
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
