import {httpService} from './http-service.js';

export default class NoteService {
  constructor() {
    this.direction = -1;
    this.isFilterSet = false;
    this.sortField = '';
    this.notes = [];
  }

  async loadData() {
    const response = await httpService.ajax('GET', '/notes', undefined);
    this.notes = response;
    return response;
  }

  async saveNote(id, title, description, dueDate, importance, completionDate) {
    if (id === '') {
      await this.createNote(title, description, dueDate, importance, completionDate);
      return;
    }
    await this.updateNote(id, title, description, dueDate, importance, completionDate);
  }

  async createNote(title, description, dueDate, importance, completionDate) {
    const response = await httpService.ajax('POST', '/notes', {
      title,
      description,
      dueDate,
      importance,
      completionDate,
    });
    return response;
  }

  async updateNote(id, title, description, dueDate, importance, completionDate) {
    const response = await httpService.ajax('PUT', '/notes', {
      id,
      title,
      description,
      dueDate,
      importance,
      completionDate,
    });
    return response;
  }

  async getNote(id) {
    const response = await httpService.ajax('GET', `notes/${id}`);
    return response;
  }

  async deleteNote(id) {
    const response = await httpService.ajax('DELETE', `notes/${id}`);
    return response;
  }

  async filter() {
    this.isFilterSet = !this.isFilterSet;
    this.notes = this.isFilterSet ? this.notes.filter((n) => n.done === this.isFilterSet) :
        await this.loadData();
  }

  sort(field) {
    if (field === this.sortField) {
      this.direction *= -1;
    }

    this.sortField = field;

    this.notes.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1 * this.direction;
      }

      if (a[field] > b[field]) {
        return this.direction;
      }
      return 0;
    });
  }
}

export const noteService = new NoteService();
