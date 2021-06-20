import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  fetchTodos,
  removeTodo,
  selectTodos,
  toggleDone,
} from "./business-logic/todos";
import Form from "./form";
import List from "./list";

export default function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleSubmit = (text) => dispatch(addTodo(text));
  const handleSpanClick = (id) => dispatch(toggleDone(id));
  const handleButtonClick = (id) => dispatch(removeTodo(id));

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <List
        todos={todos}
        onSpanClick={handleSpanClick}
        onButtonClick={handleButtonClick}
      />
    </>
  );
}
