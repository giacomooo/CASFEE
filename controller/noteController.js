import {noteStore} from '../services/noteStore.js';

export class NotesController {
  async createNote(req, res) {
    res.json(await noteStore.add(
        req.body.id,
        req.body.title,
        req.body.description,
        req.body.dueDate,
        req.body.importance,
    ));
  }

  async loadNotes(req, res) {
    res.json(await noteStore.all());
  }

  async getNoteById(req, res) {
    res.json(await noteStore.get(req.params.id));
  }

  async updateNote(req, res) {
    res.json(await noteStore.mod(
        req.body.id,
        req.body.title,
        req.body.description,
        req.body.dueDate,
        req.body.importance,
    ));
  }
}

export const notesController = new NotesController();
