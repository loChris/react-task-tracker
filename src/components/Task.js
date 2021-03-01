import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
	return (
		<div className="task">
			<h3>
				{task.task}
				<FaTimes
					onClick={() => onDelete(task.id)}
					style={{ color: 'red', cursor: 'pointer' }}
				/>
			</h3>
			<p>{task.date}</p>
		</div>
	);
};

export default Task;
