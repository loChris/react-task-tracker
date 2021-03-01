import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			task: 'Doctors appointment',
			date: 'Feb 5th at 2pm',
			reminder: true,
		},
		{
			id: 2,
			task: 'Meeting at school',
			date: 'Feb 1st at 11am',
			reminder: true,
		},
		{
			id: 3,
			task: 'Food shopping',
			date: 'Feb 1st at 2pm',
			reminder: false,
		},
		{
			id: 4,
			task: 'Task due',
			date: 'Feb 10th at 11pm',
			reminder: true,
		},
	]);

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
			<Header />
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
