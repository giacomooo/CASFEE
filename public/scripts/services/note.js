export class Note {
  constructor(id, dueAt, title, importance, finishedAt, description, createdAt) {
    this.id = id;
    this.dueAt = dueAt;
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
      dueAt: this.dueAt,
      title: this.title,
      importance: this.importance,
      description: this.description,
      finishedToday: this.finishedToday,
      isFinished: this.isFinished,
      createdAt: this.createdAt,
    };
  }
}

// function compareSongs(s1, s2) {
//   return s2.rating - s1.rating;
// }
//
// function songsSorted() {
//   return [...songs].sort(compareSongs);
// }
//
// function findSong(id) {
//   return songs.find((song) => parseInt(id) === parseInt(song.id));
// }

// function rateSong(songId, delta) {
//   const song = findSong(songId);
//
//   if (song) {
//     song.rating += delta;
//     return true;
//   }
//   return false;
// }
