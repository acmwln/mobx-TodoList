import React from "react";
import {action,computed,observable } from 'mobx';
import {observer,PropTypes as observablePropTypes} from 'mobx-react';
import PropTypes from 'prop-types';

import TodoItem from "./TodoItem";

@observer
export default class TodoList extends React.Component {
  static propTypes = {
    store:PropTypes.shape({
      createTodo:PropTypes.func,
      todos:observablePropTypes.observableArrayOf(observablePropTypes.observableObject).isRequired
    }).isRequired
  };
  //初始化inputValue
  state = {
    inputValue:''
  };

  @action
  handleSubmit = (e) => {
    e.preventDefault();   
    var inputValue = this.state.inputValue;
    this.props.store.createTodo(inputValue);
    this.setState({
      inputValue: ""
    })
  }
  
  @action
  handleChange = (e)=> {
    var inputValue = e.target.value;
    this.setState({
      inputValue
    })
  }

  render() {
    console.log('this.props.store,',this.props.store)
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            New Todo:
            <input
              type="text"
              value = {this.state.inputValue}
              placeholder = "what needs to be finished?"
              onChange={this.handleChange}
              className = "inputStyle"
            />
            <button type="submit" className = "addButton">Add</button>
          </form>
          <hr />
          <ul>
            {this.props.store.todos.map(todo => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </ul>
          Tasks left: {this.props.store.unfinishedTodoCount}
        </div>
    );
  }
}

