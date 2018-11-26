
### 这是一个关于mobx和mobx-react的todolist
http地址: https://github.com/acmwln/mobx-TodoList.git
ssh地址: git@github.com:acmwln/mobx-TodoList.git
### Run the example

```
npm install
npm start

```

### mobx-react-todolist目录

* components:todoList 和 todoItem 两个组件

* models:TodoListModel 和 TodoItemModel 两个model其实相当于两个store

* index.js:入口文件,会生成一个store传进去组件

* index.html:页面html，这里我加了一些样式


```
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

```


```
export default class TodoModel {
  id = Math.random();
  @observable title = "";
  @observable finished = false;

  constructor(title) {
    this.title = title;
  }

  @action.bound 
  toggle() {
    this.finished = !this.finished
  }
}
```

