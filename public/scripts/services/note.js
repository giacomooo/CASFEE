export class Note {
  constructor(id, dueDate, title, importance, finishedAt, description, createdAt) {
    this.id = id;
    this.dueDate = dueDate;
    this.title = title;
    this.importance = importance;
    this.finishedAt = finishedAt;
    this.description = description;
    this.isFinished = Boolean(this.finishedAt);
    this.finishedToday = this.isFinishedToday(finishedAt);
    this.createdAt = createdAt;
  }

  isFinishedToday() {
    const inputDate = new Date(this.finishedAt);
    const todaysDate = new Date();
    return inputDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0);
  }

  toJSON() {
    return {
      id: this.id,
      dueDate: this.dueDate,
      title: this.title,
      importance: this.importance,
      description: this.description,
      finishedToday: this.finishedToday,
      isFinished: this.isFinished,
      createdAt: this.createdAt,
    };
  }
}
