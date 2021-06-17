import {noteService} from '../services/note-service.js';

const btnSave = document.getElementById('btnSave');

function refreshNoteView(note) {
  document.getElementById('#title').value = note.title;
  document.getElementById('#description').value = note.description;
  document.getElementById('#importance').value = note.importance;
  document.getElementById('#dueAt').value = note.dueAt;
}

function initEventHandlers() {
  btnSave.addEventListener('click', () => {
    noteService.createNote(9, document.getElementById('#title').value,
        document.getElementById('#description').value,
        document.getElementById('#dueAt').value,
        document.getElementById('#importance').value)
               .then((res) => {
                 res.ok ? res.json() : console.log('createNotePromise', res.json());
               })
               .catch(console.log);
    // document.location.href = `${window.location.origin}/index.html`;
    console.warn('todo: redirect to übersicht');
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
                                  res.join();
                                });
  console.log('note-controller35', id, note);
  await refreshNoteView(note)
  .then((res) => {
    res.join();
  });
}

await initialize();
