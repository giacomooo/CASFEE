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

  async add(id, title, description, dueDate, importance) {
    const note = new Note(id, title, description, dueDate, importance);
    console.log('add', note);
    return await this.db.insert(note);
  }

  async mod(id, title, description, dueDate, importance) {
    const note = new Note(id, title, description, dueDate, importance);
    console.log('mod', note);
    return await this.db.update({_id: id},
        {
          $set: {
            title: title,
            description: description,
            dueDate: dueDate,
            importance: importance
          }
        });
  }

  async get(_id) {
    const note = await this.db.findOne({_id: _id});
    console.log('store get:', note);
    note.id = _id;
    return note;
  }
}

export const noteStore = new NoteStore();
