import React from "react";


function FooterArea(props){
    return  <footer className="footer">
        <span className="itemsleft">{props.data.showSSTBank().filter(todo => !todo.isDone).length} items left </span>

        <button className="all" onClick={event =>props.changeTab('all')}>All</button>

        <button className="active" onClick={event =>props.changeTab('active')}>Active list</button>

        <button className="finished" onClick={event=>props.changeTab('completed')}>Completed</button>

        <button className="clearfinished" 
            onClick={event =>{props.data.clearFinished()}}
        >Clear Completed</button>
    </footer>
}
export default FooterArea;



