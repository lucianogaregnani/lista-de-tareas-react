import { useState } from "react"
import TodoEdit from '/src/components/TodoEdit.jsx'
import TodoView from '/src/components/TodoView.jsx'

export default function Todo({deleteTodo, item}) {
    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState(item.title)

    const handleChange = (e) => {
        const value = e.target.value
        setTitle(value)
    }

    const handleClick = () => {
        setIsEdit(!isEdit)
    }

    const onDelete = () => {
        deleteTodo(item.id)
    }

    return(
        <div className="todo">
            <form>
            {
                isEdit? (<TodoEdit title={title} change={handleChange} click={handleClick} />) :
                        (<TodoView title={title} click={handleClick} deleteTodo={onDelete} />)
            }
            </form>
        </div>
    )
}