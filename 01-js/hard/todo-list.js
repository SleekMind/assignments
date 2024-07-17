class Todo {
  constructor() {
    this.todos = [];
  }

  add(task) {
    this.todos.push(task);
  }

  remove(index) {
    if (index < 0 || index >= this.todos.length) return;
    this.todos.splice(index, 1);
  }

  update(index, new_task) {
    if (index < 0 || index >= this.todos.length) return;
    this.todos[index] = new_task;
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    if (index < 0 || index >= this.todos.length) return null;
    return this.todos[index];
  }

  clear() {
    this.todos.length = 0;
  }
}

module.exports = Todo;
