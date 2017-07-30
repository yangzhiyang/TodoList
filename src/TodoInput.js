import React,{Component} from 'react';
import './TodoInput.css'

class TodoInput extends Component{

    render(){
        return <input className="TodoInput" type="text" value={this.props.content}
        onChange={this.changeTitle.bind(this)}
        onKeyPress={this.submit.bind(this)}/>
    }
    changeTitle(e){
        this.props.onChange(e)
    }
    submit(e){
        if(e.key==='Enter'){
            this.props.onSubmit(e)
        }
    }
}

export default TodoInput;