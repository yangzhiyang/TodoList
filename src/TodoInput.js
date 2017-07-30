import React,{Component} from 'react';

class TodoInput extends Component{

    render(){
        return <input type="text" value={this.props.content}
        onChange={this.changeTitle.bind(this)}
        onKeyPress={this.submit}/>
    }
    changeTitle(e){
        this.props.onChange(e)
    }
    submit(e){
        if(e.key==='Enter'){
            console.log('按下了回车')
        }
    }
}

export default TodoInput;