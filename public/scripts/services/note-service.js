import {Note} from './note.js';

export class NoteService {
  constructor() {
    this.notes = [];
  }

  loadData() {
    const defaultNote = new Note(2, '2020-08-19', 'Some2Titel', 5, '', '22222222222222 lasfjsalfjjl lsj lkj sfljs f', '2020-03-08');
    const myNote = new Note(
        1,
        '2020-08-08',
        'Titel',
        3,
        '2020-08-09',
        'Beschreibung',
        '2020-08-08',
    );
    this.notes.push(defaultNote);
    this.notes.push(myNote);

    this.notes.push(new Note(3, '2020-01-20', 'Some33Titel', 1, '2021-05-27', '33333333333333333 lasfjsalfjjl lsj lkj sfljs f', '2020-01-08'));
  }

  sort(field) {
    this.notes.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      }

      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    });
  }
}

export const noteService = new NoteService();
