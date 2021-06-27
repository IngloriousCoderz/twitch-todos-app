const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

let todos = [
  { id: 1, text: "Learn Express", done: true },
  { id: 2, text: "Look for a job", done: false },
  { id: 3, text: "Forget everything" },
];

app.get("/todos", (request, response) => {
  response.send(todos);
});

app.post("/todos", (request, response) => {
  const maxId = todos.length ? todos[todos.length - 1].id : 0;
  const todo = { ...request.body, id: maxId + 1 };
  todos.push(todo);
  response.send(todo);
});

app.patch("/todos/:id", (request, response) => {
  const index = todos.findIndex((todo) => todo.id === +request.params.id);
  todos[index] = { ...todos[index], ...request.body };
  response.send(todos[index]);
});

app.delete("/todos/:id", (request, response) => {
  const index = todos.findIndex((todo) => todo.id === +request.params.id);
  const [todo] = todos.splice(index, 1);
  response.send(todo);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
