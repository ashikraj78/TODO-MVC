import React from "react"
import { v4 as uuid } from "uuid";

class Input extends React.Component{
    constructor(){
        super();
        this.state={
            text : ""
        };
    }
    handleText = (event) => {
        this.setState({ text: event.target.value });
    };
  
    keyPressed =(event)=>{
        if(event.keyCode===13){
            this.props.addTodo({
              text: this.state.text,
              isDone: false,
              id :uuid()
            })
        }
        this.setState({text:""});
    }

    render(){
        return(
            <input type="text"
                    placeholder="Todos..."
                    className="input"
                    onChange={this.handleText}
                    onKeyUp={this.keyPressed}
                    value={this.state.text}
            />
        )
    }
}
export default Input;
