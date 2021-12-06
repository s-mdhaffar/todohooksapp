import React, { useState } from 'react'

const AddTodo = ({add}) => {

    const [newTask, setNewTask] = useState("")

const handleInput =(e)=>{
setNewTask(e.target.value)
}

const handleSubmit=(e)=>{
    e.preventDefault();
    newTask.trim()===""?
    alert('insert Text Please'):
    add(newTask);
    setNewTask("")
}

    return (
        <div>
            <h1>ToDO App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTask} onChange={handleInput} />
                <button type="input">Add</button>
            </form>
        </div>
    )
}

export default AddTodo
