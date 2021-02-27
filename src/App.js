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

	return (
		<div className="App">
			<Header />
			<Tasks tasks={tasks} />
		</div>
	);
}

export default App;
