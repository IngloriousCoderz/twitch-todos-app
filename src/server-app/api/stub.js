let todos = [
  { id: 1, text: "Learn React", done: true },
  { id: 2, text: "Seek for a job", done: false },
  { id: 3, text: "Forget everything" },
];

export async function fetchAll(collection) {
  return todos;
}

export async function create(collection, body) {
  const maxId = todos.length ? todos[todos.length - 1].id : 0;
  const todo = { ...body, id: maxId + 1 };
  todos = [...todos, todo];
  return todo;
}

export async function update(collection, id, body) {
  todos = todos.map((todo) => (todo.id === id ? { ...todo, ...body } : todo));
  return todos.find((todo) => todo.id === id);
}

export async function remove(collection, id) {
  const todo = todos.find((todo) => todo.id === id);
  todos = todos.filter((todo) => todo.id !== id);
  return todo;
}
