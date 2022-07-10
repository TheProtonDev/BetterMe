export default function ToDo({todo, completeTodo}) {
    function handleToggle(){
        completeTodo(todo.id)
    }
    return (
        <div>
            <input type="checkbox" onChange={handleToggle} checked={todo.completed}></input>
            {todo.name}
        </div>
    )
}
