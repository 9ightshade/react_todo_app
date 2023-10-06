import { useState } from "react";
import "./App.css";
import moon from "./assets/images/icon-moon.svg";

let taskId = Math.trunc(Math.random());
console.log(taskId);

function Todo() {
    const [task, setTask] = useState("");
    const [todo, setTodo] = useState([]);
    const [error, setError] = useState("");
    function handleClick() {
        console.log(task);
        if (task != "") {
            todo.unshift({
                id: taskId++,
                todoTask: task,
            });
            console.log(todo);
            setError("")
            setTask("");
        } else {
            setError("invalid, input cannot be empty.");
            console.log(error);
        }
    }


    function deleteTodo(id) {
        console.log(id);

        const newTodo = todo.filter((todos) => {
            return todos.id != id;
        });
        setTodo(newTodo);
        console.log(newTodo);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <div className="todo-title">
                <h1 style={{ fontFamily: "sans-serif", color: "white", marginRight:"30px" }}>
                    Todo
                </h1>
                <img src={moon} alt="imgae" />
            </div>

            <form
                onSubmit={handleSubmit}
                style={{ display: "flex", justifyContent: "center" }}
            >
                <input
                    className="create-todo"
                    type="text"
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    id="todo-input"
                    placeholder="create a new todo"
                />
                <button onClick={handleClick} className="add-todo">
                    Add
                </button>
            </form>

            <p className="error-message">{error}</p>
            <div className="list-content">
                {todo.map((todos) => {
                    return (
                        <ul className="list-item" key={todos.id}>
                            <li className="todo-list">{todos.todoTask}</li>
                            <button
                                className="delete-todo"
                                key={todos.id}
                                onClick={() => {
                                    deleteTodo(todos.id);
                                }}
                            >
                                Del
                            </button>
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}

function App() {
    return (
        <>
            <div className="header">
                <Todo />
            </div>
        </>
    );
}

export default App;
