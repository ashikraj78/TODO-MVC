import React from "react";
import FooterArea from "./FooterArea"
import Input from "./Input";
import AllTodo from "./AllTodo";

class ToDoLists extends React.Component {
    constructor() {
        super();
        this.state = {
            sst: localStorage.getItem("Todo") ? JSON.parse(localStorage.getItem("Todo")) : [],
            activeTab: "all",
            counter: 0
        }
    }

    showSSTBank = () => {
        let showSST = [];
        switch (this.state.activeTab) {
            case "all":
                showSST = this.state.sst;
                break;
            case "completed":
                showSST = this.state.sst.filter(todo => todo.isDone);
                break;
            case "active":
                showSST = this.state.sst.filter(todo => !todo.isDone);
                break;
            default:
                showSST = this.state.sst;
                break;
        }
        return showSST;
    }

    changeTab = (tab) => {
        this.setState({ activeTab: tab })
    }

    clearFinished = () => {
        const updatedSST = this.state.sst.filter(todo => !todo.isDone);
        this.setState({ sst: updatedSST });
        localStorage.setItem("Todo", JSON.stringify(updatedSST));
    }

    functions = {
        showSSTBank: this.showSSTBank,
        clearFinished: this.clearFinished
    }

    addTodo=(todo)=>{
        this.setState({sst:[...this.state.sst, todo]},
            ()=>localStorage.setItem('Todo',JSON.stringify(this.state.sst))
        );
    };

    handleisDone = (id, event) => {
        this.setState({
          sst: this.state.sst.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                isDone: !todo.isDone
              };
            } else {
              return todo;
            }
          })
        });
      };
    
      handleDelete = (id, event) => {
        this.setState(
          { sst: this.state.sst.filter(todo => todo.id !== id) },
          () => localStorage.setItem("todos", JSON.stringify(this.state.todos))
        );
      };


    render() {
        return (
            <div>
                <Input addTodo={this.addTodo} />
                <AllTodo handleisDone={this.handleisDone} handleDelete={this.handleDelete}
                  showSSTBank={this.showSSTBank()} />
                <FooterArea data={this.functions} changeTab={this.changeTab} />
            </div>

        );
    }
}

export default ToDoLists;