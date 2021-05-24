class note {
  constructor(id, dueAt, title, importance, finishedAt, description) {
    this.id = id;
    this.dueAt = dueAt;
    this.title = title;
    this.importance = importance;
    this.finishedAt = finishedAt;
    this.description = description;
  }
}

const notes = [
    new Note(
        1,
        '2020-08-08',
        'Titel',
        3,
        '2020-08-09',
        'Beschreibung',
    ),
];

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
