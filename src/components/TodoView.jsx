export default function TodoView({title, click, deleteTodo}) {
    return(
        <div>
            {title}
            <button onClick={click}>Editar</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}