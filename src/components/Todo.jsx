import Form from "./Form";
import moon from "../assets/images/icon-moon.svg";

const Todo = ({ taskIdFunc }) => {
    return (
        <div>
            <div className="todo-title">
                <h1
                    style={{
                        fontFamily: "sans-serif",
                        color: "white",
                        marginRight: "30px",
                    }}
                >
                    Todo
                </h1>
                <img src={moon} alt="imgae" />
            </div>
            <Form taskIdFunc={taskIdFunc} />
        </div>
    );
};

export default Todo;
