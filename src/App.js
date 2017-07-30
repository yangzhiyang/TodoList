import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './App.css';
import './reset.css';
import 'normalize.css';


class App extends Component {
  constructor(...args){
    super(...args)

    this.state = {
      newTodo: '',
      todoList: [
        {id:1,title:'第一个事项'},
        {id:2,title:'第二个事项'},
        {id:3,title:'第三个事项'}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return <li>
        <TodoItem todo={item}/>
      </li>
    })
    return (
      <div className="App">
       <h1>我的待办</h1>
       <TodoInput content={this.state.newTodo}
       onChange={this.changeTitle.bind(this)}/>
       <ol>
         {todos}
       </ol>
      </div>
    );
  }
  changeTitle(e){
    this.setState({
      newTodo: e.target.value,
      todoList: this.state.todoList
    })
  }
}

export default App;
