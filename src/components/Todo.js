import React from "react";
import "./todo.css";

const Todo = ({ text, todos, setTodos, todo }) => {
	const deleteHandler = () => {
		setTodos(todos.filter(el => el.id !== todo.id));
	};

	const checkHandler = () => {
		setTodos(
			todos.map(el => {
				if (el.id === todo.id) {
					return {
						...el,
						isDone: !el.isDone,
					};
				} else {
					return el;
				}
			})
		);
	};

	return (
		<div className={`todo ${todo.isDone ? "check" : ""}`}>
			<p className='todo-text'>{text}</p>
			<i className='fa fa-check' onClick={checkHandler}></i>
			<i className='fa fa-trash' onClick={deleteHandler}></i>
		</div>
	);
};

export default Todo;
