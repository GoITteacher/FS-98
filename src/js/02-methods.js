/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

// const playlist = {
//   name: 'My amazing playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   changeName(newName) {
//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },

//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// console.log(playlist.getTrackCount());

// playlist.changeName('New playlist name');

// playlist.addTrack('new track 1');
// console.log(playlist.getTrackCount());

// playlist.addTrack('new track 2');
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);

// =========================================

const toDoList = {
  title: '',
  tasks: [],
  backgroundColor: 'red',
  owner: '',

  addTask(task) {
    this.tasks.push(task);
  },

  removeTask(id) {
    for (let i = 0; i < this.tasks.length; i++) {
      const currentTask = this.tasks[i];
      if (currentTask.id === id) {
        this.tasks.splice(i, 1);
      }
    }
  },

  updateTask(id, task) {},
  getTaskById(id) {},
  getPriorityTask() {},
};

toDoList.addTask({ id: 1, title: 'Task1' });
toDoList.addTask({ id: 2, title: 'Task2' });
toDoList.addTask({ id: 3, title: 'Task3' });
toDoList.addTask({ id: 4, title: 'Task4' });

console.log(toDoList);

toDoList.removeTask(3);

console.log(toDoList);
