import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import text from "./business-logic/todos/text";
import todos from "./business-logic/todos/todos";

import AppComponent from "./app";

const store = configureStore({
  reducer: { text, todos },
});

function App() {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
}

export default App;
