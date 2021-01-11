import React from "react";
import "./input.css";

const Input = ({ input, setInput, todos, setTodos }) => {
	const setInputHandler = e => {
		setInput(e.target.value);
	};

	const setTodosHandlerClick = () => {
		if (input !== "") {
			setTodos([
				...todos,
				{
					id: Math.round(Math.random() * 1000),
					text: input,
					isDone: false,
				},
			]);
		}
		setInput("");
	};

	const setTodosHandlerEnter = e => {
		if (input !== "") {
			if (e.keyCode === 13) {
				setTodos([
					...todos,
					{
						id: Math.round(Math.random() * 1000),
						text: input,
						isDone: false,
					},
				]);
				setInput("");
			}
		}
	};

	return (
		<div className='input-wrap'>
			<input
				className='input'
				onChange={setInputHandler}
				type='text'
				placeholder='Make your todo here...'
				value={input}
				onKeyUp={setTodosHandlerEnter}
			/>
			<i
				className='far fa-edit'
				onClick={setTodosHandlerClick}
			></i>
		</div>
	);
};

export default Input;
