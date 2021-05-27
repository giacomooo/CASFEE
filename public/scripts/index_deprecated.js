/* eslint-disable no-console */

// eslint-disable-next-line max-classes-per-file
class NotesController {
  constructor(notesModel, notesView) {
    this.notesModel = notesModel;
    this.notesView = notesView;

    this.onNoteListChanged(this.notesModel.notes);
  }

//  const btnTheme = document.getElementById('btnTheme');
  //   const btnAddNote = document.getElementById('btnAddNote');
  //   const btnShowFinished = document.getElementById('btnShowFinished');
  //   const btnSort = document.getElementById('btnSort');

    // btnTheme.addEventListener('click', () => {
    //   console.log(btnTheme.options[btnTheme.selectedIndex].value);
    //   document.body.classList.toggle(btnTheme.options[btnTheme.selectedIndex].value);
    //   // document.body.classList.toggle('dark-theme');
    // });

  // btnAddNote.addEventListener('click', () => {
  //   console.log('addClicked');
  // });

  // btnShowFinished.addEventListener('click', () => {
  //   console.log('ShowFinishedClicked');
  // });

  // btnSort.addEventListener('click', () => {
  //   console.log('sort', btnSort.value);
  // });
  //

  onNoteListChanged(notes) {
    this.notesView.refreshNotes(notes);
  }
}

class NotesModel {
  constructor() {
    this.description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
      + 'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et'
      + 'justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor';
    this.notes = [];
    this.addNote('CAS-FEE.....', 'nächsten Mittwoch', this.description, 'importance2', 'today');
    this.addNote('2nd Title', 'kein Datum', this.description, 'unwichtig', undefined);
    // console.log(this.notes);
  }

  addNote(title, dueDate, description, importance, finishedAt) {
    const note = {
      id: 1,
      title,
      dueDate,
      description,
      importance,
      finishedAt,
    };
    this.notes.push(note);
  }
}

class NotesView {
  constructor() {
    this.app = this.getElement('#entriesId');

    this.notesList = this.createElement('div', 'entries');

    this.app.append(this.notesList);
    // get _noteTitel() {
    //   return this.title.value;
    // }

    // _resetInput() {
    //   this.title.value = '';
    // }
  }

  createElement(tag, className) {
    // console.log(className);
    this.className = className;
    const element = document.createElement(tag);
    if (className) element.classList.add(this.className);

    return element;
  }

  getElement(selector) {
    //    console.log(selector, this.document);
    this.selector = selector;
    const element = document.querySelector(this.selector);
    return element;
  }

  refreshNotes(notes) {
    // console.log('?', notes);
    notes.forEach((note) => {
      const dueDate = this.createElement('div', 'col1');
      dueDate.textContent = note.dueDate;
      this.notesList.append(dueDate);

      const title = this.createElement('div', 'col2');
      title.textContent = note.title;
      this.notesList.append(title);

      const importance = this.createElement('div', 'col3');
      importance.textContent = note.importance;
      this.notesList.append(importance);

      const finishedAt = this.createElement('div', 'col1');
      finishedAt.textContent = note.finishedAt;
      this.notesList.append(finishedAt);

      const description = this.createElement('div', 'col2x');
      description.textContent = note.description;
      this.notesList.append(description);

      const btnUpdate = this.createElement('button', 'col4');
      btnUpdate.textContent = 'Edit';
      this.notesList.append(btnUpdate);
    });
  }
}

// eslint-disable-next-line no-unused-vars
const app = new NotesController(new NotesModel(), new NotesView());
