import ToDo from "./ToDo";

export default function ToDoList({todos, completeTodo}) {
    return (
        todos.map(todo => {
            return <ToDo todo={todo} completeTodo={completeTodo}/>
        })
    )
}
