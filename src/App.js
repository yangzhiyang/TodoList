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
       onChange={this.changeTitle.bind(this)}
       onSubmit={this.addTodo.bind(this)}/>
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
  addTodo(e){
    this.state.todoList.push({
      id: idMaker(),
      title: e.target.value,
      status: null,
      deleted: false
    })
    //添加todo后初始输入框
    this.setState({
      newTodo:'',
      todoList: this.state.todoList
    })
  }
}

export default App;
let id = 0;
function idMaker(){
  id +=1
  return id
}
