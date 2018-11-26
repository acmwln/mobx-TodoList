import React, { Component } from "react";
import {observer,PropTypes as ObservablePropTypes} from 'mobx-react';
import PropTypes from 'prop-types';


@observer
export default class TodoItem extends Component{
  static propTypes = {
    todo:PropTypes.shape({
      id:PropTypes.number.isRequired,
      title:PropTypes.string.isRequired,
      finished:PropTypes.bool.isRequired
    }).isRequired
  };

  handleCheckChange = (e) => {
    this.props.todo.toggle();
  }

  render(){
    const todo = this.props.todo;
    
    return <li>
            <input
                type="checkbox"
                checked={todo.finished}
                onChange={this.handleCheckChange}
              />
              <span className = {[todo.finished && 'finishedItem']}>{todo.title}</span>
          </li>
  }
}

