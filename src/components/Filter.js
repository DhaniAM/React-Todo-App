import React, { useEffect } from "react";
import "./filter.css";

const Filter = ({
	todos,
	filteredTodos,
	setFilteredTodos,
	status,
	setStatus,
}) => {
	const statusHandler = e => {
		setStatus(e.target.value);
	};

	return (
		<div className='filter'>
			<select
				name='todo'
				className='filter-todo'
				onChange={statusHandler}
			>
				<option value='all'>All</option>
				<option value='completed'>Completed</option>
				<option value='uncompleted'>Uncompleted</option>
			</select>
		</div>
	);
};

export default Filter;
