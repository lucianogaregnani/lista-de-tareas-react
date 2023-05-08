const validateTodo = (todo,array) => {
    if(todo.title) {
        array.unshift(todo)
        setTitle('')
        setTodos(array)
    }
    else {
        setTitle('')
    }
}

export {validateTodo}