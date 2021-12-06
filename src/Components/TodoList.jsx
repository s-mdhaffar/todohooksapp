import React from 'react'
import TodoCard from './TodoCard'

const TodoList = ({tasks,del,comp}) => {
    return (
        <div>
            {tasks.map((el,i)=><TodoCard key={i} task={el} del={del} comp={comp} />)}
        </div>
    )
}

export default TodoList
