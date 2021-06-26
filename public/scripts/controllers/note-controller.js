import {noteService} from '../services/note-service.js';

const btnSave = document.getElementById('btnSave');

function format(date) {
  if (!date) return null;

  date = new Date(date);

  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  return year + '-' + month + '-' + day;
}

function refreshNoteView(note) {
  document.getElementById('#id').value = note.id;
  document.getElementById('#title').value = note.title;
  document.getElementById('#description').value = note.description;
  if (note.importance != null) document.getElementById(`#importance${note.importance}`).checked = true;
  document.getElementById('#dueDate').value = format(note.dueDate);
  document.getElementById('#completionDate').value = format(note.completionDate);
  return note;
}

function initEventHandlers() {
  btnSave.addEventListener('click', () => {

    const importance = document.querySelector('input[name="importance"]:checked');

    noteService.saveNote(
        document.getElementById('#id').value,
        document.getElementById('#title').value,
        document.getElementById('#description').value,
        document.getElementById('#dueDate').value,
        importance?.value,
        document.getElementById('#completionDate').value)
               .then((res) => {
                 return res;
               });
    window.location.href = './index.html';
  });
}

async function initialize() {
  initEventHandlers();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');
  if (!id) return;
  const note = await noteService.getNote(id)
                                .then((res) => {
                                  return res;
                                });
  await refreshNoteView(note);
}

await initialize();
