import React from 'react'

const TodoCard = ({task,del,comp}) => {
    return (
        <div className={task.isDone?"Complete":""}>
            <h1>{task.action}</h1>
            <button onClick={()=>del(task.id)} >Delete</button>
            <button onClick={()=>comp(task.id)}>{task.isDone?"Undo":"Complete"}</button>
        </div>
    )
}

export default TodoCard
