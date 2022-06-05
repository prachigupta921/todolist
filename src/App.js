//import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Header from './components/Header';
import Form from './components/Form';
import Adding from './components/Adding';
import Todofunc from './components/Todofunc';


function App() {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState([]);
  const [editTodo, seteditTodo] = useState(null);
  return (
    <>
    <div className="App">
      <Header/>
      <Form
      input={input}
      setinput={setinput}
      todos={todos}
      settodos={settodos}
      editTodo={editTodo}
      seteditTodo={seteditTodo}
      />
      <Adding/>
      <Todofunc todos={todos} settodos={settodos} seteditTodo={seteditTodo} />
    </div>
    <div>
      {/* <Todofunc todos={todos} settodos={settodos} /> */}
    </div>
    </>
  );
}

export default App
