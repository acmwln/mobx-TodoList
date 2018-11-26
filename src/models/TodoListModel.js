import { observable, computed, action } from "mobx";
import TodoModel from "./TodoModel";

export default class TodoListModel {
  @observable todos = [];

  @action.bound
  createTodo(title) {
    this.todos.push(new TodoModel(title));
  }

  @computed
  get unfinishedTodoCount(){
    return this.todos.filter(todo=>!todo.finished).length;
  }
}