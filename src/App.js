import "./App.css";
import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import Input from "./components/Input";
import Filter from "./components/Filter";

const App = () => {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	// Load todo if exist
	useEffect(() => {
		loadTodos();
	}, []);

	//  Save to local when making new todo
	useEffect(() => {
		saveLocalTodos();
	}, [todos]);

	useEffect(() => {
		filterHandler();
	}, [todos, status]);

	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const loadTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let localTodo = JSON.parse(localStorage.getItem("todos"));
			setTodos(localTodo);
		}
	};

	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(
					todos.filter(todo => todo.isDone === true)
				);
				break;
			case "uncompleted":
				setFilteredTodos(
					todos.filter(todo => todo.isDone === false)
				);
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	return (
		<div>
			<div className='top-wrap'>
				<Input
					input={input}
					setInput={setInput}
					todos={todos}
					setTodos={setTodos}
				/>
				<Filter
					status={status}
					setStatus={setStatus}
					setFilteredTodos={setFilteredTodos}
					filteredTodos={filteredTodos}
					todos={todos}
				/>
			</div>
			<div className='todo-list'>
				{filteredTodos.map(todo => {
					return (
						<Todo
							text={todo.text}
							key={todo.id}
							isDone={todo.isDone}
							todos={todos}
							setTodos={setTodos}
							todo={todo}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default App;
