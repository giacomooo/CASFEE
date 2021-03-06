import Datastore from 'nedb-promise';
import Note from './note.js';

export default class NoteStore {
  constructor(db) {
    this.db = db || new Datastore({
      filename: './source/data/notes.db',
      autoload: true,
    });
  }

  async all() {
    return this.db.find({});
  }

  async add(id, title, description, dueDate, importance, completionDate) {
    const note = new Note(id, title, description, dueDate, importance, completionDate);
    return this.db.insert(note);
  }

  async mod(id, title, description, dueDate, importance, completionDate) {
    return this.db.update({_id: id},
        {
          $set: {
            title,
            description,
            dueDate,
            importance,
            completionDate,
          },
        });
  }

  async get(_id) {
    const note = await this.db.findOne({_id});
    note.id = _id;
    return note;
  }

  async delete(_id) {
    await this.db.delete({_id});
    return 'deleted';
  }
}

export const noteStore = new NoteStore();
