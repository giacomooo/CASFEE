import Datastore from 'nedb-promise';
import Note from './note.js';

export default class NoteStore {
  constructor(db) {
    this.db = db || new Datastore({
      filename: './source/data/notes.db',
      autoload: true
    });
  }

  async all() {
    const notes = await this.db.find({});
    return notes;
  }

  async add(title, description, dueDate, importance) {
    const note = new Note(title, description, dueDate, importance);
    return await this.db.insert(note);
  }

  async get(_id) {
    console.log('storex', _id);
    const note = await this.db.find({_id: _id});
    console.log(note);
    return note;
  }
}

export const noteStore = new NoteStore();
