export default class Note {
  constructor(id, title, description, dueDate, importance, completionDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.createdDate = new Date();
    this.importance = importance;
    this.completionDate = new Date(completionDate);
    this.done = false;
  }
}
