import {useState} from "react";
import CreateTodo from "./components/CreateToDo";
import TodoContainer from "./components/TodoContainer";

function App() {

  const [toDoCreate, setToDoCreate]=useState({});
  

  return (
    <div className="App">
      <CreateTodo setToDoCreate={setToDoCreate}/>
      <TodoContainer toDoCreate={toDoCreate}/>
    </div>
  );
}

export default App;
