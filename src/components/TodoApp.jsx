import { useState } from "react"
import Todo from '/src/components/Todo.jsx'

export default function TodoApp() {
    const [title, setTitle] = useState('')
    const [todos, setTodos] = useState([])

    const handleChange = (e) => {
        const value = e.target.value
        setTitle(value)
    }

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

    const handleSubmit = (e) => {
        e.preventDefault()
        const todosAux = [...todos]

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        validateTodo(newTodo, todosAux)
    }

    const deleteTodo = (id) => {
        const todosAux = [...todos]
        setTodos(
            todosAux.filter((todo) => todo.id !== id)
        )
    }

    return(
        <div className="todoContainer">
            <form className="todoCreateForm">
                <input type="text" className="todoInput" value={title} onChange={handleChange} />
                <input type="submit" value="Create todo" className="buttonCreate" onClick={handleSubmit}/>
            </form>
            <div className="todosContainer">
                {
                    todos.map((todo) => <Todo key={todo.id} deleteTodo={deleteTodo} item={todo} />)
                }
            </div>
        </div>
    )
}