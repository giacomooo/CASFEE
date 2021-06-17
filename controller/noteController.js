import {noteStore} from '../services/noteStore.js';

export class NotesController {
  async createNote(req, res) {
    res.json(await noteStore.add(req.body.title, req.body.description, req.body.dueDate,
        req.body.importance));
  }

  async loadNotes(req, res) {
    res.json(await noteStore.all());
  }

  async getNoteById(req, res) {
    console.log('controller-server', req.params['idx'], req.params.idx, req.query);
    res.json(await noteStore.get('VqA9w7YLeW3WClr2'));
  }
}

export const notesController = new NotesController();
