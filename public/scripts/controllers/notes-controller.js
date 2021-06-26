import {noteService} from '../services/note-service.js';
import {note_template} from '../templates/note-template.js';

const notesTemplateCompiled = Handlebars.compile(note_template);

const notesContainer = document.getElementById('notes-container');
const btnSortCreated = document.getElementById('btnSortCreated');
const btnSortFinished = document.getElementById('btnSortFinished');
const btnSortImportance = document.getElementById('btnSortImportance');
const btnTheme = document.getElementById('btnTheme');
const btnShowFinished = document.getElementById('btnShowFinished');
// const btnDelete = document.getElementById('btnDelete');

function refreshNotesView() {
  notesContainer.innerHTML = notesTemplateCompiled(
      {notes: noteService.notes},
      {allowProtoPropertiesByDefault: true},
  );
}

function sort(fieldId) {
  noteService.sort(fieldId);
  refreshNotesView();
}

async function filter() {
  await noteService.filter();
  refreshNotesView();
}

function initEventHandlers() {

  btnSortCreated.addEventListener('click', (event) => {
    btnSortFinished.className = '';
    btnSortImportance.className = '';
    btnSortCreated.classList.add('active_button');
    sort(event.target.dataset.fieldId);
  });

  btnSortFinished.addEventListener('click', (event) => {
    btnSortFinished.classList.add('active_button');
    btnSortImportance.className = '';
    btnSortCreated.className = '';
    sort(event.target.dataset.fieldId);
  });

  btnSortImportance.addEventListener('click', (event) => {
    btnSortFinished.className = '';
    btnSortImportance.classList.add('active_button');
    btnSortCreated.className = '';
    sort(event.target.dataset.fieldId);
  });

  btnTheme.addEventListener('change', (event) => {
    document.body.className = '';
    document.body.classList.add(event.target.value);
  });

  btnShowFinished.addEventListener('click', () => {
    btnShowFinished.classList.add('active_button');
    filter();
  });

  // async funciton btnDeleteFunc(element){
  //   noteService.deleteNote(element.id);
  // }
  // // Buttons werden zu spät gerendert todo: delete fertigstellen
  // btnDelete.addEventListener('click', (e) => {
  //   console.log("ddddd", e)
  // //   const x = noteService.deleteNote(e.id);
  // });
}

async function initialize() {
  initEventHandlers();
  await noteService.loadData()
                   .then(() => {
                   });
  refreshNotesView();
}

await initialize();
