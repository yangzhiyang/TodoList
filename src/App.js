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
    let todos = this.state.todoList.filter((item=>!item.deleted)).map((item,index)=>{
      return <li key={item.id}>
        <TodoItem todo={item} onToggle={this.toggle.bind(this)}
        onDelete={this.delete.bind(this)}/>
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
  delete(e,todo){
    todo.deleted = true
    this.setState(this.state)
  }
  toggle(e, todo){
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
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
