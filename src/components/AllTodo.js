import React from "react";

class AllTodos extends React.Component {
  render() {
    return (
      <ul className="listing">
        {this.props.showSSTBank.map((todo, index) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                name="isDone"
                id=""
                checked={todo.isDone}
                onChange={event => this.props.handleisDone(todo.id, event)}
              />
              <p className={todo.isDone ? "para-target strike" : "para-target"}>
                {todo.text}
              </p>
              <span
                onClick={event => this.props.handleDelete(todo.id, event)}
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default AllTodos;


{/* <ul className="listing">{this.showSSTBank().map((todo, index) => {
                    return (
                        <li>
                            <input type="checkbox" name="isDone" id=""
                                checked={todo.isDone}
                                data-id={index}
                                onClick={event => {
                                    const id = event.target.dataset.id;
                                    this.state.sst[id].isDone = !this.state.sst[id].isDone;
                                    this.setState({ isDone: this.state.sst[id].isDone });
                                    localStorage.setItem("Todo", JSON.stringify(this.state.sst))
                                }}
                            />

                            <p>{todo.text}</p>

                            <span
                                data-id={index}
                                onClick={event => {
                                    const id = event.target.dataset.id;
                                    this.state.sst.splice(id, 1);
                                    this.setState({ sst: this.state.sst });
                                    localStorage.setItem("Todo", JSON.stringify(this.state.sst))
                                }}
                            > X </span>
                        </li>
                    )
                })}</ul> */}