export default class Note {
  constructor(id, title, description, dueDate, importance) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.createdDate = new Date();
    this.importance = importance;
    this.done = false;
  }
}
