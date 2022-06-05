import React, { useState } from "react";

const Todofunc = ({todos, settodos, seteditTodo}) => {
    const [isEditem, setisEditem] = useState("");
    const [toggleButton, settoggleButton] = useState(false);
    const handlecomplete = (todo) => {
        settodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return{...item, completed: !item.completed}
                }
                return item;
            })
        )
    }
    const handledit = ({id})=>{
        const findTodo= todos.find((todo) => todo.id === id);
        seteditTodo(findTodo);
    };
    const editItem = (index) =>{
        const item_todo = todos.find((todo)=>{
            return todo===index;
        })
        setisEditem(index);
        settoggleButton(true);

    }
    const handledelete = ({id})=> {
        settodos(todos.filter((todo)=>todo.id !== id))
    }
    return(
        <div className="funcs">
            {todos.map((todo)=>(
                <li className="list-item" keys={todo.id}>
                    <input type="text" value={todo.title}
                    className="list" onChange={(event)=> event.preventDefault()}
                    />
                    <div>
                        <button className="button-complete task-button" onClick={()=>handlecomplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button" onClick={()=>editItem(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={()=>handledelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))};
        </div>
    );
}

export default Todofunc