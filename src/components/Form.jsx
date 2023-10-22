import { useState } from "react";

const Form = ({ taskIdFunc }) => {
    const [task, setTask] = useState("");
    const [todo, setTodo] = useState([]);

    const handleClick = () => {
        console.log(task);
        let newId = taskIdFunc();
        if (task != "") {
            setTodo([
                {
                    id: newId,
                    todoTask: task,
                },
                ...todo,
            ]);
            console.log(todo);
            setTask("");
        } else {
            alert("Please Create a Todo");
        }
    };

    const deleteTodo = (id) => {
        console.log(id);

        const newTodo = todo.filter((todos) => {
            return todos.id != id;
        });
        setTodo(newTodo);
        console.log(newTodo);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
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
};

export default Form;
