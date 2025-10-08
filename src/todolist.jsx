import {v4 as uuidv4} from "uuid";
import { useState } from "react";
export default function Todolist(){
    let[todos,setTodos] = useState([{task: "sample-task", id: uuidv4()}]);
    let[newTodo,setNewTodo] = useState("");
    let addNewTask = () =>{
        setTodos((prevTodos) =>{
            return[...prevTodos,{task:newTodo, id: uuidv4()}]
        });
        setNewTodo("");
    };
    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos( (prevTodos)=> prevTodos.filter((prevTodo) => prevTodo.id != id));
    };
    let upperCaseAll = () =>{
        todos.map((todo)=>{
            todo.task = todo.task.toUpperCase();
        });
        setTodos([...todos]);

    }
    let upperCaseOne = (id) =>{
        todos.map((todo)=>{
            if(todo.id == id){  
                todo.task = todo.task.toUpperCase();
            }
        });
        setTodos([...todos]);
    }

    return(
        <>
        <div>
            <input placeholder="Add a Task" 
              value={newTodo}
              onChange={updateTodoValue}
             ></input>
            <br></br><br></br>
            <button onClick={addNewTask} >Add Task</button>
            <br></br><br></br><br></br>
            <hr></hr>
            <h4>
               Tasks Todo List
            </h4>
            <ul>
                { todos.map((todo)=>(
                         <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp; &nbsp; &nbsp;
                            <button onClick={ () => deleteTodo(todo.id)} >Delete</button>
                            <button onClick={ () => upperCaseOne(todo.id)} >UppperCase One</button>
                            </li>

                    ))}
            </ul>
            <br></br><br></br><br></br>
            <button onClick={upperCaseAll} >UpperCase</button>

        </div>
        </>
    );
}