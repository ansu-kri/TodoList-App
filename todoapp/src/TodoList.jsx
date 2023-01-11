import React from "react";

const TodoList = (props) =>{

    // const deleteItems =()=>{
    //     console.log("delete")
    // }
    return (
        <>
           <div className="todo_style">
           <i className="fa fa-times-circle" style={{fontSize:"30px", color:"#8566aa"}} arial-hidden="true"
           onClick={()=>{
            props.onSelect(props.id)
           }} />
              <li>{props.text}</li>
           </div>
        </>
    );
}
export default TodoList;