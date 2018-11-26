  import React from "react";
  import { render } from "react-dom";
  import DevTools from "mobx-react-devtools";

  import TodoList from "./components/TodoList";
  import TodoListModel from "./models/TodoListModel";
  import TodoModel from "./models/TodoModel";

  const store = new TodoListModel();

  render(
    <div>
      <DevTools />
      <TodoList store={store} />
    </div>,
    document.getElementById("root")
  );

  store.createTodo("Get Coffee");
  store.createTodo("Write simpler code");
  store.todos[0].finished = true;

  // playing around in the console
  window.store = store;



