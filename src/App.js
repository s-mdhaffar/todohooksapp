import { useState } from 'react';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

function App () {
	const [ todos, setTodos ] = useState([
		{
			id     : Math.random(),
			action : 'Learn CSS',
			isDone : true
		},
		{
			id     : Math.random(),
			action : 'Learn HTML',
			isDone : false
		}
	]);

	const handleDelete = (x) => {
		setTodos(todos.filter((el) => el.id !== x));
	};

	const handleComplete = (y) => {
		setTodos(todos.map((el) => (el.id === y ? { ...el, isDone: !el.isDone } : el)));
	};

	const handleAdd = (inp) => {
		const newInp = {
			id     : Math.random(),
			action : inp,
			isDone : false
		};
		setTodos([ newInp, ...todos ]);
	};

	return (
		<div className="App">
			<AddTodo add={handleAdd} />
			<TodoList tasks={todos} del={handleDelete} comp={handleComplete} />
		</div>
	);
}

export default App;
