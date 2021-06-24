export class Note {
  constructor(id, dueDate, title, importance, completionDate, description, createdAt) {
    this.id = id;
    this.dueDate = dueDate;
    this.title = title;
    this.importance = importance;
    this.completionDate = completionDate;
    this.description = description;
    this.isFinished = Boolean(this.completionDate);
    this.finishedToday = this.isFinishedToday(completionDate);
    this.createdAt = createdAt;
  }

  isFinishedToday(completionDate) {
    const inputDate = new Date(completionDate);
    const todaysDate = new Date();
    return inputDate.setHours(0, 0, 0, 0) ===
        todaysDate.setHours(0, 0, 0, 0);
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
      completionDate: this.completionDate,
    };
  }
}
