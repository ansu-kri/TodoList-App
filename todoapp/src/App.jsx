import React, { useState } from "react";
import TodoList from "./TodoList";


const App =() =>{

  const [inputList,setInputList] = useState("");
  const [Items,setItems] = useState([]); //we need array use square bracket

  const itemEvent =(event)=>{
    setInputList(event.target.value)

  }
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems, inputList]
    });
    setInputList('');
  }

  const deleteItems =(id)=>{
        console.log("delete");

        setItems((oldItems)=>{
          return oldItems.filter((arrElem,index)=>{
            return index!==id;
          })
        })
     }
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add a Items"
        value={inputList} 
        onChange={itemEvent} />
        <button onClick={listOfItems}>+</button>

        <ol>
           {/*<li>{inputList}</li>*/}
           {Items.map((itemsvalue, index) =>{
            // return <li>{itemsvalue}</li>
            return <TodoList key={index} id={index} text={itemsvalue} onSelect={deleteItems}
            />;
           })}
        </ol>
      </div>
    </div>
    
    </>
  )
}
export default App;
