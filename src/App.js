import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
	const [showAddTask, setShowAddTask] = useState(false);

	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task };
		console.log(task);

		setTasks([...tasks, newTask]);
	};

	const deleteTask = (id) => {
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

			{showAddTask && <AddTask onAddClick={addTask} />}

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
