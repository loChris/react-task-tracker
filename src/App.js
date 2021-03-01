import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';

function App() {
	const [showAddTask, setShowAddTask] = useState(false);

	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		};
		getTasks();
	}, []);

	// fetch tasks from db.json
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		const data = await res.json();
		return data;
	};

	const addTask = async (task) => {
		const res = await fetch('http://localhost:5000/tasks', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(task),
		});

		const data = await res.json();
		setTasks([...tasks, data]);

		// const newTask = { id, ...task };
		// console.log(task);

		// setTasks([...tasks, newTask]);
	};

	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'DELETE',
		});

		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className="App">
			<Header
				onAddClick={() => setShowAddTask(!showAddTask)}
				showAddTask={showAddTask}
			/>

			{showAddTask && <AddTask onAddTask={addTask} />}

			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggleReminder={toggleReminder}
				/>
			) : (
				'No Tasks To Show'
			)}
		</div>
	);
}

export default App;
