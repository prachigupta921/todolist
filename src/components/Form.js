import React from "react";
import {v4 as uuidv4} from "uuid";
import { useEffect } from "react";

 const Form = ({input,setinput,todos,settodos,editTodo,seteditTodo})=>{
    const updateTodo = (title,id, completed) => {
        const newTodo = todos.map((todo) =>{
            todo.id === id ? {title, id, completed}:todo;
        });
        settodos(newTodo);
        seteditTodo("");
    };
    useEffect(()=>{
        if(editTodo){
            setinput(editTodo.title);
        }else{
            setinput("");
        }
    }, [setinput,editTodo]);

    const onInputChange = (event) =>{
        setinput(event.target.value);
    }
    const onFormSubmit = (event) =>{
        event.preventDefault();
        if(!editTodo){
            settodos([...todos,{id: uuidv4(),title:input,completed:false}]);
            setinput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
        settodos([...todos,{id: uuidv4(),title:input,completed:false}])
        setinput("")
    }
    return(
        <form onSubmit={onFormSubmit} className="task-input">
            <input type="text" placeholder="Enter a todo..." className="input" value={input} required
            onChange={onInputChange}
            />
            <br/>
            <div>
            <button className="input-button" type="submit">Add</button>
            </div>
            <h1>Todo-List</h1>
        </form>
    )
}

export default Form