import React,{Component} from 'react';

class TodoInput extends Component{

    render(){
        return <input type="text" value={this.props.content}
        onChange={this.changeTitle.bind(this)}/>
    }
    changeTitle(e){
        this.props.onChange(e)
    }
}

export default TodoInput;