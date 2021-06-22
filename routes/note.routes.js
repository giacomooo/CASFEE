import express from 'express';
import {notesController} from '../controller/noteController.js';

const router = express.Router();

router.get('/', notesController.loadNotes.bind(notesController));
router.get('/:id', notesController.getNoteById.bind(notesController));
router.post('/', notesController.createNote.bind(notesController));
router.put('/', notesController.updateNote.bind(notesController));
// router.delete('/:id', notesController.deleteNote.bind(notesController));

export const noteRoutes = router;
