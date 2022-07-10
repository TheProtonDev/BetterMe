import './App.css';
import ToDoList from "./ToDoList";
import React, {useRef, useState} from "react";

function App() {
    const [TodoList, setToDosList] = useState([{id: 'example', name: "Completed ToDo", completed: true}, {id: 'example2', name: "Uncompleted ToDo", completed: false}])
    const todoRef = useRef()

    // Function to append a ToDo object with a random ID to the already existing todo list
    function addToDo(event){
        const name = todoRef.current.value
        setToDosList(prevToDos => {
            return [...prevToDos, {id: Math.floor(Math.random()*100), name: name, completed: false}]
        })
    }

    function clearCompleted(){
        const updatedTodos = TodoList.filter(todo => !todo.completed)
        setToDosList(updatedTodos)
    }

    // Setter for completing todos
    function completeTodo(id){
        const newTodos = [...TodoList]
        const foundTodo = newTodos.find(todo => todo.id === id)
        if (foundTodo){
            foundTodo.completed = !foundTodo.completed;
            setToDosList(newTodos)
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <input className="addToDoField" ref={todoRef} placeholder="Task ToDo"></input>
                <button className="button" onClick={addToDo}>Submit</button>
                <button className="button" onClick={clearCompleted}>Clear</button>
                <ToDoList todos={TodoList} completeTodo={completeTodo}/>
            </header>
        </div>
    );
}

export default App;
