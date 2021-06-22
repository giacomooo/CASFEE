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

  async saveNote(id, title, description, dueDate, importance) {
    console.log('save', id);
    if (id == '') {
      await this.createNote(title, description, dueDate, importance);
      return;
    }
    await this.updateNote(id, title, description, dueDate, importance);
  }

  async createNote(title, description, dueDate, importance) {
    const response = await httpService.ajax('POST', '/notes', {
      title,
      description,
      dueDate,
      importance
    });
    return response;
  }

  async updateNote(id, title, description, dueDate, importance) {
    console.log('client update', id);
    const response = await httpService.ajax('PUT', '/notes', {
      id,
      title,
      description,
      dueDate,
      importance
    });
    return response;
  }

  async getNote(id) {
    const response = await httpService.ajax('GET', `notes/${id}`);
    return response;
  }

  filter() {
    this.isFilterSet = !this.isFilterSet;
    // eslint-disable-next-line max-len
    this.notes = this.isFilterSet ? this.notes.filter((n) => n.finishedAt != null) : this.loadData();
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
